import React from 'react';
import { BookOpen, Bot, Calendar, Star, Clock } from 'lucide-react';
import { getTodayArabic } from '../data/schedules';
import { scheduleGroup1 } from '../data/schedules';

const Home = ({ setCurrentView, favorites }) => {
  const today = getTodayArabic();
  const todaySchedule = scheduleGroup1.find(d => d.day === today);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* خلفية متدرجة + توهج أحمر */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0000] via-[#050000] to-black" />
      
      <div
        className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full animate-pulse-glow pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,20,20,0.18) 0%, rgba(0,0,0,0) 65%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* العنوان */}
      <div className="z-10 text-center mb-10 md:mb-14">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-red-500 mb-3 glow-text">
          مرحباً بك في بوابتك الجامعية
        </h1>
        <h2 className="text-xl md:text-3xl font-bold text-white/90">
          جامعة بني سويف الأهلية
        </h2>
        <p className="mt-3 text-gray-400 text-sm md:text-base">
          مكتبة محاضرات • مساعد ذكي • جدول دراسي
        </p>
      </div>

      {/* الأزرار الرئيسية */}
      <div className="z-10 flex flex-wrap justify-center gap-5 md:gap-8 mb-10">
        <button
          onClick={() => setCurrentView('subjects')}
          className="group flex flex-col items-center justify-center w-36 h-36 md:w-52 md:h-52 bg-black/50 border-2 border-red-900/60 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.35)] hover:-translate-y-2"
        >
          <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
          <span className="text-white text-base md:text-lg font-bold">مكتبة المحاضرات</span>
        </button>

        <button
          onClick={() => setCurrentView('bot')}
          className="group flex flex-col items-center justify-center w-36 h-36 md:w-52 md:h-52 bg-black/50 border-2 border-red-900/60 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.35)] hover:-translate-y-2"
        >
          <Bot className="w-12 h-12 md:w-16 md:h-16 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
          <span className="text-white text-base md:text-lg font-bold">المساعد الجامعي</span>
        </button>

        <button
          onClick={() => setCurrentView('groups')}
          className="group flex flex-col items-center justify-center w-36 h-36 md:w-52 md:h-52 bg-black/50 border-2 border-red-900/60 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.35)] hover:-translate-y-2"
        >
          <Calendar className="w-12 h-12 md:w-16 md:h-16 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
          <span className="text-white text-base md:text-lg font-bold">جدول المحاضرات</span>
        </button>
      </div>

      {/* محاضرات اليوم + المفضلة */}
      <div className="z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5 px-2">
        {/* محاضرات اليوم */}
        <div className="bg-[#110000]/80 border border-red-900/40 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-red-500" />
            <h3 className="font-bold text-white">محاضرات اليوم ({today})</h3>
          </div>
          {todaySchedule && todaySchedule.slots.length > 0 ? (
            <div className="space-y-3">
              {todaySchedule.slots.slice(0, 3).map((slot, idx) => (
                <div key={idx} className="bg-[#1a0505] rounded-xl p-3 border border-red-900/20">
                  <div className="text-red-400 text-sm font-bold mb-1" dir="ltr">{slot.time}</div>
                  {slot.items.map((item, i) => (
                    <div key={i} className="text-sm text-gray-300">
                      {item.subject} — <span className="text-gray-500">{item.hall}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">لا توجد محاضرات اليوم أو اليوم إجازة</p>
          )}
        </div>

        {/* المفضلة */}
        <div className="bg-[#110000]/80 border border-red-900/40 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-red-500" />
            <h3 className="font-bold text-white">المواد المفضلة</h3>
          </div>
          {favorites.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {favorites.map(code => (
                <span
                  key={code}
                  className="bg-red-950/50 text-red-300 text-sm px-3 py-1.5 rounded-full border border-red-900/40"
                >
                  {code}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              لم تضف أي مادة للمفضلة بعد. اذهب لمكتبة المحاضرات واضغط على النجمة.
            </p>
          )}
        </div>
      </div>

      <footer className="z-10 mt-10 text-center text-gray-600 text-xs">
        جامعة بني سويف الأهلية • بوابة الطلاب 2026
      </footer>
    </div>
  );
};

export default Home;
