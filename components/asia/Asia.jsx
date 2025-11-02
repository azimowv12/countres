"use client";
import { useState } from 'react';
import { FaGlobeAsia, FaMapMarkerAlt, FaUsers, FaCity, FaMountain, FaWater, FaLandmark, FaTree, FaUtensils, FaYenSign, FaRupeeSign, FaDollarSign } from 'react-icons/fa';

const AsiaCountries = () => {
  const [selectedCountry, setSelectedCountry] = useState("O'zbekiston");

  const asiaCountries = {
    "O'zbekiston": {
      capital: 'Toshkent',
      population: '36 million',
      area: '448,978 km²',
      language: "O'zbek tili",
      currency: "So'm (UZS)",
      currencyIcon: <FaDollarSign />,
      government: 'Prezidentlik respublika',
      timeZone: 'UTC+5 (UZT)',
      callingCode: '+998',
      facts: [
        "Markaziy Osiyoning yurak mintaqasi",
        "Buyuk Ipak yo'lining markazi",
        "Mustaqillik: 1991-yil 1-sentyabr",
        "Dunyodagi eng yirik paxta ishlab chiqaruvchilardan biri",
        "Qadimiy shaharlar: Buxoro, Samarqand, Xiva"
      ],
      landmarks: ['Registon maydoni', 'Bibi-Xonim masjidi', 'Xiva ichki qalasi', 'Chorvoq suv ombori'],
      culture: "Milliy taomlar: osh, somsa, norin. An'anaviy libos: do'ppi"
    },
    Yaponiya: {
      capital: 'Tokio',
      population: '125.8 million',
      area: '377,975 km²',
      language: 'Yapon tili',
      currency: 'Yena (¥)',
      currencyIcon: <FaYenSign />,
      government: 'Konstitutsiyaviy monarxiya',
      timeZone: 'UTC+9 (JST)',
      callingCode: '+81',
      facts: [
        'Dunyoning uchinchi yirik iqtisodiyoti',
        'Texnologiya va innovatsiyalar markazi',
        '127 million aholi bilan 10 eng zich aholi',
        'Dunyodagi eng yuqori umr koʻrish davomiyligi',
        'Samuraylar va qadimiy anʼanalar mamlakati'
      ],
      landmarks: ['Fuji togʻi', 'Kiyomizu-dera ibodatxonasi', 'Tokyo Skytree', 'Osaka qalʼasi'],
      culture: 'Choy marosimlari, ikebana, bonsai, anime va manga'
    },
    Xitoy: {
      capital: 'Pekin',
      population: '1.4 milliard',
      area: '9,596,961 km²',
      language: 'Xitoy tili',
      currency: 'Yuan (¥)',
      currencyIcon: <FaYenSign />,
      government: 'Xalq respublikasi',
      timeZone: 'UTC+8 (CST)',
      callingCode: '+86',
      facts: [
        'Dunyodagi eng koʻp aholiga ega davlat',
        'Qadimiy sivilizatsiya 5000 yillik tarix',
        'Buyuk Xitoy devori dunyoning eng uzun inshooti',
        'Dunyodagi eng tez rivojlanayotgan iqtisodiyot',
        'Panda - milliy hayvon'
      ],
      landmarks: ['Buyuk Xitoy devori', 'Sargʻish daryo', 'Chjiagze togʻi', 'Sishuan togʻlari'],
      culture: 'Xitoy oshxonasi, tai chi, anʼanaviy bayramlar, kalendar'
    },
    Hindiston: {
      capital: 'Yangi Dehli',
      population: '1.38 milliard',
      area: '3,287,263 km²',
      language: 'Hindi, Ingliz tili',
      currency: 'Hind rupiyasi (₹)',
      currencyIcon: <FaRupeeSign />,
      government: 'Federal parlamentar respublika',
      timeZone: 'UTC+5:30 (IST)',
      callingCode: '+91',
      facts: [
        'Dunyodagi eng katta demokratiya',
        '1000 dan ortiq tillar guruhi',
        'Bollywood - dunyodagi eng koʻp filmlar ishlab chiqaradigan sanoat',
        'Yoga va ayurveda kelib chiqish joyi',
        'Taj Mahal - dunyoning 7 moʻjizasidan biri'
      ],
      landmarks: ['Taj Mahal', 'Qizil qalʼa', 'Ganga daryosi', 'Amber qalʼasi'],
      culture: 'Yoga, ayurveda, rangli festival, anʼanaviy kiyim'
    },
    Koreya: {
      capital: 'Seul',
      population: '51.7 million',
      area: '100,363 km²',
      language: 'Koreys tili',
      currency: 'Von (₩)',
      currencyIcon: <FaDollarSign />,
      government: 'Prezidentlik respublikasi',
      timeZone: 'UTC+9 (KST)',
      callingCode: '+82',
      facts: [
        'K-Pop va K-Drama dunyoga mashhur',
        'Texnologik jihatdan rivojlangan',
        'Dunyodagi eng tez internet tezligi',
        'Kimchi - milliy taom',
        'Samsung va LG kabi yirik kompaniyalar'
      ],
      landmarks: ['Gyeongbokgung saroyi', 'N Seoul Tower', 'Jeju oroli', 'Bukchon Hanok qishlogʻi'],
      culture: 'Kimchi, hanbok, taekwondo, K-pop madaniyati'
    },
    Indoneziya: {
      capital: 'Jakarta',
      population: '273.5 million',
      area: '1,904,569 km²',
      language: 'Indonez tili',
      currency: 'Indoneziya rupiyasi (Rp)',
      currencyIcon: <FaRupeeSign />,
      government: 'Prezidentlik respublika',
      timeZone: 'UTC+7 to +9',
      callingCode: '+62',
      facts: [
        '17,000 dan ortiq orollar arxipelagi',
        'Dunyodagi eng katta musulmon aholisi',
        'Bali - mashhur sayyohlik oroli',
        'Komodo ajdahosi - dunyodagi eng karta kaltakesak',
        'Faol vulqonlar soni boʻyicha dunyoda birinchi'
      ],
      landmarks: ['Borobudur ibodatxonasi', 'Bali oroli', 'Komodo oroli', 'Prambanan ibodatxonasi'],
      culture: 'Bali hindulari, anʼanaviy raqslar, batik matolar'
    },
    Tailand: {
      capital: 'Bangkok',
      population: '69.8 million',
      area: '513,120 km²',
      language: 'Tay tili',
      currency: 'Bat (฿)',
      currencyIcon: <FaDollarSign />,
      government: 'Konstitutsiyaviy monarxiya',
      timeZone: 'UTC+7 (ICT)',
      callingCode: '+66',
      facts: [
        'Janubi-Sharqiy Osiyoning sayyohlik markazi',
        'Siam - qadimiy nomi',
        'Dunyodagi eng uzun qirol nomi',
        'Muay Thai - milliy sport turi',
        'Oq fil - muqaddas hayvon'
      ],
      landmarks: ['Wat Arun', 'Grand Palace', 'Phuket oroli', 'Ayutthaya tarixiy shahri'],
      culture: 'Buddist anʼanalari, muay thai, anʼanaviy festival'
    },
    Vyetnam: {
      capital: 'Gano',
      population: '97.3 million',
      area: '331,212 km²',
      language: 'Vyet tili',
      currency: 'Vyetnam dongi (₫)',
      currencyIcon: <FaDollarSign />,
      government: 'Sotsialistik respublika',
      timeZone: 'UTC+7 (ICT)',
      callingCode: '+84',
      facts: [
        'Uzun va tor shakldagi mamlakat',
        'Dunyodagi ikkinchi eng katta kofe ishlab chiqaruvchi',
        'Fao - milliy taom',
        'Xo Chi Min - milliy qahramon',
        'Xalong koʻrfazi - dunyoning tabiiy moʻjizasi'
      ],
      landmarks: ['Xalong koʻrfazi', 'Hoi An shahri', 'Mekong daryosi', 'Sapa tepaliklari'],
      culture: 'Fao oshxonasi, anʼanaviy kostyumlar, su qoʻgʻirchoq teatri'
    }
  };

  const currentCountry = asiaCountries[selectedCountry];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sarlavha */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaGlobeAsia className="text-5xl text-red-600 mr-4" />
            <h1 className="text-5xl font-bold text-gray-800">Osiyo Davlatlari</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Osiyo qitʼasidagi davlatlarning toʻliq maʼlumotlari. Qadimiy sivilizatsiyalar, boy madaniyat va tez rivojlanayotgan iqtisodiyotlar mamlakati.
          </p>
        </div>

        {/* Davlatlar menyusi */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(asiaCountries).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`flex items-center px-5 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                selectedCountry === country
                  ? 'bg-red-600 text-white border-red-600 shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-red-50 hover:border-red-400 hover:shadow-md'
              }`}
            >
              <FaMapMarkerAlt className="mr-2" />
              {country}
            </button>
          ))}
        </div>

        {/* Asosiy ma'lumotlar kartasi */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-2">{selectedCountry}</h2>
                <div className="flex items-center text-red-100 text-lg">
                  <FaCity className="mr-2" />
                  <span>Poytaxt: {currentCountry.capital}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-3xl font-bold">{currentCountry.population}</div>
                <div className="text-red-100">Aholi soni</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Asosiy statistikalar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <FaMapMarkerAlt className="text-2xl text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{currentCountry.area}</div>
                <div className="text-gray-600 text-sm">Maydoni</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-yellow-600 mx-auto mb-2">
                  {currentCountry.currencyIcon}
                </div>
                <div className="text-lg font-bold text-gray-800">{currentCountry.currency}</div>
                <div className="text-gray-600 text-sm">Valyuta</div>
              </div>
              <div className="text-center">
                <FaLandmark className="text-2xl text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{currentCountry.government}</div>
                <div className="text-gray-600 text-sm">Boshqaruv shakli</div>
              </div>
              <div className="text-center">
                <FaUsers className="text-2xl text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{currentCountry.timeZone}</div>
                <div className="text-gray-600 text-sm">Vaqt mintaqasi</div>
              </div>
            </div>

            {/* Qo'shimcha ma'lumotlar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Chap qism - Asosiy ma'lumotlar */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaTree className="text-green-500 mr-2" />
                  Asosiy Ma'lumotlar
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Rasmiy til:</span>
                    <span className="font-semibold text-gray-800">{currentCountry.language}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Vaqt mintaqasi:</span>
                    <span className="font-semibold text-gray-800">{currentCountry.timeZone}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Telefon kodi:</span>
                    <span className="font-semibold text-gray-800">{currentCountry.callingCode}</span>
                  </div>
                </div>

                {/* Madaniyat */}
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <FaUtensils className="text-orange-500 mr-2" />
                    Madaniyat va An'analar
                  </h4>
                  <p className="text-gray-600 bg-orange-50 p-4 rounded-lg">
                    {currentCountry.culture}
                  </p>
                </div>
              </div>

              {/* O'ng qism - Faktlar va diqqatga sazovor joylar */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaMountain className="text-blue-500 mr-2" />
                  Qiziqarli Faktlar
                </h3>
                <ul className="space-y-3 mb-6">
                  {currentCountry.facts.map((fact, index) => (
                    <li key={index} className="flex items-start text-gray-600 bg-blue-50 p-3 rounded-lg">
                      <span className="text-blue-500 font-bold mr-2">•</span>
                      {fact}
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <FaWater className="text-purple-500 mr-2" />
                  Diqqatga Sazovor Joylar
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentCountry.landmarks.map((landmark, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Osiyo haqida umumiy ma'lumot */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Osiyo Qitʼasi Haqida</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Geografik Xususiyatlar</h3>
              <p className="text-red-100">
                Osiyo - dunyodagi eng katta qitʼa. Himolay togʻlari, Gobi choʻli, Yapon arxipelagi, 
                Arab yarim oroli. Turli iqlim zonalari va noyob tabiiy manzara.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Madaniy Xilma-xillik</h3>
              <p className="text-red-100">
                Qadimiy Xitoy, Hindiston, Yaponiya sivilizatsiyalari. Turli dinlar: Buddizm, 
                Hinduizm, Islom, Xristianlik. 2000 dan ortiq tillar va noyob madaniyatlar.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AsiaCountries;