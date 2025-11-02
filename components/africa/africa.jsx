"use client";
import { useState } from 'react';
import { FaGlobeAfrica, FaMapMarkerAlt, FaUsers, FaCity, FaMountain, FaWater, FaLandmark, FaTree, FaUtensils, FaDollarSign } from 'react-icons/fa';

const AfrikaCountries = () => {
  const [selectedCountry, setSelectedCountry] = useState('Misr');

  const afrikaCountries = {
    Misr: {
      capital: 'Qohira',
      population: '104 million',
      area: '1,010,408 km²',
      language: 'Arab tili',
      currency: 'Misr funti (E£)',
      currencyIcon: <FaDollarSign />,
      government: 'Yarim prezidentlik respublikasi',
      timeZone: 'UTC+2 (EET)',
      callingCode: '+20',
      facts: [
        'Qadimiy firʼavnlar sivilizatsiyasining vatani',
        'Nil daryosi Misr sivilizatsiyasining asosi',
        'Piramidalar dunyoning 7 moʻjizasidan biri',
        'Qohira - Afrikadagi eng katta shahar',
        'Qadimiy yozuv - ierogliflar'
      ],
      landmarks: ['Giza piramidalari', 'Qirol vodiysi', 'Abu Simbel', 'Luxor ibodatxonasi'],
      culture: 'Arab madaniyati, sufi anʼanalari, anʼanaviy musiqa'
    },
    'Janubiy Afrika': {
      capital: 'Pretoriya',
      population: '59.3 million',
      area: '1,221,037 km²',
      language: '11 rasmiy til',
      currency: 'Rand (R)',
      currencyIcon: <FaDollarSign />,
      government: 'Parlamentar respublika',
      timeZone: 'UTC+2 (SAST)',
      callingCode: '+27',
      facts: [
        'Afrikadagi eng rivojlangan iqtisodiyot',
        'Dunyoning eng boy mineral resurslari',
        'Nelson Mandela vatani',
        '3 ta poytaxt: Pretoriya, Keyptaun, Blomfonteyn',
        'Table Mountain - dunyoning 7 tabiiy moʻjizasi'
      ],
      landmarks: ['Table Mountain', 'Kruger milliy bogʻi', 'Cape of Good Hope', 'Robben oroli'],
      culture: 'Aparteid tarixi, rangli madaniyat, Zulu anʼanalari'
    },
    Keniya: {
      capital: 'Nayrobi',
      population: '53.8 million',
      area: '580,367 km²',
      language: 'Suahili, Ingliz tili',
      currency: 'Keniya shillingi (KSh)',
      currencyIcon: <FaDollarSign />,
      government: 'Prezidentlik respublika',
      timeZone: 'UTC+3 (EAT)',
      callingCode: '+254',
      facts: [
        'Safari va tabiat diyori',
        'Dunyoning eng tez yuguruvchi odamlari',
        'Katta migratsiya - dunyoning tabiat moʻjizasi',
        'Nayrobi - Sharqiy Afrikaning savdo markazi',
        '70 dan ortiq qabilalar'
      ],
      landmarks: ['Maasai Mara qoʻriqxonasi', 'Keniya togʻi', 'Nayrobi milliy bogʻi', 'Amboseli'],
      culture: 'Maasai qabilasi, suahili madaniyati, anʼanaviy raqslar'
    },
    Marokash: {
      capital: 'Rabat',
      population: '37.1 million',
      area: '710,850 km²',
      language: 'Arab tili, Berber tili',
      currency: 'Dirham (MAD)',
      currencyIcon: <FaDollarSign />,
      government: 'Konstitutsiyaviy monarxiya',
      timeZone: 'UTC+1 (WEST)',
      callingCode: '+212',
      facts: [
        'Arab va Berber madaniyatlarining uygʻunligi',
        'Atlas togʻlari va Sahroi Kabir choʻli',
        'Marokash - dunyodagi eng katta fosfat ishlab chiqaruvchi',
        'Fes - dunyodagi eng katta qadimiy medina',
        'Anʼanaviy hammomlar va arxitektura'
      ],
      landmarks: ['Jama el-Fna maydoni', 'Hassan II masjidi', 'Fes medinasi', 'Atlas togʻlari'],
      culture: 'Berber anʼanalari, arab oshxonasi, anʼanaviy hunarmandchilik'
    },
    Nigeriya: {
      capital: 'Abuja',
      population: '206 million',
      area: '923,768 km²',
      language: 'Ingliz tili',
      currency: 'Nayra (₦)',
      currencyIcon: <FaDollarSign />,
      government: 'Federal prezidentlik respublika',
      timeZone: 'UTC+1 (WAT)',
      callingCode: '+234',
      facts: [
        'Afrikadagi eng gavadir aholiga ega davlat',
        'Dunyoning eng yirik neft ishlab chiqaruvchilaridan biri',
        'Nollywood - dunyodagi ikkinchi eng koʻp filmlar ishlab chiqaradigan sanoat',
        '250 dan ortiq etnik guruhlar',
        'Nayjer daryosi - Gʻarbiy Afrikadagi eng uzun daryo'
      ],
      landmarks: ['Zuma Rock', 'Yankari milliy bogʻi', 'Lagos lagunasi', 'Obudu platosu'],
      culture: 'Yoruba va Igbo madaniyatlari, afrobeat musiqa, anʼanaviy festival'
    },
    Jazoir: {
      capital: 'Jazoir',
      population: '44.2 million',
      area: '2,381,741 km²',
      language: 'Arab tili, Berber tili',
      currency: 'Jazoir dinori (DZD)',
      currencyIcon: <FaDollarSign />,
      government: 'Yarim prezidentlik respublika',
      timeZone: 'UTC+1 (CET)',
      callingCode: '+213',
      facts: [
        'Afrikadagi eng katta davlat maydoni boʻyicha',
        'Sahroi Kabir choʻlining katta qismini egallaydi',
        'Dunyoning eng yirik tabiiy gaz ishlab chiqaruvchilaridan biri',
        'Qadimiy Rim shaharlari xarobalari',
        'Atlas togʻlari va Sahroi Kabir choʻli'
      ],
      landmarks: ['Kasbah of Algiers', 'Tassili n\'Ajjer', 'Djemila', 'Timimoun vohasi'],
      culture: 'Arab-Berber madaniyati, anʼanaviy musiqa, raqs'
    },
    Efiopiya: {
      capital: 'Addis-Abeba',
      population: '117.9 million',
      area: '1,104,300 km²',
      language: 'Amxara tili',
      currency: 'Birr (ETB)',
      currencyIcon: <FaDollarSign />,
      government: 'Federal parlamentar respublika',
      timeZone: 'UTC+3 (EAT)',
      callingCode: '+251',
      facts: [
        'Afrikadagi eng qadimiy mustaqil davlat',
        'Dunyodagi eng qadimiy inson qoldiqlari topilgan joy',
        'Kofe kelib chiqish joyi',
        'Lalibela - qoya ibodatxonalari',
        'Yagona Afrikaning hech qachon mustamlakasi boʻlmagan davlat'
      ],
      landmarks: ['Lalibela ibodatxonalari', 'Simen togʻlari', 'Aksum stelalari', 'Tana koʻli'],
      culture: 'Kofe marosimi, anʼanaviy kostyumlar, Efiopiya pravoslav cherkovi'
    },
    Tanzania: {
      capital: 'Dodoma',
      population: '61.5 million',
      area: '947,300 km²',
      language: 'Suahili, Ingliz tili',
      currency: 'Tanzania shillingi (TSh)',
      currencyIcon: <FaDollarSign />,
      government: 'Prezidentlik respublika',
      timeZone: 'UTC+3 (EAT)',
      callingCode: '+255',
      facts: [
        'Kilimanjaro - Afrikadagi eng baland togʻ',
        'Serengeti milliy bogʻi - katta migratsiya joyi',
        'Zanzibar - mashhur sayyohlik oroli',
        '120 dan ortiq qabilalar',
        'Olduvai darasi - qadimiy inson qoldiqlari'
      ],
      landmarks: ['Kilimanjaro togʻi', 'Serengeti milliy bogʻi', 'Zanzibar oroli', 'Ngorongoro krateri'],
      culture: 'Suahili madaniyati, Maasai anʼanalari, anʼanaviy musiqa'
    }
  };

  const currentCountry = afrikaCountries[selectedCountry];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sarlavha */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaGlobeAfrica className="text-5xl text-green-600 mr-4" />
            <h1 className="text-5xl font-bold text-gray-800">Afrika Davlatlari</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Afrika qitʼasidagi 54 ta davlatning toʻliq maʼlumotlari. Boy tabiiy resurslar, qadimiy sivilizatsiyalar va rangli madaniyatlar mamlakati.
          </p>
        </div>

        {/* Davlatlar menyusi */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(afrikaCountries).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`flex items-center px-5 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                selectedCountry === country
                  ? 'bg-green-600 text-white border-green-600 shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-400 hover:shadow-md'
              }`}
            >
              <FaMapMarkerAlt className="mr-2" />
              {country}
            </button>
          ))}
        </div>

        {/* Asosiy ma'lumotlar kartasi */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-600 to-amber-600 p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-2">{selectedCountry}</h2>
                <div className="flex items-center text-green-100 text-lg">
                  <FaCity className="mr-2" />
                  <span>Poytaxt: {currentCountry.capital}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-3xl font-bold">{currentCountry.population}</div>
                <div className="text-green-100">Aholi soni</div>
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
                <FaLandmark className="text-2xl text-red-600 mx-auto mb-2" />
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

        {/* Afrika haqida umumiy ma'lumot */}
        <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Afrika Qitʼasi Haqida</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Geografik Xususiyatlar</h3>
              <p className="text-green-100">
                Afrika - dunyodagi ikkinchi eng katta qitʼa. Sahroi Kabir choʻli, Kongo daryosi, 
                Nil daryosi, Kilimanjaro togʻi kabi tabiiy moʻjizalar. Boy mineral resurslar 
                va noyob yovvoyi tabiat.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Madaniy Xilma-xillik</h3>
              <p className="text-green-100">
                3000 dan ortiq etnik guruhlar, 2000 dan ortiq tillar. Qadimiy Misr sivilizatsiyasi, 
                Mali imperiyasi, Zulu qirolligi. Rangli madaniyat, musiqa, raqs va anʼanaviy dinlar.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AfrikaCountries;