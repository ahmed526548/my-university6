import React, { useState } from 'react';
import { ChevronRight, Eye, Bot, Download, BookOpen, Clock, X } from 'lucide-react';
import { allLecturesData } from '../data/lectures';

const Lectures = ({ setCurrentView, selectedSubject, handleExplain, setToastMessage }) => {
  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    title: '',
    content: '',
    lang: '',
    lecture: null
  });

  const lectures = allLecturesData[selectedSubject?.code] || allLecturesData['default'];

  const handlePreview = (lecture, lang) => {
    setPreviewModal({
      isOpen: true,
      title: lecture.title,
      content: lang === 'ar' ? lecture.summaryAr : lecture.summaryEn,
      lang,
      lecture
    });
  };

  const handleDownload = (lecture, lang) => {
    const content = lang === 'ar' ? lecture.summaryAr : lecture.summaryEn;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lecture.title.replace(/[:/\\?%*|"<>]/g, '-')}_${lang}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setToastMessage('تم تحميل الملخص بنجاح!');
  };

  return (
    <div className="min-h-screen bg-[#050000] p-5 md:p-10 relative">
      <button
        onClick={() => setCurrentView('subjects')}
        className="flex items-center text-red-500 hover:text-red-400 mb-8 transition-colors font-bold"
      >
        <ChevronRight className="w-6 h-6 ml-2" />
        العودة للمواد
      </button>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 border-b border-red-900/50 pb-4">
          محاضرات: <span className="text-red-500">{selectedSubject?.arabicName || selectedSubject?.name}</span>
        </h2>
        <p className="text-gray-500 text-sm mb-8">{selectedSubject?.code}</p>

        <div className="flex flex-col gap-4">
          {lectures.map(lecture => (
            <div
              key={lecture.id}
              className="bg-[#110000] border border-red-900/30 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-red-900/70 transition-colors"
            >
              <div className="flex-1">
                <h4 className="text-base md:text-lg font-bold text-white mb-2">{lecture.title}</h4>
                <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                  <span>المحاضر: <span className="text-gray-300">{lecture.doctor}</span></span>
                  {lecture.duration && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {lecture.duration}
                    </span>
                  )}
                </div>
                {!lecture.hasContent && (
                  <span className="inline-block mt-2 bg-red-900/40 text-red-400 text-xs px-2 py-1 rounded border border-red-900/50">
                    لم يتم دراستها بعد / قريباً
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {lecture.hasContent ? (
                  <>
                    <button
                      onClick={() => handlePreview(lecture, 'ar')}
                      className="flex items-center justify-center gap-1.5 bg-transparent border border-blue-600/50 text-blue-400 hover:bg-blue-600/10 px-3 py-2 rounded-lg transition-colors text-sm font-bold"
                    >
                      <Eye className="w-4 h-4" /> عربي
                    </button>
                    <button
                      onClick={() => handlePreview(lecture, 'en')}
                      className="flex items-center justify-center gap-1.5 bg-transparent border border-yellow-600/50 text-yellow-500 hover:bg-yellow-600/10 px-3 py-2 rounded-lg transition-colors text-sm font-bold"
                    >
                      <Eye className="w-4 h-4" /> English
                    </button>
                    <button
                      onClick={() => handleExplain(lecture.title)}
                      className="flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-lg transition-colors text-sm font-bold shadow-[0_0_10px_rgba(220,38,38,0.3)]"
                    >
                      <Bot className="w-4 h-4" /> اشرح لي
                    </button>
                  </>
                ) : (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 bg-[#1a0505] text-gray-500 px-5 py-3 rounded-lg cursor-not-allowed border border-gray-800 text-sm font-bold"
                  >
                    المحتوى مغلق حالياً
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal المعاينة */}
      {previewModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0a0000] border-2 border-red-900 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-[0_0_50px_rgba(255,0,0,0.15)]">
            <div className="p-4 border-b border-red-900/50 flex justify-between items-center bg-[#110000] rounded-t-xl">
              <h3 className="text-lg font-bold text-red-500 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {previewModal.title}
                <span className="text-sm text-gray-400 font-normal">
                  — {previewModal.lang === 'ar' ? 'عربي' : 'English'}
                </span>
              </h3>
              <button
                onClick={() => setPreviewModal({ ...previewModal, isOpen: false })}
                className="text-gray-400 hover:text-white bg-red-900/30 hover:bg-red-900/60 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="p-6 overflow-y-auto flex-1 text-gray-200 text-base leading-relaxed whitespace-pre-wrap"
              dir={previewModal.lang === 'ar' ? 'rtl' : 'ltr'}
            >
              {previewModal.content}
            </div>

            <div className="p-4 border-t border-red-900/50 bg-[#110000] rounded-b-xl flex flex-wrap justify-end gap-3">
              <button
                onClick={() => {
                  setPreviewModal({ ...previewModal, isOpen: false });
                  handleExplain(previewModal.title);
                }}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors text-sm font-bold"
              >
                <Bot className="w-4 h-4" /> اطلب شرح من المساعد
              </button>
              <button
                onClick={() => handleDownload(previewModal.lecture, previewModal.lang)}
                className="flex items-center gap-2 bg-transparent border border-green-600/50 text-green-500 hover:bg-green-600/10 px-4 py-2 rounded-lg transition-colors text-sm font-bold"
              >
                <Download className="w-4 h-4" /> تحميل الملخص
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lectures;
