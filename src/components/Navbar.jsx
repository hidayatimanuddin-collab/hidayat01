import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/20 backdrop-blur-2xl
        border-b border-white/10
        shadow-2xl
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          flex items-center justify-between
          px-8 py-4
        "
      >

        {/* 🔥 LOGO */}
        <Link
          to="/"
          className="flex items-center gap-4 group"
        >

          <div
            className="
              relative
              w-16 h-16 rounded-3xl
              bg-gradient-to-br from-green-400 via-green-500 to-emerald-700
              flex items-center justify-center
              text-white text-4xl
              shadow-[0_10px_40px_rgba(34,197,94,0.5)]
              group-hover:rotate-6
              group-hover:scale-110
              transition-all duration-500
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute inset-0 rounded-3xl
                bg-green-400 blur-xl opacity-40
              "
            ></div>

            <span className="relative z-10">
              🌾
            </span>
          </div>

          <div>
            <h1
              className="
                text-3xl font-black tracking-wide
                text-white
              "
            >
              Sahabat Tani
            </h1>

            <p
              className="
                text-sm text-green-200
                tracking-widest uppercase
              "
            >
              Smart Farming System
            </p>
          </div>
        </Link>

        {/* 🔥 SLOGAN */}
        <div
          className="
            hidden md:flex
            items-center
            bg-white/10
            border border-white/10
            px-8 py-3 rounded-2xl
            backdrop-blur-xl
            shadow-lg
          "
        >

          <p
            className="
              text-white font-semibold
              tracking-wide
              text-sm
            "
          >
            🌱 Smart Farming • Modern Agriculture • Digital Innovation
          </p>

        </div>

        {/* 🔥 ACTION */}
        <div className="flex items-center gap-4">

          {/* SETTINGS */}
          <Link
            to="/settings"
            className="
              w-12 h-12 rounded-2xl
              bg-white/10
              border border-white/10
              flex items-center justify-center
              text-white text-xl
              hover:bg-green-500
              hover:rotate-90
              transition-all duration-500
            "
          >
            ⚙️
          </Link>

          {/* LOGOUT */}
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="
              relative overflow-hidden
              bg-gradient-to-r from-red-500 to-red-600
              hover:from-red-600 hover:to-red-700
              text-white
              px-6 py-3
              rounded-2xl
              text-sm font-bold
              shadow-lg shadow-red-500/30
              hover:scale-105
              transition-all duration-300
            "
          >
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}

export default Navbar;