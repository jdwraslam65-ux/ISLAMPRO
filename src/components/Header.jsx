import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#1e293b', color: 'white', padding: '1rem', textAlign: 'center' }}>
      <h1>منصة إسلام PRO</h1>
      <nav>
        <Link to="/" style={{ color: '#60a5fa', textDecoration: 'none' }}>الرئيسية</Link>
      </nav>
    </header>
  );
};

export default Header;

     
