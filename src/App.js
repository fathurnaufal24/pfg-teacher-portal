import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
// import Profile from './Profile'; // Nanti bisa gantian di sini

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;