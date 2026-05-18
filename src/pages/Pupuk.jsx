import { useState } from "react";

export default function Pupuk({ data, setData }) {
  const [form, setForm] = useState({
    nama: "",
    stok: "",
    status: "",
    satuan: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const add = () => {
    if (!form.nama || !form.stok || !form.satuan) return;

    setData([
      ...data,
      {
        nama: form.nama,
        stokAwal: Number(form.stok),
        sisa: Number(form.stok),
        terpakai: 0,
        status: form.status || "Tersedia",
        satuan: form.satuan,
        createdBy: "Hidaayat"
      }
    ]);

    setForm({ nama: "", stok: "", status: "", satuan: "" });
  };

  const removeItem = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const pakaiPupuk = (index) => {
    const newData = [...data];

    if (newData[index].sisa <= 0) return;

    newData[index].sisa -= 1;
    newData[index].terpakai += 1;

    setData(newData);
  };

  const getStatusStyle = (status) => {
    const s = status.toLowerCase();
    if (s.includes("tersedia")) return "bg-green-100 text-green-700";
    if (s.includes("habis")) return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  const totalStok = data.reduce((a, b) => a + b.stokAwal, 0);
  const totalSisa = data.reduce((a, b) => a + b.sisa, 0);
  const totalTerpakai = data.reduce((a, b) => a + b.terpakai, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-green-50 p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          🧪 Inventory Pupuk
        </h1>
        <p className="text-gray-500">
          Sistem gudang pupuk real-time
        </p>
      </div>

      {/* STAT */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <p>Total Stok</p>
          <h2 className="text-xl font-bold">{totalStok}</h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <p>Sisa Stok</p>
          <h2 className="text-xl font-bold text-green-600">{totalSisa}</h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <p>Terpakai</p>
          <h2 className="text-xl font-bold text-red-500">{totalTerpakai}</h2>
        </div>
      </div>

      {/* FORM */}
      <div className="bg-white p-5 rounded-2xl shadow max-w-xl mb-8 border">
        <h2 className="font-semibold mb-3">Tambah Pupuk</h2>

        <div className="grid gap-3">
          <input
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama pupuk"
            className="p-3 border rounded-xl"
          />

          <input
            name="stok"
            value={form.stok}
            onChange={handleChange}
            placeholder="Stok awal"
            className="p-3 border rounded-xl"
          />

          <input
            name="satuan"
            value={form.satuan}
            onChange={handleChange}
            placeholder="Satuan (kg / sak / g)"
            className="p-3 border rounded-xl"
          />

          <input
            name="status"
            value={form.status}
            onChange={handleChange}
            placeholder="Status"
            className="p-3 border rounded-xl"
          />

          <button
            onClick={add}
            className="bg-purple-600 text-white p-3 rounded-xl"
          >
            + Tambah
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow border">

            <div className="flex justify-between">
              <h2 className="font-bold">🧪 {item.nama}</h2>

              <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(item.status)}`}>
                {item.status}
              </span>
            </div>
            <p className="mt-3">
               Stok Awal: {item.stokAwal} {item.satuan}
            </p>

            <p className="text-green-600">
               Sisa: {item.sisa} {item.satuan}
            </p>

            <p className="text-red-500">
               Terpakai: {item.terpakai} {item.satuan}
            </p>

            <p className="text-xs text-gray-400 mt-2">
               Dicatat oleh: {item.createdBy}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => pakaiPupuk(i)}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
              >
                Pakai 1
              </button>

              <button
                onClick={() => removeItem(i)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
              >
                Hapus
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}