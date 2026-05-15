import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Revenue from './Revenue';
import ClassOffering from './ClassOffering';
import MySchedule from './MySchedule';
import ClassManagement from './ClassManagement';
import Module from './Module';
import ClassRoom from './ClassRoom';
import Notifications from './Notifications';
import ParentMeeting from './ParentMeeting';


function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/classoffering" element={<ClassOffering />} />
          <Route path="/myschedule" element={<MySchedule />} />
          <Route path="/classmanagement" element={<ClassManagement />} />
          <Route path="/module" element={<Module />} />
          <Route path="/classroom" element={<ClassRoom />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/parentmeeting" element={<ParentMeeting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;