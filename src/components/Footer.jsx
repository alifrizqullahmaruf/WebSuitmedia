import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Inisialisasi AOS sekali saja saat komponen dimuat
  }, []);

  return (
    <footer className="py-8 mt-16 text-white bg-orange-600" data-aos="fade-up">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        {/* Company Info */}
        <div className="text-center md:text-left" data-aos="fade-up">
          <h3 className="text-lg font-bold">Suitmedia</h3>
          <p className="mt-1 text-sm">Jl. Watugede No.58, Wonorejo, Sariharjo</p>
        </div>

        {/* Social Media */}
        <div className="flex gap-4" data-aos="fade-up">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mt-8 text-sm text-center" data-aos="fade-up">
        <p>&copy; 2024 Suitmedia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
