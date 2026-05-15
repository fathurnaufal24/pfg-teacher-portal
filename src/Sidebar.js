import React from 'react';

const Sidebar = () => {
  const menus = ["Dashboard", "Class Management", "Revenue", "My Schedule", "Module", "Class Offering"];
  return (
    <div className="w-64 bg-white h-screen shadow-md p-5 hidden md:block">
      <h1 className="text-2xl font-bold text-emerald-600 mb-10">PFG Portal</h1>
      <nav className="space-y-4">
        {menus.map((menu) => (
          <div key={menu} className="text-gray-600 hover:text-emerald-500 cursor-pointer font-medium py-2">
            {menu}
          </div>
        ))}
      </nav>
      <div className="mt-20 text-red-500 font-bold cursor-pointer">Logout</div>
    </div>
  );
};

export default Sidebar;