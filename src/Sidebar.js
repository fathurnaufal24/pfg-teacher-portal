import React from 'react';
import { 
  LayoutDashboard, Users, Wallet, Calendar, 
  BookOpen, Gift, Bell, UserPlus, LogOut 
} from 'lucide-react'; // Tambahin Bell & UserPlus
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menus = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Class Management", icon: <Users size={20} />, path: "/classmanagement" },
    { name: "Revenue", icon: <Wallet size={20} />, path: "/revenue" },
    { name: "My Schedule", icon: <Calendar size={20} />, path: "/myschedule" },
    { name: "Module", icon: <BookOpen size={20} />, path: "/module" },
    { name: "Class Offering", icon: <Gift size={20} />, path: "/classoffering" },
    // TAMBAHIN DUA INI BANG:
    { name: "Notifications", icon: <Bell size={20} />, path: "/notifications" },
    { name: "Parent Meeting", icon: <UserPlus size={20} />, path: "/parentmeeting" },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-xl p-6 hidden md:block flex flex-col">
      <div className="flex items-center space-x-2 mb-10">
        <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">PFG Portal</h1>
      </div>
      
      <nav className="space-y-1 flex-1">
        {menus.map((menu) => (
          <Link 
            key={menu.name} 
            to={menu.path} 
            className={`flex items-center space-x-3 p-3 rounded-xl transition font-medium ${
              location.pathname === menu.path 
              ? 'bg-emerald-50 text-emerald-600' 
              : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
            }`}
          >
            {menu.icon}
            <span className="text-sm">{menu.name}</span>
          </Link>
        ))}
      </nav>

      <div className="pt-10 flex items-center space-x-3 p-3 text-red-500 font-bold cursor-pointer hover:bg-red-50 rounded-xl transition">
        <LogOut size={20} />
        <span className="text-sm">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;