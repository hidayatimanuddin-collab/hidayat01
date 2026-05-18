import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const items = [
    { icon: "👤", title: "Profil Admin", desc: "Kelola data pengguna utama" },
    { icon: "🔐", title: "Keamanan", desc: "Password & autentikasi" },
    { icon: "🎨", title: "Tema", desc: "Ubah tampilan aplikasi" },
    { icon: "🔔", title: "Notifikasi", desc: "Atur alert sistem" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">⚙️ Settings</h1>
        <p className="text-gray-500">
          Pengaturan sistem aplikasi smart farming
        </p>
      </div>

      <div className="max-w-3xl">

        {/* SETTINGS GRID */}
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                if (item.title === "Profil Admin") {
                  navigate("/profil");
                }
              }}
              className="bg-white p-5 rounded-2xl shadow border hover:shadow-xl hover:scale-[1.02] transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ADVANCED */}
        <div className="mt-8 bg-white p-5 rounded-2xl shadow border">
          <h2 className="font-bold text-gray-800 mb-3">
            🔧 Advanced Settings
          </h2>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Auto Backup Data</span>
              <span className="text-green-600 font-semibold">Active</span>
            </div>

            <div className="flex justify-between">
              <span>Mode Debug</span>
              <span className="text-gray-500">Off</span>
            </div>

            <div className="flex justify-between">
              <span>API Connection</span>
              <span className="text-green-600">Connected</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}