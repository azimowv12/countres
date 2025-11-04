"use client";
import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaCompass, FaMapMarkerAlt, FaFlag, FaMountain, FaCity } from 'react-icons/fa';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('davlatlar');
  const [isVisible, setIsVisible] = useState(false);
  const globeRef = useRef(null);

  const continents = [
    { name: 'Osiyo', color: 'bg-orange-500', countries: 48, icon: '🌏' },
    { name: 'Afrika', color: 'bg-green-500', countries: 54, icon: '🌍' },
    { name: 'Evropa', color: 'bg-blue-500', countries: 44, icon: '🏛️' },
    { name: 'Shimoliy Amerika', color: 'bg-purple-500', countries: 23, icon: '🏔️' },
    { name: 'Janubiy Amerika', color: 'bg-red-500', countries: 12, icon: '🌋' },
    { name: 'Okeaniya', color: 'bg-cyan-500', countries: 14, icon: '🏝️' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Qidirilayotgan davlat:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Header with tabs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Explore
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Our World
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-md">
              Discover every country, culture, and continent in unprecedented detail
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className={`flex space-x-1 bg-slate-800 bg-opacity-50 rounded-2xl p-2 mt-6 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {['davlatlar', 'qitalar', 'madaniyat', 'geografiya'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-cyan-600 text-white shadow-lg' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Search and Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced Search */}
            <div className={`bg-slate-800 bg-opacity-50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center mb-6">
                <FaCompass className="text-cyan-400 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-white">Global Search</h2>
              </div>
              
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter country, city, or landmark..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 text-lg bg-slate-900 border-2 border-slate-600 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white p-3 rounded-xl hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FaSearch className="text-xl" />
                  </button>
                </div>
                
                {/* Quick Filters */}
                <div className="flex flex-wrap gap-2">
                  {['Asia', 'Europe', 'Africa', 'Americas', 'Oceania'].map((region) => (
                    <button
                      key={region}
                      type="button"
                      className="px-3 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600 hover:text-white transition-colors duration-200"
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </form>
            </div>

            {/* Continents Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {continents.map((continent, index) => (
                <div
                  key={continent.name}
                  className="bg-slate-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group cursor-pointer hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{continent.icon}</span>
                    <span className={`w-3 h-3 ${continent.color} rounded-full`}></span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{continent.name}</h3>
                  <p className="text-slate-400 text-sm">{continent.countries} countries</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Featured Content */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className={`bg-gradient-to-br from-cyan-900 to-slate-800 rounded-3xl p-6 border border-cyan-700 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                <FaMapMarkerAlt className="text-cyan-400 mr-2" />
                World Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-cyan-800">
                  <span className="text-slate-300">Total Countries</span>
                  <span className="text-white font-bold">195</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cyan-800">
                  <span className="text-slate-300">Population</span>
                  <span className="text-white font-bold">7.9B</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cyan-800">
                  <span className="text-slate-300">Languages</span>
                  <span className="text-white font-bold">7,100+</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Time Zones</span>
                  <span className="text-white font-bold">24</span>
                </div>
              </div>
            </div>

            {/* Recent Searches */}
            <div className={`bg-slate-800 bg-opacity-50 backdrop-blur-xl rounded-3xl p-6 border border-slate-700 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-white font-bold text-xl mb-4">Trending</h3>
              <div className="space-y-3">
                {[
                  { name: 'Japan', flag: '🇯🇵', searches: '12.4k' },
                  { name: 'France', flag: '🇫🇷', searches: '9.8k' },
                  { name: 'Brazil', flag: '🇧🇷', searches: '8.2k' },
                  { name: 'Egypt', flag: '🇪🇬', searches: '7.5k' }
                ].map((country, index) => (
                  <div key={country.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-700 bg-opacity-50 hover:bg-slate-600 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{country.flag}</span>
                      <span className="text-white font-medium">{country.name}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-bold">{country.searches}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className={`w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Start Exploring
            </button>
          </div>
        </div>

        {/* Bottom Features */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: <FaFlag className="text-2xl" />, title: 'Country Profiles', desc: 'Detailed information about every nation' },
            { icon: <FaMountain className="text-2xl" />, title: 'Geography', desc: 'Maps, landscapes, and natural wonders' },
            { icon: <FaCity className="text-2xl" />, title: 'Culture Guide', desc: 'Traditions, languages, and customs' }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-slate-800 bg-opacity-30 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
              <div className="text-cyan-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;