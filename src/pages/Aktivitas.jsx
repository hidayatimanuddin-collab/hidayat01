import { useState } from "react";

function Aktivitas({ data = [], setData }) {
  const [form, setForm] = useState({
    kegiatan: "",
    tanggal: "",
    kategori: "",
    status: "Direncanakan",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const add = () => {
    if (!form.kegiatan || !form.tanggal || !form.kategori) return;

    setData([...data, form]);

    setForm({
      kegiatan: "",
      tanggal: "",
      kategori: "",
      status: "Direncanakan",
    });
  };

  const removeItem = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  // 🔥 SORT TANGGAL TERDEKAT
  const sortedData = [...data].sort(
    (a, b) => new Date(a.tanggal) - new Date(b.tanggal)
  );

  // 🔥 HARI INI
  const today = new Date().toISOString().slice(0, 10);

  const getStatusColor = (status) => {
    if (status === "Selesai") return "bg-green-100 text-green-700";
    if (status === "Proses") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-600";
  };

  const getKategoriIcon = (kategori) => {
    if (kategori === "Tanam") return "🌱";
    if (kategori === "Pupuk") return "🧪";
    if (kategori === "Panen") return "🌾";
    return "📌";
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          📅 Jadwal Kegiatan Tani
        </h1>
        <p className="text-gray-500">
          Kelola aktivitas pertanian harianmu
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white p-5 rounded-2xl shadow mb-8 max-w-xl border">
        <h2 className="font-semibold mb-3">Tambah Kegiatan</h2>

        <div className="grid gap-3">
          <input
            name="kegiatan"
            value={form.kegiatan}
            onChange={handleChange}
            placeholder="Contoh: Tanam Padi"
            className="p-3 border rounded-xl"
          />

          <input
            type="date"
            name="tanggal"
            value={form.tanggal}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          />

          <select
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          >
            <option value="">Pilih Kategori</option>
            <option value="Tanam">🌱 Tanam</option>
            <option value="Pupuk">🧪 Pupuk</option>
            <option value="Panen">🌾 Panen</option>
          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          >
            <option value="Direncanakan">Direncanakan</option>
            <option value="Proses">Proses</option>
            <option value="Selesai">Selesai</option>
          </select>

          <button
            onClick={add}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl font-semibold"
          >
            + Tambah Kegiatan
          </button>
        </div>
      </div>

      {/* LIST */}
      {sortedData.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">
          Belum ada kegiatan 📅
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedData.map((item, i) => {
            const isToday = item.tanggal === today;

            return (
              <div
                key={i}
                className={`p-5 rounded-2xl shadow border transition hover:scale-[1.02]
                ${isToday ? "bg-green-100 border-green-400" : "bg-white"}
                `}
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-gray-800">
                    {getKategoriIcon(item.kategori)} {item.kegiatan}
                  </h2>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mt-3 text-gray-600">
                  📅 {new Date(item.tanggal).toLocaleDateString("id-ID")}
                </p>

                {isToday && (
                  <p className="text-green-700 text-sm mt-2 font-semibold">
                    🔥 Hari ini!
                  </p>
                )}

                <button
                  onClick={() => removeItem(i)}
                  className="mt-4 text-sm text-red-500 hover:text-red-700"
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

export default Aktivitas;