import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            M
          </div>
          <span className="text-xl font-bold text-white hidden sm:block">
            منصة إسلام PRO
          </span>
        </Link>

        {/* Navigation - بسيطة لتعمل بدون ملفات خارجية */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
            الرئيسية
          </Link>
          <div className="flex items-center gap-2">
             <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all">
                ابدأ الآن
             </button>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
