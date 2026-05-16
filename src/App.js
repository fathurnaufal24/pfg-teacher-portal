import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logoPFG from './logo-sidebar.png'; //logo sidebar di hape
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Revenue from './Revenue';
import ClassManagement from './ClassManagement';
import MySchedule from './MySchedule';
import ClassOffering from './ClassOffering';
import Notifications from './Notifications';
import ParentMeeting from './ParentMeeting';
import Module from './Module'; // <--- PASTIIN ADA BARIS INI BANG!

function App() {
  // Pastiin namanya setIsSidebarOpen (pake Is)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-[#F3F4F9]">
        {/* Di sini juga ganti jadi setIsSidebarOpen biar sama */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Navbar khusus Mobile */}
          {/* Navbar khusus Mobile */}
<header className="md:hidden bg-[#1E293B] p-4 shadow-sm flex items-center justify-between sticky top-0 z-30">
  {/* 💡 TIPS: Ganti 'bg-white' di atas pakai warna yang lu pilih buat Sidebar kemarin (misal: bg-[#F0FDF4]) */}
  
  <div className="flex items-center space-x-2">
    {/* SEBELUMNYA: */}
    {/* <div className="w-6 h-6 bg-emerald-500 rounded-full"></div> */}
    
    {/* GANTI JADI INI BANG: */}
    <img src={logoPFG} alt="PFG Logo" className="w-8 h-8 object-contain" />
    
    <span className="font-bold text-white">PFG Portal</span>
  </div>
  
  <button 
    onClick={() => setIsSidebarOpen(true)}
    className="p-2 text-white hover:bg-gray-100 rounded-lg"
  >
    <Menu size={24} />
  </button>
</header>

          {/* Konten Utama */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/revenue" element={<Revenue />} />
              <Route path="/classmanagement" element={<ClassManagement />} />
              <Route path="/myschedule" element={<MySchedule />} />
              <Route path="/module" element={<Module />} />
              <Route path="/classoffering" element={<ClassOffering />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/parentmeeting" element={<ParentMeeting />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;