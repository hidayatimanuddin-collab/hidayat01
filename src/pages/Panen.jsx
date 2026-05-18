import { useState } from "react";

function Panen({ lahan, panen, setPanen }) {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lahanId, setLahanId] = useState(""); // 🔥 TAMBAHAN
  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const tambahPanen = () => {
    if (!nama.trim() || !jumlah || !tanggal || !lahanId) return;

    const dataBaru = {
      nama,
      jumlah,
      tanggal,
      lahan: lahanId, // 🔥 RELASI KE LAHAN
    };

    if (editIndex !== null) {
      const updated = [...panen];
      updated[editIndex] = dataBaru;
      setPanen(updated);
      setEditIndex(null);
    } else {
      setPanen([...panen, dataBaru]);
    }

    alert("Data panen berhasil disimpan!");

    setNama("");
    setJumlah("");
    setTanggal("");
    setLahanId(""); // 🔥 RESET
  };

  const hapusPanen = (index) => {
    if (window.confirm("Yakin hapus data?")) {
      setPanen(panen.filter((_, i) => i !== index));
    }
  };

  const editPanen = (index) => {
    const data = panen[index];
    setNama(data.nama);
    setJumlah(data.jumlah);
    setTanggal(data.tanggal);
    setLahanId(data.lahan); // 🔥 AMBIL LAHAN
    setEditIndex(index);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        Manajemen Panen
      </h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <div className="grid md:grid-cols-4 gap-3">

          {/* 🔥 DROPDOWN LAHAN */}
          <select
            className="border p-3 rounded"
            value={lahanId}
            onChange={(e) => setLahanId(e.target.value)}
          >
            <option value="">Pilih Lahan</option>
            {lahan.map((l, i) => (
              <option key={i} value={l.nama}>
                {l.nama}
              </option>
            ))}
          </select>

          <input
            className="border p-3 rounded"
            placeholder="Hasil"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />

          <input
            className="border p-3 rounded"
            placeholder="Jumlah (kg)"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
          />

          <input
            type="date"
            className="border p-3 rounded"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
        </div>

        <button
          onClick={tambahPanen}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
        >
          {editIndex !== null ? "Update" : "Tambah"}
        </button>
      </div>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Cari hasil panen..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Lahan</th> {/* 🔥 TAMBAHAN */}
              <th className="p-4">Hasil</th>
              <th className="p-4">Jumlah</th>
              <th className="p-4">Tanggal</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {panen.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-400">
                  Belum ada data panen
                </td>
              </tr>
            ) : (
              panen
                .filter((item) =>
                  item.nama.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{item.lahan}</td> {/* 🔥 TAMPIL */}
                    <td className="p-4">{item.nama}</td>
                    <td className="p-4">{item.jumlah} kg</td>
                    <td className="p-4">
                      {new Date(item.tanggal).toLocaleDateString("id-ID")}
                    </td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() => editPanen(index)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => hapusPanen(index)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Panen;
