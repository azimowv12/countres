"use client"
import { useState } from 'react';

import { FaGlobeEurope, FaMapMarkerAlt, FaUsers, FaCity, FaMountain, FaWater, FaEuroSign, FaLandmark, FaTree, FaUtensils } from 'react-icons/fa';

const EuropaCountries = () => {
    const [selectedCountry, setSelectedCountry] = useState('Germaniya');

    const europeCountries = {
        Germaniya: {
            capital: 'Berlin',
            population: '83.2 million',
            area: '357,022 km²',
            language: 'Nemis tili',
            currency: 'Yevro (€)',
            government: 'Federal parlamentar respublika',
            joiningEU: '1957-yil (asoschi)',
            timeZone: 'UTC+1 (CET)',
            callingCode: '+49',
            facts: [
                'Yevropa Ittifoqining eng katta iqtisodiyoti',
                'Avtomobilsozlikning vatani (Mercedes, BMW, Volkswagen)',
                '80 dan ortiq universitet va oliy taʼlim muassasalari',
                'Dunyoning eng yuqori sifatli yoʻllari tarmogʻi',
                '16 ta federal yer (Bundesländer) dan iborat'
            ],
            landmarks: ['Brandenburg darvozasi', 'Kölner Dom', 'Neuschwanstein qalʼasi', 'Berlin devori xarobalari'],
            culture: 'Oktyabr festivallari, Bavariya anʼanalari, klassik musiqa'
        },
        Frantsiya: {
            capital: 'Parij',
            population: '67.4 million',
            area: '643,801 km²',
            language: 'Fransuz tili',
            currency: 'Yevro (€)',
            government: 'Yarim prezidentlik respublikasi',
            joiningEU: '1957-yil (asoschi)',
            timeZone: 'UTC+1 (CET)',
            callingCode: '+33',
            facts: [
                'Dunyoning eng koʻp tashrif buyuriladigan mamlakatlari',
                'Vino ishlab chiqarishda dunyoda yetakchi',
                'Eyfel minorasi dunyoning eng mashhur inshootlaridan biri',
                'Luvr muzeyi dunyodagi eng koʻp tashrif buyuriladigan muzey',
                'Fransuz oshxonasi YuNESKOning nomoddiy madaniy merosi'
            ],
            landmarks: ['Eyfel minorasi', 'Luvr muzeyi', 'Versal saroyi', 'Notr-Dam sobori'],
            culture: 'Fransuz oshxonasi, sanʼat va moda, kinematografiya'
        },
        Italiya: {
            capital: 'Rim',
            population: '59.1 million',
            area: '301,340 km²',
            language: 'Italyan tili',
            currency: 'Yevro (€)',
            government: 'Parlamentar respublika',
            joiningEU: '1957-yil (asoschi)',
            timeZone: 'UTC+1 (CET)',
            callingCode: '+39',
            facts: [
                'Rim imperiyasining vatani',
                'Pitsa va makaronning tugʻilgan joyi',
                'Dunyodagi eng koʻp YuNESKO meros obyektlariga ega (58 ta)',
                'Vatikan - dunyodagi eng kichik mustaqil davlat',
                'Ferrari, Lamborghini kabi superavtomobillar ishlab chiqaradi'
            ],
            landmarks: ['Kolonna forumi', 'Piza minorasi', 'Venesiya kanallari', 'Florentsiya sanʼat galereyalari'],
            culture: 'Opera, dizayn, moda, futbol madaniyati'
        },
        Ispaniya: {
            capital: 'Madrid',
            population: '47.4 million',
            area: '505,990 km²',
            language: 'Ispan tili',
            currency: 'Yevro (€)',
            government: 'Konstitutsiyaviy monarxiya',
            joiningEU: '1986-yil',
            timeZone: 'UTC+1 (CET)',
            callingCode: '+34',
            facts: [
                'Dunyodagi ikkinchi eng koʻp YuNESKO meros obyektlari',
                'Flamenko raqsi va gitara musiqasi',
                'Ikkinchi eng katta til - ispan tili (400 million soʻzlovchi)',
                'Real Madrid va Barcelona - dunyoning eng boy futbol klublari',
                'Ibiza - dunyoning eng mashhur elektron musiqa markazi'
            ],
            landmarks: ['Sagrada Familia', 'Alhambra saroyi', 'Prado muzeyi', 'Sevilla sobori'],
            culture: 'Siesta anʼanasi, korrida, festival va bayramlar'
        },
        'Buyuk Britaniya': {
            capital: 'London',
            population: '67.3 million',
            area: '243,610 km²',
            language: 'Ingliz tili',
            currency: 'Funt sterling (£)',
            government: 'Konstitutsiyaviy monarxiya',
            joiningEU: '1973-yil (2020-yilda chiqib ketdi)',
            timeZone: 'UTC+0 (GMT)',
            callingCode: '+44',
            facts: [
                'Dunyodagi eng yirik moliya markazi - London',
                'Ingliz tili - dunyodagi eng keng tarqalgan til',
                'Beatles, Rolling Stones kabi dunyoga mashhur musiqachilar',
                'Eng qadimiy metro tizimi (1863-yil)',
                'Qirollik oilasi - dunyoning eng mashhur monarxiyasi'
            ],
            landmarks: ['Big Ben', 'London koʻzgusi', 'Stounxendj', 'Edinburg qalʼasi'],
            culture: '5 choy ichish, qirollik marosimlari, teatr anʼanalari'
        }
    };

    const currentCountry = europeCountries[selectedCountry];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Sarlavha */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <FaGlobeEurope className="text-5xl text-blue-600 mr-4" />
                        <h1 className="text-5xl font-bold text-gray-800">Evropa Davlatlari</h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Evropa qitʼasidagi 44 ta davlatning toʻliq maʼlumotlari. Boy tarix, madaniyat va zamonaviy texnologiyalar uyushgan qitʼa.
                    </p>
                </div>

                {/* Davlatlar menyusi */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {Object.keys(europeCountries).map((country) => (
                        <button
                            key={country}
                            onClick={() => setSelectedCountry(country)}
                            className={`flex items-center px-5 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${selectedCountry === country
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:shadow-md'
                                }`}
                        >
                            <FaMapMarkerAlt className="mr-2" />
                            {country}
                        </button>
                    ))}
                </div>

                {/* Asosiy ma'lumotlar kartasi */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-4xl font-bold mb-2">{selectedCountry}</h2>
                                <div className="flex items-center text-blue-100 text-lg">
                                    <FaCity className="mr-2" />
                                    <span>Poytaxt: {currentCountry.capital}</span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <div className="text-3xl font-bold">{currentCountry.population}</div>
                                <div className="text-blue-100">Aholi soni</div>
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
                                <FaEuroSign className="text-2xl text-yellow-600 mx-auto mb-2" />
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
                                <div className="text-lg font-bold text-gray-800">{currentCountry.joiningEU}</div>
                                <div className="text-gray-600 text-sm">YEvropaga qoʻshilish</div>
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

                {/* Evropa haqida umumiy ma'lumot */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-4">Evropa Qitʼasi Haqida</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-2">Geografik Xususiyatlar</h3>
                            <p className="text-blue-100">
                                Evropa - Osiyoning gʻarbiy qismidagi yarim orol, Atlantika okeani, Arktika okeani
                                va Oʻrta yer dengizi bilan oʻralgan. Alp, Ural, Karpat togʻlari va Skandinaviya
                                yarim oroli bor.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Iqtisodiyot va Siyosat</h3>
                            <p className="text-blue-100">
                                Yevropa Ittifoqi - dunyodagi eng yirik iqtisodiy va siyosiy ittifoq.
                                27 ta aʼzo davlat, yagona bozor, Yevro valyutasi va erkin harakatlanish huquqi.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EuropaCountries;