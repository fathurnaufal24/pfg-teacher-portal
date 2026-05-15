import React from 'react';

const Profile = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-emerald-700">My Profile</h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kolom Kiri */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name and Title</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Hadi Alhail, M.Pd." />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Place and Date of Birth</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Domicile</label>
            <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows="3"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">BSI Bank Information</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Nomor Rekening BSI" />
          </div>
        </div>

        {/* Kolom Kanan (Class Preference sesuai PDF) */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-4">Class Preference</h3>
          <div className="space-y-2 text-sm">
            {['Islamic Leadership & Collaboration', 'STEM-Creativity', 'Islamic Finance', 'Emotional Quotient Development', 'Language Project-Arabic', 'Language Project-English', 'Qur\'anic Vibrance'].map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-emerald-600" />
                <span>{item}</span>
              </label>
            ))}
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Email/User Login</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
        </div>

        <div className="md:col-span-2 flex justify-end space-x-4 mt-6">
          <button type="button" className="px-6 py-2 border border-gray-300 rounded-md text-gray-600">Cancel</button>
          <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">Simpan</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;