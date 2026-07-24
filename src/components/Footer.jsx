import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t  border-white/10 bg-black/40 backdrop-blur-2xl py-10 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm  font-medium text-gray-400">© 2026  All rights reserved.</p>
          <p className="text-sm  font-medium text-gray-400">Developed Dulal Ahmed</p>
        </div>
      </footer>
    );
};

export default Footer;