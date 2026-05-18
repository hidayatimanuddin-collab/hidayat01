import { useState } from "react";

function ProfilAdmin() {
  const [nama, setNama] = useState("Admin Sistem");
  const [email, setEmail] = useState("admin@agri-smart.com");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">👤 Profil Admin</h1>

      <div className="bg-white p-6 rounded-2xl shadow max-w-xl">

        <div className="mb-4">
          <label className="block text-sm mb-1">Nama</label>
          <input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Simpan
        </button>

      </div>
    </div>
  );
}

export default ProfilAdmin;