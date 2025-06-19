import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo + School Name */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/anselm-crest.jpeg" 
            alt="St. Anselm’s Crest" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold text-blue-900">
            St. Anselm’s
          </span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#academics" className="hover:text-blue-600">Academics</a></li>
          <li><a href="#gallery" className="hover:text-blue-600">Gallery</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-blue-900">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
