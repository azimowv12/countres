"use client";
import { useState, useEffect } from 'react';

import { FaGlobeAmericas, FaSearch, FaChartBar, FaUsers, FaMountain, FaCity } from 'react-icons/fa';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: '195', label: 'Dunyo Davlatlari', icon: <FaGlobeAmericas /> },
    { number: '7.9', label: 'Milliard Aholi', icon: <FaUsers /> },
    { number: '510', label: 'Million km² Maydon', icon: <FaChartBar /> },
    { number: '2000+', label: 'Madaniyatlar', icon: <FaCity /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Qidirilayotgan davlat:', searchQuery);
  };

  const featuredCountries = [
    { name: 'Yaponiya', continent: 'Osiyo', flag: '🇯🇵', color: 'from-red-500 to-pink-600' },
    { name: 'Fransiya', continent: 'Evropa', flag: '🇫🇷', color: 'from-blue-500 to-purple-600' },
    { name: 'Braziliya', continent: 'Janubiy Amerika', flag: '🇧🇷', color: 'from-green-500 to-emerald-600' },
    { name: 'Misr', continent: 'Afrika', flag: '🇪🇬', color: 'from-yellow-500 to-red-600' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Asosiy sarlavha */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Dunyo{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Davlatlari
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Barcha qitʼa va davlatlar haqida toʻliq maʼlumotlar. Har bir davlatning madaniyati, 
              geografiyasi, iqtisodiyoti va tarixi haqida bilib oling.
            </p>
          </div>

          {/* Qidiruv formasi */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Davlat nomini kiriting (masalan: Yaponiya, Fransiya, Braziliya...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 text-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-3 rounded-xl hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <FaSearch className="text-xl" />
                </button>
              </div>
            </form>
            <p className="text-blue-300 text-sm mt-3">
              Masalan: <span className="text-yellow-300 cursor-pointer hover:underline">Yaponiya</span>, 
              <span className="text-yellow-300 cursor-pointer hover:underline ml-2">Fransiya</span>, 
              <span className="text-yellow-300 cursor-pointer hover:underline ml-2">Braziliya</span>
            </p>
          </div>

          {/* Statistikalar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 transition-all duration-500 transform hover:scale-105 hover:bg-opacity-20 ${
                  index === currentStat ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
                }`}
              >
                <div className="text-yellow-400 text-2xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mashhur davlatlar */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Mashhur Davlatlar</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredCountries.map((country, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${country.color} rounded-2xl p-4 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                >
                  <div className="text-3xl mb-2">{country.flag}</div>
                  <div className="font-bold text-lg">{country.name}</div>
                  <div className="text-sm opacity-90">{country.continent}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll qilish taklifi */}
          <div className="mt-16 animate-bounce">
            <div className="text-white text-sm flex flex-col items-center">
              <span>Ko'proq ma'lumot olish uchun pastga scroll qiling</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mt-2">
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;