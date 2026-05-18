import { useState, useEffect } from "react";

export default function Irigasi({ data, setData }) {
  const [form, setForm] = useState({
    lahan: "",
    waktu: "",
    status: "Pending"
  });

  const [now, setNow] = useState(new Date());

  // 🔥 CLOCK REALTIME
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const add = () => {
    if (!form.lahan.trim() || !form.waktu) {
      alert("Isi dulu data!");
      return;
    }

    setData((prev) => [
      ...prev,
      {
        lahan: form.lahan,
        waktu: form.waktu,
        status: "Pending"
      }
    ]);

    setForm({ lahan: "", waktu: "", status: "Pending" });
  };

  const removeItem = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  // 🔥 STATUS OTOMATIS BERDASARKAN JAM
  const getStatusRealtime = (item) => {
    const current = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });

    if (current === item.waktu) return "Aktif";
    if (current > item.waktu) return "Selesai";
    return "Pending";
  };

  const getStatusStyle = (status) => {
    if (status === "Aktif") return "bg-green-100 text-green-700";
    if (status === "Pending") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-200 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">💧 Smart Irigasi</h1>
        <p className="text-gray-500">Realtime & otomatis</p>

        {/* 🔥 JAM SEKARANG */}
        <p className="mt-2 text-blue-600">
          ⏰ Sekarang: {now.toLocaleTimeString("id-ID")}
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white p-5 rounded-2xl shadow mb-6 max-w-xl">
        <div className="grid gap-3">
          <input
            name="lahan"
            value={form.lahan}
            onChange={handleChange}
            placeholder="Nama lahan"
            className="p-3 border rounded-xl"
          />

          <input
            type="time"
            name="waktu"
            value={form.waktu}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          />

          <button
            onClick={add}
            className="bg-blue-600 text-white p-3 rounded-xl"
          >
            + Tambah
          </button>
        </div>
      </div>

      {/* LIST */}
      {data.length === 0 ? (
        <p className="text-center text-gray-400">
          Belum ada jadwal 💧
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item, i) => {
            const status = getStatusRealtime(item);

            return (
              <div
                key={i}
                className={`p-5 rounded-2xl shadow border transition
                ${status === "Aktif" ? "bg-green-50 scale-105" : "bg-white"}
                `}
              >
                <div className="flex justify-between">
                  <h2 className="font-bold">🌾 {item.lahan}</h2>

                  <span className={`px-3 py-1 text-xs rounded-full ${getStatusStyle(status)}`}>
                    {status}
                  </span>
                </div>

                <p className="mt-2">⏰ {item.waktu}</p>

                {/* 🔥 NOTIFIKASI */}
                {status === "Aktif" && (
                  <p className="text-green-600 mt-2 text-sm">
                    🔔 Sedang berlangsung sekarang!
                  </p>
                )}

                <button
                  onClick={() => removeItem(i)}
                  className="mt-4 text-red-500 text-sm"
                >
                  Hapus
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}