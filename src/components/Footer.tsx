import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="font-semibold">© {new Date().getFullYear()} St. Anselm&rsquo;s Senior Secondary School, Abu Road</p>
          <p className="text-sm text-blue-200">All rights reserved.</p>
        </div>
        
        <div className="flex gap-4">
          <a href="#notices" className="hover:underline">Notices</a>
          <a href="#downloads" className="hover:underline">Downloads</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
