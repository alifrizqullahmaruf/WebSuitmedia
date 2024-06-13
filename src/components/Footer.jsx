import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 mt-16 text-white bg-orange-600">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">Suitmedia</h3>
          <p className="text-sm">Jl. Watugede No.58, Wonorejo, Sariharjo</p>
        </div>

        {/* Important Links */}
        

        {/* Social Media */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mt-4 text-sm text-center">
        <p>&copy; 2024 Suitmedia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
