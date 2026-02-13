import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// استدعاء الملفات الثلاثة "النظيفة" فقط
import Header from './components/Header.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import CallToAction from './components/CallToAction.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <WelcomeMessage />
                <CallToAction />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
