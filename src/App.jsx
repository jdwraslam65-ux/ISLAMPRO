import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* البطاقة الزجاجية الرئيسية */}
      <div className="glass-panel max-w-2xl w-full p-12 text-center">
        <h1 className="text-5xl font-extrabold mb-6 gradient-text">
          إسلام برو
        </h1>
        <p className="text-xl text-blue-100/70 mb-8 leading-relaxed">
          مساحتك الروحية الرقمية بتصميم عصري وأنيق
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
            <h3 className="font-bold">مواقيت الصلاة</h3>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
            <h3 className="font-bold">الأذكار اليومية</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
