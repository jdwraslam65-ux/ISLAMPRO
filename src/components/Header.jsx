import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#1e293b', color: 'white', padding: '1rem', textAlign: 'center', width: '100%' }}>
      <h1 style={{ margin: 0 }}>منصة إسلام PRO</h1>
      <nav style={{ marginTop: '10px' }}>
        <Link to="/" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 'bold' }}>الرئيسية</Link>
      </nav>
    </header>
  );
};

export default Header;
