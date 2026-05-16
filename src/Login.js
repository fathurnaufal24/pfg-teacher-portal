import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Ikon mata tetep aktif
import bgImage from './background-halaman-login.jpg'; // Background kelas estetik lu tetep ada

const Login = ({ onLogin }) => {
  const [role, setRole] = useState('Guru'); 
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Langsung lolos ke Dashboard tanpa mikirin database/Laravel
    if (onLogin) {
      onLogin(); 
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4 font-sans relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="w-full max-w-md z-10 relative flex flex-col items-center">
        
        {/* Tombol Switch Siswa / Guru */}
        <div className="flex bg-[#1E4A7A] rounded-xl mb-6 w-full overflow-hidden shadow-sm">
          <button 
            type="button"
            onClick={() => setRole('Siswa')}
            className={`flex-1 py-3 text-center text-sm font-medium transition duration-200 ${
              role === 'Siswa' ? 'bg-[#D4B982] text-white font-bold' : 'text-gray-300 hover:text-white'
            }`}
          >
            Siswa
          </button>
          <button 
            type="button"
            onClick={() => setRole('Guru')}
            className={`flex-1 py-3 text-center text-sm font-medium transition duration-200 ${
              role === 'Guru' ? 'bg-[#D4B982] text-white font-bold' : 'text-gray-300 hover:text-white'
            }`}
          >
            Guru
          </button>
        </div>

        {/* Card Utama Form Login (Biru) */}
        <div className="bg-[#1E4A7A] w-full p-8 rounded-2xl shadow-xl">
          <h2 className="text-white text-xl font-semibold text-center mb-8 tracking-wide">
            Yuk Masuk Ke Akun Belajar Anda
          </h2>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Input Email / No HP */}
            <div>
              <input 
                type="text" 
                placeholder="Nomor HP atau Email" 
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full p-4 rounded-xl border-none outline-none bg-white text-gray-700 placeholder-gray-400 shadow-inner focus:ring-2 focus:ring-[#D4B982]"
                required
              />
            </div>

            {/* Input Kata Sandi */}
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Kata Sandi" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 pr-12 rounded-xl border-none outline-none bg-white text-gray-700 placeholder-gray-400 shadow-inner focus:ring-2 focus:ring-[#D4B982]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Link Lupa Kata Sandi */}
            <div className="text-left">
              <a href="#forgot" className="text-xs text-gray-300 hover:text-white transition hover:underline">
                Lupa Kata Sandi?
              </a>
            </div>

            {/* Tombol Masuk */}
            <button 
              type="submit" 
              className="w-full bg-[#D4B982] text-white font-bold py-4 rounded-xl transition duration-200 hover:bg-[#c4a972] active:scale-[0.98] shadow-md mt-6"
            >
              Masuk
            </button>
          </form>

          {/* Bagian Bawah: Daftar Akun */}
          <div className="text-center mt-8 text-sm text-white">
            <p className="opacity-90">
              Belum punya akun? <a href="#register" className="font-bold hover:underline ml-1">Daftar Sekarang</a>
            </p>
          </div>
        </div>

      </div> 
    </div> 
  );
};

export default Login;