import { Link, useLocation } from "react-router-dom";

function BackHome() {
  const location = useLocation();

  // ❌ Jangan tampil di halaman utama
  if (location.pathname === "/") {
    return null;
  }

  return (
    <Link
      to="/"
      className="
        fixed bottom-6 left-6 z-50
        flex items-center gap-2
        bg-black/40 backdrop-blur-xl
        border border-white/10
        text-white
        px-5 py-3
        rounded-full
        shadow-xl
        hover:bg-green-500
        hover:scale-105
        transition-all duration-300
      "
    >

      <span className="text-lg">
        ←
      </span>

      <span className="text-sm font-medium tracking-wide">
        Home
      </span>

    </Link>
  );
}

export default BackHome;