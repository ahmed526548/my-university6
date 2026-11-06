import React from 'react';
import { ChevronRight, Search, BookOpen, Star, CheckCircle } from 'lucide-react';

const Subjects = ({
  setCurrentView,
  setSelectedSubject,
  searchQuery,
  setSearchQuery,
  filteredSubjects,
  favorites,
  toggleFavorite,
  allLecturesData
}) => {
  const getProgress = (code) => {
    const lectures = allLecturesData[code] || allLecturesData['default'];
    const total = lectures.length;
    const ready = lectures.filter(l => l.hasContent).length;
    return { total, ready, percent: total ? Math.round((ready / total) * 100) : 0 };
  };

  return (
    <div className="min-h-screen bg-[#050000] p-5 md:p-10">
      <button
        onClick={() => setCurrentView('home')}
        className="flex items-center text-red-500 hover:text-red-400 mb-8 transition-colors font-bold"
      >
        <ChevronRight className="w-6 h-6 ml-2" />
        العودة للرئيسية
      </button>

      {/* شريط البحث */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="ابحث عن مادة بالاسم أو الكود..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pr-12"
          />
          <Search className="absolute right-4 top-3.5 w-5 h-5 text-red-500" />
        </div>
      </div>

      {/* شبكة المواد */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredSubjects.length === 0 ? (
          <div className="col-span-full text-center py-16 text-gray-500">
            لا توجد مواد تطابق البحث
          </div>
        ) : (
          filteredSubjects.map(subject => {
            const progress = getProgress(subject.code);
            const isFav = favorites.includes(subject.code);

            return (
              <div
                key={subject.id}
                className="card p-5 flex flex-col cursor-pointer group relative"
                onClick={() => {
                  setSelectedSubject(subject);
                  setCurrentView('lectures');
                }}
              >
                {/* نجمة المفضلة */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(subject.code);
                  }}
                  className="absolute top-4 left-4 p-1.5 rounded-full hover:bg-red-900/40 transition-colors"
                >
                  <Star
                    className={`w-5 h-5 transition-colors ${
                      isFav ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600 group-hover:text-gray-400'
                    }`}
                  />
                </button>

                <div className="w-14 h-14 bg-red-950/50 rounded-full flex items-center justify-center mb-4 text-red-500 mx-auto">
                  <BookOpen className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold text-white text-center mb-1">
                  {subject.arabicName}
                </h3>
                <p className="text-sm text-gray-400 text-center mb-3">{subject.name}</p>

                <div className="flex justify-center mb-3">
                  <span className="text-xs text-red-400 bg-red-950/40 px-3 py-1 rounded-full">
                    {subject.code}
                  </span>
                </div>

                {/* شريط التقدم */}
                <div className="mt-auto">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{progress.ready}/{progress.total} محاضرة</span>
                    <span>{progress.percent}%</span>
                  </div>
                  <div className="h-1.5 bg-[#1a0505] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-red-600 to-red-400 rounded-full transition-all duration-500"
                      style={{ width: `${progress.percent}%` }}
                    />
                  </div>
                  {progress.percent === 100 && (
                    <div className="flex items-center justify-center gap-1 mt-2 text-green-500 text-xs">
                      <CheckCircle className="w-3.5 h-3.5" />
                      مكتملة
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Subjects;
