import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Video, Link as LinkIcon } from 'lucide-react';

const ClassRoom = () => {
  // Data Grafik sesuai PDF Page 7
  const sessionData = [
    { name: 'Terlaksana', value: 8, color: '#4ADE80' },
    { name: 'Belum Terlaksana', value: 4, color: '#FACC15' }
  ];

  const attendanceData = [
    { name: 'Hadir', value: 8, color: '#3B82F6' },
    { name: 'Belum Diabsen', value: 4, color: '#6B7280' }
  ];

  const moodData = [
    { name: 'Steady', value: 8, color: '#4ADE80' }
  ];

  return (
    <div className="flex-1 p-6 bg-[#F3F4F9] min-h-screen">
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-8">Class Room</h2>

        {/* Info Header Kelas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 border-b pb-8">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-gray-100 rounded-lg">🎓</div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase">Teacher</p>
              <p className="font-bold text-gray-700">Hadi Alhail., M.Pd.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-gray-100 rounded-lg">📅</div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase">Release Schedule</p>
              <p className="font-bold text-gray-700 text-sm">Rabu, 18 Februari 2026 - 19.00 WIB</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-gray-100 rounded-lg">📈</div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase">Level</p>
              <p className="font-bold text-gray-700">1</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-gray-100 rounded-lg"><LinkIcon size={18}/></div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase">Class Link</p>
              <div className="flex gap-2 mt-1">
                <button className="bg-sky-500 text-white px-3 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <Video size={14}/> Main
                </button>
                <button className="bg-gray-700 text-white px-3 py-1 rounded text-xs font-bold">
                  Alias
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Grafik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
          {/* Session Overview */}
          <div>
            <p className="text-gray-500 font-bold mb-4">Session Overview</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={sessionData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {sessionData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 text-[10px] mt-2">
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-[#4ADE80]"></div> Terlaksana</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-[#FACC15]"></div> Belum Terlaksana</span>
            </div>
          </div>

          {/* Attendance Overview */}
          <div>
            <p className="text-gray-500 font-bold mb-4">Attendance Overview</p>
            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={attendanceData} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                    {attendanceData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col pt-4">
                <p className="text-xs font-bold">Hadir</p>
                <p className="text-xl font-bold text-blue-500">8</p>
              </div>
            </div>
          </div>

          {/* Mood Tracker */}
          <div>
            <p className="text-gray-500 font-bold mb-4">Mood Tracker</p>
            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={moodData} innerRadius={60} outerRadius={80} dataKey="value">
                    <Cell fill="#4ADE80" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <p className="text-xs font-bold text-emerald-500">100.00% (8)</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 text-[10px] mt-2">
              <span className="flex items-center gap-1 text-emerald-500 font-bold uppercase">Steady</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 pt-4 border-t">
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg">Open Room</button>
          <button className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg">Close Room</button>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;