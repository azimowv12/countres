"use client";
import { useState } from 'react';
import { FaGlobeAmericas, FaGlobeEurope, FaGlobeAsia, FaGlobeAfrica, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubmenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const menuItems = [
        {
            name: 'EVROPA',
            icon: <FaGlobeEurope className="text-xl" />,
            href: '/evropa'
        },
        {
            name: 'ASIA',
            icon: <FaGlobeAsia className="text-xl" />,
            href: '/asia'
        },
        {
            name: 'AFRIKA',
            icon: <FaGlobeAfrica className="text-xl" />,
            href: '/africa'
        },
        {
            name: 'HAMMASI',
            icon: <FaGlobeAfrica className="text-xl" />,
            href: '/all'
        }
    ];

    return (
        <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl rounded-xl mx-4 my-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <FaGlobeAmericas className="h-8 w-8 text-white" />
                            <ul className="ml-2 text-white font-bold text-xl">
                                <a href='./'>COUNTRES</a>
                            </ul>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:bg-blue-500 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:scale-105"
                                >
                                    {item.icon}
                                    <span className="ml-2">{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
                        >
                            {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800 bg-opacity-50 rounded-lg my-2">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:bg-blue-500 hover:bg-opacity-30 block px-4 py-3 rounded-lg text-base font-medium w-full text-left flex items-center transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.icon}
                                    <span className="ml-3">{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;