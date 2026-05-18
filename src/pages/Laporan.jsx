import { useMemo } from "react";

export default function Laporan({
  lahan = [],
  panen = [],
  pupuk = [],
  irigasi = [],
}) {

  // 🔥 TOTAL DATA
  const totalLahan = lahan.length;
  const totalPanen = panen.length;
  const totalPupuk = pupuk.length;
  const totalIrigasi = irigasi.length;

  // 🔥 TOTAL HASIL PANEN
  const totalHasilPanen = panen.reduce(
    (a, b) => a + Number(b.jumlah || 0),
    0
  );

  // 🔥 TOTAL STOK PUPUK
  const totalStokPupuk = pupuk.reduce(
    (a, b) => a + Number(b.sisa || 0),
    0
  );

  // 🔥 PANEN TERBARU
  const panenTerbaru = useMemo(() => {
    return [...panen]
      .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
      .slice(0, 5);
  }, [panen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          📑 Laporan Pertanian
        </h1>

        <p className="text-gray-500 mt-2">
          Monitoring seluruh aktivitas pertanian secara realtime
        </p>
      </div>

      {/* CARD STATISTIK */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        <div className="bg-white p-5 rounded-3xl shadow border">
          <p className="text-gray-500">Total Lahan</p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {totalLahan}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow border">
          <p className="text-gray-500">Total Panen</p>

          <h2 className="text-3xl font-bold text-yellow-500 mt-2">
            {totalPanen}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow border">
          <p className="text-gray-500">Sisa Pupuk</p>

          <h2 className="text-3xl font-bold text-purple-600 mt-2">
            {totalStokPupuk}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow border">
          <p className="text-gray-500">Jadwal Irigasi</p>

          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            {totalIrigasi}
          </h2>
        </div>

      </div>

      {/* SUMMARY */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">

        {/* HASIL PANEN */}
        <div className="bg-white p-6 rounded-3xl shadow border">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            🌾 Statistik Panen
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Total Hasil Panen</span>

              <span className="font-bold text-green-600">
                {totalHasilPanen} kg
              </span>
            </div>

            <div className="flex justify-between">
              <span>Jumlah Data Panen</span>

              <span className="font-bold">
                {totalPanen}
              </span>
            </div>

          </div>
        </div>

        {/* PUPUK */}
        <div className="bg-white p-6 rounded-3xl shadow border">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            🧪 Statistik Pupuk
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Total Jenis Pupuk</span>

              <span className="font-bold text-purple-600">
                {totalPupuk}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Sisa Total Stok</span>

              <span className="font-bold text-green-600">
                {totalStokPupuk}
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* TABEL PANEN TERBARU */}
      <div className="bg-white rounded-3xl shadow border overflow-hidden">

        <div className="p-5 border-b">
          <h2 className="text-2xl font-bold text-gray-700">
            📋 Riwayat Panen Terbaru
          </h2>
        </div>

        <table className="w-full text-left">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Lahan</th>
              <th className="p-4">Hasil</th>
              <th className="p-4">Jumlah</th>
              <th className="p-4">Tanggal</th>
            </tr>
          </thead>

          <tbody>

            {panenTerbaru.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-6 text-gray-400"
                >
                  Belum ada laporan panen
                </td>
              </tr>
            ) : (
              panenTerbaru.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4">{index + 1}</td>

                  <td className="p-4">
                    {item.lahan}
                  </td>

                  <td className="p-4">
                    {item.nama}
                  </td>

                  <td className="p-4 text-green-600 font-semibold">
                    {item.jumlah} kg
                  </td>

                  <td className="p-4">
                    {new Date(item.tanggal).toLocaleDateString("id-ID")}
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