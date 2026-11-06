import React from 'react';
import { ChevronRight, Users } from 'lucide-react';

const Groups = ({ setCurrentView, setSelectedGroup }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-[#050000] overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,20,20,0.12) 0%, rgba(0,0,0,0) 60%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="w-full max-w-4xl z-10">
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center text-red-500 hover:text-red-400 mb-10 transition-colors font-bold"
        >
          <ChevronRight className="w-6 h-6 ml-2" />
          العودة للرئيسية
        </button>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center glow-text">
          اختر الجروب الخاص بك
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <button
            onClick={() => {
              setSelectedGroup('جروب 1');
              setCurrentView('schedule');
            }}
            className="group flex flex-col items-center justify-center w-44 h-44 md:w-60 md:h-60 bg-[#110000] border-2 border-red-900/60 rounded-2xl transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:-translate-y-2"
          >
            <Users className="w-16 h-16 md:w-20 md:h-20 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-white text-xl md:text-2xl font-bold">جروب 1</span>
            <span className="text-gray-500 text-sm mt-1">Group 1</span>
          </button>

          <button
            onClick={() => {
              setSelectedGroup('جروب 2');
              setCurrentView('schedule');
            }}
            className="group flex flex-col items-center justify-center w-44 h-44 md:w-60 md:h-60 bg-[#110000] border-2 border-red-900/60 rounded-2xl transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:-translate-y-2"
          >
            <Users className="w-16 h-16 md:w-20 md:h-20 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-white text-xl md:text-2xl font-bold">جروب 2</span>
            <span className="text-gray-500 text-sm mt-1">Group 2</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Groups;
