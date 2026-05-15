import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-6">Welcome Hadi Alhail, M.Pd.</h2> {/* [cite: 4, 83] */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Performance Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-red-500">
          <p className="text-gray-400 font-semibold">Teacher Performance</p>
          <h3 className="text-4xl font-bold text-red-500">61.19%</h3> {/*  */}
          <p className="text-xs text-gray-400 mt-1 text-wrap">Reached 61.19% out of 75% standard. [cite: 5, 84]</p>
        </div>

        {/* Rating Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-400 font-semibold">Ranting: 4</p> {/* [cite: 12, 53, 94] */}
          <div className="text-yellow-400 text-2xl mt-2">★★★★☆</div>
        </div>

        {/* Mood Booster */}
        <div className="bg-amber-100 p-6 rounded-xl shadow-sm flex items-center justify-center">
          <button className="bg-amber-400 text-white px-6 py-2 rounded-lg font-bold shadow-md">Mood Booster</button> {/* [cite: 21, 88] */}
        </div>
      </div>

      {/* Pending Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b font-bold text-red-500">Pending Attendance</div> {/* [cite: 13, 87] */}
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Class</th>
              <th className="p-4">Session</th>
              <th className="p-4">Schedule</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">1</td>
              <td className="p-4 text-blue-600 font-medium">ILC - 2.1 (Private) - Lv 3</td> {/* [cite: 19] */}
              <td className="p-4">2</td> {/* [cite: 20] */}
              <td className="p-4 text-gray-500">Rabu, 4 Maret 2026 (19.00 WIB)</td> {/* [cite: 22] */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;