"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function All1() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          'https://restcountries.com/v3.1/all?fields=name,capital,population,currencies'
        );
        setCountries(response.data);
        setFilteredCountries(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to axios countries data');
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  const getCountryName = (country) => {
    return country.name?.common || 'Unknown Country';
  };

  const getCapital = (country) => {
    return country.capital?.[0] || 'No capital';
  };

  const getPopulation = (country) => {
    return country.population ? formatPopulation(country.population) : 'N/A';
  };

  const getCurrency = (country) => {
    if (!country.currencies) return 'No currency';
    
    const currencyKeys = Object.keys(country.currencies);
    if (currencyKeys.length === 0) return 'No currency';
    
    const firstCurrency = country.currencies[currencyKeys[0]];
    if (!firstCurrency) return 'No currency';
    
    return firstCurrency.name + 
      (firstCurrency.symbol ? ` (${firstCurrency.symbol})` : '');
  };

  const formatPopulation = (population) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading countries...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            World Countries Explorer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover information about countries around the world including their capitals, population, and currencies
          </p>
        </div>

        <div className="mb-10">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for a country..."
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-indigo-600">{filteredCountries.length}</span> of <span className="font-semibold text-indigo-600">{countries.length}</span> countries
          </p>
        </div>

        {filteredCountries.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No countries found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCountries.map((country) => (
              <div 
                key={country.name?.common || Math.random()} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-100"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 truncate">
                    {getCountryName(country)}
                  </h2>
                  
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Capital</p>
                      <p className="text-gray-800">{getCapital(country)}</p>
                    </div>
                  </div>
                  
                  {/* Population */}
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Population</p>
                      <p className="text-gray-800">{getPopulation(country)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Currency</p>
                      <p className="text-gray-800">{getCurrency(country)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}