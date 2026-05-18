import { useState } from "react";

function Lahan({ lahan, setLahan }) {
  const [nama, setNama] = useState("");
  const [luas, setLuas] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // 🔥 TAMBAHAN
  const [search, setSearch] = useState("");

  const tambahLahan = () => {
    if (!nama.trim() || !luas || !lokasi) return;

    const dataBaru = { nama, luas, lokasi };

    if (editIndex !== null) {
      const updated = [...lahan];
      updated[editIndex] = dataBaru;
      setLahan(updated);
      setEditIndex(null);
    } else {
      setLahan([...lahan, dataBaru]);
    }

    // 🔥 TAMBAHAN ALERT
    alert("Data lahan berhasil disimpan!");

    setNama("");
    setLuas("");
    setLokasi("");
  };

  const hapusLahan = (index) => {
    if (window.confirm("Yakin hapus data?")) {
      setLahan(lahan.filter((_, i) => i !== index));
    }
  };

  const editLahan = (index) => {
    const data = lahan[index];
    setNama(data.nama);
    setLuas(data.luas);
    setLokasi(data.lokasi);
    setEditIndex(index);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        Manajemen Lahan
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <div className="grid md:grid-cols-3 gap-3">
          <input
            className="border p-3 rounded"
            placeholder="Nama Lahan"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            className="border p-3 rounded"
            placeholder="Luas"
            value={luas}
            onChange={(e) => setLuas(e.target.value)}
          />
          <input
            className="border p-3 rounded"
            placeholder="Lokasi"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          />
        </div>

        <button
          onClick={tambahLahan}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
        >
          {editIndex !== null ? "Update" : "Tambah"}
        </button>
      </div>

      {/* 🔍 TAMBAHAN SEARCH */}
      <input
        type="text"
        placeholder="Cari lahan..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Nama</th>
              <th className="p-4">Luas</th>
              <th className="p-4">Lokasi</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {lahan.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-400">
                  Belum ada data
                </td>
              </tr>
            ) : (
              lahan
                .filter((item) =>
                  item.nama.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{item.nama}</td>
                    <td className="p-4">{item.luas}</td>
                    <td className="p-4">{item.lokasi}</td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() => editLahan(index)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => hapusLahan(index)}
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

export default Lahan;
