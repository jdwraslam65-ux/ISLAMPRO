import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">منصة إسلام PRO</Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">الرئيسية</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
