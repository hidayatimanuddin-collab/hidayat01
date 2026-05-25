import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard({
  lahan,
  panen,
  aktivitas,
  irigasi,
  pupuk,
}) {
  const dataChart = Object.values(
    panen.reduce((acc, item) => {
      if (!acc[item.nama]) {
        acc[item.nama] = {
          name: item.nama,
          total: 0,
        };
      }

      acc[item.nama].total += Number(
        item.jumlah || 0
      );

      return acc;
    }, {})
  );

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* STAT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">

        <div className="bg-green-600 text-white p-5 rounded-2xl">
          <p>Total Lahan</p>

          <h2 className="text-2xl font-bold">
            {lahan.length}
          </h2>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-2xl">
          <p>Total Panen</p>

          <h2 className="text-2xl font-bold">
            {panen.length}
          </h2>
        </div>

        <div className="bg-blue-500 text-white p-5 rounded-2xl">
          <p>Total Berat</p>

          <h2 className="text-2xl font-bold">
            {
              panen.reduce(
                (t, i) =>
                  t + Number(i.jumlah || 0),
                0
              )
            }{" "}
            kg
          </h2>
        </div>

        <div className="bg-indigo-500 text-white p-5 rounded-2xl">
          <p>Aktivitas</p>

          <h2 className="text-2xl font-bold">
            {aktivitas.length}
          </h2>
        </div>

        <div className="bg-purple-500 text-white p-5 rounded-2xl">
          <p>Irigasi</p>

          <h2 className="text-2xl font-bold">
            {irigasi.length}
          </h2>
        </div>

      </div>

      {/* PUPUK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

        <div className="bg-pink-500 text-white p-5 rounded-2xl">
          <p>Total Pupuk</p>

          <h2 className="text-2xl font-bold">
            {pupuk.length}
          </h2>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-2xl">
          <p>Stok Pupuk</p>

          <h2 className="text-2xl font-bold">
            {
              pupuk.reduce(
                (t, i) =>
                  t + Number(i.sisa || 0),
                0
              )
            }
          </h2>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-2xl">
          <p>Pupuk Terpakai</p>

          <h2 className="text-2xl font-bold">
            {
              pupuk.reduce(
                (t, i) =>
                  t + Number(i.terpakai || 0),
                0
              )
            }
          </h2>
        </div>

      </div>

      {/* GRAFIK */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow mb-6">

        <h2 className="mb-4 font-semibold">
          Grafik Panen
        </h2>

        {dataChart.length === 0 ? (
          <p className="text-gray-400">
            Belum ada data
          </p>
        ) : (
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={dataChart}>
              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="total" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* INFO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">
            Panen Terbanyak
          </h3>

          <p>
            {panen.length > 0
              ? panen.reduce((max, item) =>
                  Number(item.jumlah) >
                  Number(max.jumlah)
                    ? item
                    : max
                ).nama
              : "-"}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">
            Total Lahan Aktif
          </h3>

          <p>{lahan.length}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">
            Aktivitas Hari Ini
          </h3>

          <p>
            {
              aktivitas.filter(
                (a) =>
                  a.tanggal ===
                  new Date()
                    .toISOString()
                    .slice(0, 10)
              ).length
            }
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;