import React from 'react';
import { LayoutDashboard, Users, Wallet, Calendar, BookOpen, Gift, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Class Management", icon: <Users size={20} />, path: "/classmanagement" },
    { name: "Revenue", icon: <Wallet size={20} />, path: "/revenue" },
    { name: "My Schedule", icon: <Calendar size={20} />, path: "/myschedule" },
    { name: "Module", icon: <BookOpen size={20} />, path: "/module" },
    { name: "Class Offering", icon: <Gift size={20} />, path: "/classoffering" },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-xl p-6 hidden md:block">
      <div className="flex items-center space-x-2 mb-10">
        <div className="w-8 h-8 bg-emerald-500 rounded-full"></div> {/* Simulasi Logo PFG */}
        <h1 className="text-xl font-bold text-gray-800">PFG Portal</h1>
      </div>
      
      <nav className="space-y-2">
        {menus.map((menu) => (
          <Link key={menu.name} to={menu.path} className="flex items-center space-x-3 p-3 rounded-lg text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 transition font-medium">
            {menu.icon}
            <span>{menu.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-20 flex items-center space-x-3 p-3 text-red-500 font-bold cursor-pointer">
        <LogOut size={20} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;