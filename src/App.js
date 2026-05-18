import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BackHome from "./components/BackHome";

import HomeLanding from "./pages/HomeLanding";
import Lahan from "./pages/Lahan";
import Panen from "./pages/Panen";
import Aktivitas from "./pages/Aktivitas";
import Irigasi from "./pages/Irigasi";
import Laporan from "./pages/Laporan";
import Pupuk from "./pages/Pupuk";
import Settings from "./pages/Settings";
import ProfilAdmin from "./pages/ProfilAdmin";

function App() {
  const [lahan, setLahan] = useState(() => {
    const saved = localStorage.getItem("lahan");
    return saved ? JSON.parse(saved) : [];
  });

  const [panen, setPanen] = useState(() => {
    const saved = localStorage.getItem("panen");
    return saved ? JSON.parse(saved) : [];
  });

  const [aktivitas, setAktivitas] = useState(() => {
    const saved = localStorage.getItem("aktivitas");
    return saved ? JSON.parse(saved) : [];
  });

  const [irigasi, setIrigasi] = useState(() => {
    const saved = localStorage.getItem("irigasi");
    return saved ? JSON.parse(saved) : [];
  });

  const [pupuk, setPupuk] = useState(() => {
    const saved = localStorage.getItem("pupuk");
    return saved ? JSON.parse(saved) : [];
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("lahan", JSON.stringify(lahan));
  }, [lahan]);

  useEffect(() => {
    localStorage.setItem("panen", JSON.stringify(panen));
  }, [panen]);

  useEffect(() => {
    localStorage.setItem("aktivitas", JSON.stringify(aktivitas));
  }, [aktivitas]);

  useEffect(() => {
    localStorage.setItem("irigasi", JSON.stringify(irigasi));
  }, [irigasi]);

  useEffect(() => {
    localStorage.setItem("pupuk", JSON.stringify(pupuk));
  }, [pupuk]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        🌾 Loading Sahabat Tani...
      </div>
    );
  }

  return (
    <Router>

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 🔥 BACK HOME */}
      <BackHome />

      <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-100 to-green-50">

        <Routes>

          {/* 🔥 LANDING PAGE */}
          <Route path="/" element={<HomeLanding />} />

          {/* 🌱 LAHAN */}
          <Route
            path="/lahan"
            element={
              <Lahan
                lahan={lahan}
                setLahan={setLahan}
              />
            }
          />

          {/* 🌾 PANEN */}
          <Route
            path="/panen"
            element={
              <Panen
                lahan={lahan}
                panen={panen}
                setPanen={setPanen}
              />
            }
          />

          {/* 📅 AKTIVITAS */}
          <Route
            path="/monitoring"
            element={
              <Aktivitas
                data={aktivitas}
                setData={setAktivitas}
              />
            }
          />

          {/* 💧 IRIGASI */}
          <Route
            path="/irigasi"
            element={
              <Irigasi
                data={irigasi}
                setData={setIrigasi}
              />
            }
          />

          {/* 🧪 PUPUK */}
          <Route
            path="/pupuk"
            element={
              <Pupuk
                data={pupuk}
                setData={setPupuk}
              />
            }
          />

          {/* 📊 LAPORAN */}
          <Route
            path="/laporan"
            element={<Laporan />}
          />

          {/* ⚙️ SETTINGS */}
          <Route
            path="/settings"
            element={<Settings />}
          />

          {/* 👨‍🌾 PROFIL */}
          <Route
            path="/profil"
            element={<ProfilAdmin />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;