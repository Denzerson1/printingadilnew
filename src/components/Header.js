import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../images/landinglogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-indigo-950 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-28 mr-2" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${isOpen ? 'max-h-screen' : 'max-h-0'} lg:max-h-full overflow-hidden lg:overflow-visible lg:flex lg:flex-row lg:space-x-6 text-base font-medium w-full lg:w-auto absolute lg:static top-full left-0 bg-indigo-950 lg:bg-transparent z-40 lg:z-auto px-6 lg:px-0 transition-all duration-300 ease-in-out`}
        >
          <div className="lg:flex lg:items-center lg:space-x-6 lg:flex-row flex flex-col space-y-2 lg:space-y-0">
            <div className="relative group">
              <Link to="/dtf" className="text-white hover:text-gray-300 py-3 lg:py-0">
                DTF Transfer
              </Link>
            </div>
              <div className="relative group">
                <Link to="/silkscreen" className="text-white hover:text-gray-300 py-3 lg:py-0">
                  Serigraph Transfers
                </Link>
              </div>
              <div className="relative group">
                <Link to="/silicone" className="text-white hover:text-gray-300 py-3 lg:py-0">
                  Silicone Transfer
                </Link>
                <div className="absolute left-0 hidden group-hover:block mt-0 py-3 w-56 bg-white rounded-lg shadow-lg">
                  <Link to="/lasercut/option1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">3D Silicone High Density</Link>
                  <Link to="/lasercut/option2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">3D Silicone Patch Logo</Link>
                  <Link to="/lasercut/option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Silicone Injection Molding</Link>
                  <Link to="/lasercut/option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Flat Silicone</Link>
                </div>
              </div>
              <div className="relative group">
                <Link to="/lasercut" className="text-white hover:text-gray-300 py-3 lg:py-0">
                  Laser Cut Transfer
                </Link>
                <div className="absolute left-0 hidden group-hover:block mt-0 py-3 w-56 bg-white rounded-lg shadow-lg">
                  <Link to="/dtf/option1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Reflective</Link>
                  <Link to="/dtf/option2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Special Effects</Link>
                  <Link to="/dtf/option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Hologram</Link>
                  <Link to="/dtf/option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Glitter</Link>
                </div>
              </div>
              <div className="relative group">
                <Link to="/offset-photoprint" className="text-white hover:text-gray-300 py-3 lg:py-0">
                  Offset & Photoprint Transfer
                </Link>
                <div className="absolute left-0 hidden group-hover:block mt-0 py-3 w-56 bg-white rounded-lg shadow-lg">
                  <Link to="/dtf/option1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">On paper</Link>
                  <Link to="/dtf/option2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Anti-Migration</Link>
                  <Link to="/dtf/option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Reflective</Link>
                  <Link to="/dtf/option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Glitter</Link>
                  <Link to="/dtf/option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Metallic Pearl</Link>
                </div>
              </div>
              <div className="relative group">
                <Link to="/machines" className="text-white hover:text-gray-300 py-3 lg:py-0">
                  Materials
                </Link>
                <div className="absolute left-0 hidden group-hover:block mt-0 py-3 w-56 bg-white rounded-lg shadow-lg">
                  <Link to="/machines/option1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Machines</Link>
                  <Link to="/machines/option2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Ink</Link>
                  <Link to="/machines/option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Thermal Presses</Link>
                </div>
              </div>
            </div>

            {/* Contact and Language in mobile view */}
            <div className="lg:hidden flex flex-col mt-4 space-y-2 pb-4">
              <a href="#contact" className="text-white  hover:text-gray-300 text-xl font-extrabold uppercase">CONTACT</a>
              <div className="relative pt-2">
                <select className="bg-indigo-950 text-white text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="EN">EN</option>
                  <option value="FR">FR</option>
                  <option value="ES">ES</option>
                </select>
              </div>
            </div>
        </nav>

        {/* Contact and Language in desktop view */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#contact" className="text-white text-l font-bold hover:text-gray-300">CONTACT</a>
          <div className="relative">
            <select className="bg-indigo-950 text-white text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
