import { Link } from "react-router-dom";

function HomeLanding() {
  const menu = [
    {
      name: "Manajemen Lahan",
      path: "/lahan",
      icon: "🌱",
    },
    {
      name: "Manajemen Panen",
      path: "/panen",
      icon: "🌾",
    },
    {
      name: "Jadwal Kegiatan",
      path: "/monitoring",
      icon: "📅",
    },
    {
      name: "Jadwal Irigasi",
      path: "/irigasi",
      icon: "💧",
    },
    {
      name: "Analitik & Laporan",
      path: "/laporan",
      icon: "📊",
    },
    {
      name: "Inventori Pupuk",
      path: "/pupuk",
      icon: "🧪",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">

      {/* HERO */}
      <div className="relative min-h-screen pt-24 md:pt-0">

        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
          alt="pertanian"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div
          className="
            absolute inset-0
            flex flex-col justify-center
            px-5 md:px-12
            text-white
            z-10
          "
        >

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight">
            Sistem Smart Farming
          </h1>

          <p className="mt-6 text-base md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Platform digital modern untuk membantu petani
            mengelola lahan, panen, irigasi, inventori pupuk,
            dan laporan pertanian secara realtime.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <Link
              to="/lahan"
              className="
                bg-green-600 hover:bg-green-700
                px-8 py-4 rounded-2xl
                font-bold shadow-2xl
                transition-all duration-300
                hover:scale-105
              "
            >
              Mulai Monitoring
            </Link>

            <Link
              to="/laporan"
              className="
                bg-white/20 backdrop-blur-md
                hover:bg-white/30
                border border-white/20
                px-8 py-4 rounded-2xl
                font-bold
                transition-all duration-300
              "
            >
              Lihat Laporan
            </Link>

          </div>
        </div>

        {/* MENU SAMPING */}
        <div
          className="
            absolute
            bottom-4
            left-0
            right-0
            flex md:flex-col
            gap-4
            overflow-x-auto
            px-4
            z-20
            md:right-5
            md:left-auto
            md:top-1/2
            md:-translate-y-1/2
          "
        >

          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="
                w-16 h-16 md:w-24 md:h-24
                shrink-0
                bg-white/15 backdrop-blur-lg
                border border-white/20
                rounded-3xl
                text-white
                flex flex-col items-center justify-center
                hover:bg-green-500
                hover:scale-105
                transition-all duration-300
                shadow-xl
              "
            >

              <span className="text-xl md:text-3xl mb-2">
                {item.icon}
              </span>

              <span className="hidden md:block text-xs text-center font-semibold px-1">
                {item.name}
              </span>

            </Link>
          ))}

        </div>
      </div>

      {/* BAGIAN BAWAH PUNYAMU BIARIN TETAP */}

      {/* 🌱 INFORMASI PERTANIAN PREMIUM */}
      <div
        className="
          relative
          bg-gradient-to-b from-[#f8fafc] to-[#eefbf3]
          py-32 px-8
          overflow-hidden
        "
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-300/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-24">

            <p
              className="
                inline-block
                px-5 py-2
                rounded-full
                bg-green-100
                text-green-700
                font-bold
                tracking-[4px]
                uppercase
                text-sm
                mb-6
              "
            >
              Modern Agriculture
            </p>

            <h1
              className="
                text-6xl md:text-7xl
                font-black
                text-gray-900
                leading-tight
                mb-8
              "
            >
              Future of <span className="text-green-600">Smart Farming</span>
            </h1>

            <p
              className="
                text-gray-500
                text-xl
                leading-relaxed
                max-w-4xl
                mx-auto
              "
            >
              Sistem pertanian digital modern membantu petani
              meningkatkan produktivitas, efisiensi air,
              monitoring lahan realtime, dan pengelolaan data panen
              secara profesional berbasis teknologi.
            </p>

          </div>

          {/* FEATURE CARD */}
          <div className="grid lg:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[35px]
                p-10
                bg-gradient-to-br from-green-500 to-emerald-700
                text-white
                shadow-[0_20px_60px_rgba(34,197,94,0.35)]
                hover:-translate-y-3
                transition-all duration-500
              "
            >

              <div
                className="
                  absolute -top-16 -right-16
                  w-52 h-52
                  bg-white/10
                  rounded-full
                "
              ></div>

              <div className="relative z-10">

                <div
                  className="
                    w-20 h-20
                    rounded-3xl
                    bg-white/20
                    backdrop-blur-xl
                    flex items-center justify-center
                    text-5xl
                    mb-8
                  "
                >
                  🌱
                </div>

                <h2 className="text-3xl font-black mb-5">
                  Smart Monitoring
                </h2>

                <p className="text-green-100 leading-relaxed text-lg">
                  Monitoring lahan secara realtime untuk membantu
                  pengelolaan tanaman menjadi lebih cepat,
                  efisien, dan modern.
                </p>

              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                bg-white/80
                backdrop-blur-2xl
                border border-white/40
                rounded-[35px]
                p-10
                shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                hover:-translate-y-3
                transition-all duration-500
              "
            >

              <div
                className="
                  w-20 h-20
                  rounded-3xl
                  bg-blue-100
                  flex items-center justify-center
                  text-5xl
                  mb-8
                "
              >
                💧
              </div>

              <h2 className="text-3xl font-black text-gray-800 mb-5">
                Smart Irrigation
              </h2>

              <p className="text-gray-500 leading-relaxed text-lg">
                Pengaturan sistem irigasi otomatis untuk
                menghemat penggunaan air dan menjaga
                kelembaban tanah tetap stabil.
              </p>

            </div>

            {/* CARD 3 */}
            <div
              className="
                bg-white/80
                backdrop-blur-2xl
                border border-white/40
                rounded-[35px]
                p-10
                shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                hover:-translate-y-3
                transition-all duration-500
              "
            >

              <div
                className="
                  w-20 h-20
                  rounded-3xl
                  bg-yellow-100
                  flex items-center justify-center
                  text-5xl
                  mb-8
                "
              >
                📊
              </div>

              <h2 className="text-3xl font-black text-gray-800 mb-5">
                Agriculture Analytics
              </h2>

              <p className="text-gray-500 leading-relaxed text-lg">
                Analitik data panen modern membantu
                petani mengambil keputusan yang lebih
                akurat dan efisien.
              </p>

            </div>

          </div>

        </div>
      </div>
      {/* 🌾 KABAR TERKINI PERTANIAN */}
<div className="bg-[#0f172a] py-32 px-8 text-white">

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">

      <div>

        <p
          className="
            text-green-400
            font-bold
            tracking-[4px]
            uppercase
            mb-4
          "
        >
          Indonesia Agriculture News
        </p>

        <h1
          className="
            text-5xl md:text-6xl
            font-black
            leading-tight
          "
        >
          Kabar Terkini
          <br />
          Pertanian Indonesia
        </h1>

      </div>

      <p
        className="
          text-gray-400
          text-lg
          max-w-2xl
          leading-relaxed
        "
      >
        Informasi terbaru mengenai perkembangan teknologi pertanian,
        irigasi modern, ketahanan pangan, dan inovasi smart farming
        di Indonesia.
      </p>

    </div>

    {/* NEWS GRID */}
    <div className="grid lg:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-[35px]
          overflow-hidden
          backdrop-blur-xl
          hover:-translate-y-3
          transition-all duration-500
        "
      >

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
            alt="pertanian"
            className="
              h-72 w-full object-cover
              group-hover:scale-110
              transition-all duration-700
            "
          />

        </div>

        <div className="p-8">

          <span
            className="
              inline-block
              bg-green-500/20
              text-green-300
              px-4 py-2
              rounded-full
              text-sm font-semibold
              mb-5
            "
          >
            Smart Farming
          </span>

          <h2 className="text-3xl font-black leading-tight mb-5">
            Teknologi AI Mulai Digunakan Pada Sistem Pertanian Modern
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Pemanfaatan kecerdasan buatan membantu petani
            memonitor kondisi lahan dan meningkatkan produktivitas panen.
          </p>

        </div>
      </div>

      {/* CARD 2 */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-[35px]
          overflow-hidden
          backdrop-blur-xl
          hover:-translate-y-3
          transition-all duration-500
        "
      >

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
            alt="irigasi"
            className="
              h-72 w-full object-cover
              group-hover:scale-110
              transition-all duration-700
            "
          />

        </div>

        <div className="p-8">

          <span
            className="
              inline-block
              bg-blue-500/20
              text-blue-300
              px-4 py-2
              rounded-full
              text-sm font-semibold
              mb-5
            "
          >
            Irigasi
          </span>

          <h2 className="text-3xl font-black leading-tight mb-5">
            Sistem Irigasi Otomatis Hemat Air Semakin Populer
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Penggunaan sensor digital membantu penghematan
            air hingga 40% pada area pertanian modern.
          </p>

        </div>
      </div>

      {/* CARD 3 */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-[35px]
          overflow-hidden
          backdrop-blur-xl
          hover:-translate-y-3
          transition-all duration-500
        "
      >

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="panen"
            className="
              h-72 w-full object-cover
              group-hover:scale-110
              transition-all duration-700
            "
          />

        </div>

        <div className="p-8">

          <span
            className="
              inline-block
              bg-yellow-500/20
              text-yellow-300
              px-4 py-2
              rounded-full
              text-sm font-semibold
              mb-5
            "
          >
            Ketahanan Pangan
          </span>

          <h2 className="text-3xl font-black leading-tight mb-5">
            Produksi Pangan Nasional Diproyeksi Meningkat Tahun Ini
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Dukungan teknologi digital dan modernisasi alat
            pertanian meningkatkan hasil produksi pangan nasional.
          </p>

        </div>
      </div>

    </div>

  </div>
</div>

    </div>
    
  );
}

export default HomeLanding;