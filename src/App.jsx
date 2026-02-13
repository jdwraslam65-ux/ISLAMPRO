import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// استدعاء الملفات الثلاثة الموجودة في مجلد components
import Header from './components/Header.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import CallToAction from './components/CallToAction.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* عرض الهيدر في كل الصفحات */}
        <Header />
        
        <Routes>
          {/* الصفحة الرئيسية تعرض الرسالة وزر الاتصال */}
          <Route path="/" element={
            <main className="container mx-auto px-4">
              <WelcomeMessage />
              <CallToAction />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
