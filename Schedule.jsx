import React from 'react';
import { ChevronRight, Calendar, Clock, User, MapPin } from 'lucide-react';
import { scheduleGroup1, scheduleGroup2, getTodayArabic } from '../data/schedules';

const Schedule = ({ setCurrentView, selectedGroup }) => {
  const scheduleData = selectedGroup === 'جروب 1' ? scheduleGroup1 : selectedGroup === 'جروب 2' ? scheduleGroup2 : [];
  const today = getTodayArabic();

  return (
    <div className="min-h-screen bg-[#0a0000] p-5 md:p-10">
      <button
        onClick={() => setCurrentView('groups')}
        className="flex items-center text-red-500 hover:text-red-400 mb-8 transition-colors font-bold"
      >
        <ChevronRight className="w-6 h-6 ml-2" />
        العودة للجروبات
      </button>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center border-b border-red-900/50 pb-4">
          <Calendar className="w-7 h-7 ml-3 text-red-500" />
          الجدول الدراسي الأسبوعي — {selectedGroup}
        </h2>

        {scheduleData.length === 0 ? (
          <div className="text-center p-12 bg-[#110000] border border-red-900/40 rounded-2xl">
            <p className="text-red-400 text-xl font-bold">الجدول الخاص بهذا الجروب غير متوفر حالياً.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {scheduleData.map((dayData, index) => {
              const isToday = dayData.day === today;

              return (
                <div
                  key={index}
                  className={`bg-[#110000] border rounded-2xl p-5 transition-colors ${
                    isToday
                      ? 'border-red-500 shadow-[0_0_25px_rgba(220,38,38,0.15)]'
                      : 'border-red-900/40 hover:border-red-500/40'
                  }`}
                >
                  <h3 className="text-xl font-bold text-red-500 mb-5 pb-2 border-b border-red-900/30 flex items-center justify-between">
                    <span>{dayData.day}</span>
                    {isToday && (
                      <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">اليوم</span>
                    )}
                  </h3>

                  <div className="flex flex-col gap-4">
                    {dayData.slots.map((slot, slotIdx) => (
                      <div key={slotIdx} className="bg-[#1a0505] p-4 rounded-xl border border-red-900/20">
                        <div className="flex items-center text-red-400 font-bold mb-3">
                          <Clock className="w-4 h-4 ml-2" />
                          <span dir="ltr">{slot.time}</span>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                          {slot.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="bg-[#2a0505]/50 p-3 rounded-lg border border-red-900/10 flex flex-col gap-1.5"
                            >
                              <span className="font-bold text-white text-sm break-words">{item.subject}</span>
                              <div className="flex items-center text-xs text-gray-400">
                                <User className="w-3 h-3 ml-1 text-red-500/80" />
                                {item.doctor}
                              </div>
                              <div className="flex items-center text-xs text-gray-400">
                                <MapPin className="w-3 h-3 ml-1 text-red-500/80" />
                                {item.hall}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
