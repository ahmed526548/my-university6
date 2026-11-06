import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Subjects from './components/Subjects';
import Lectures from './components/Lectures';
import Bot from './components/Bot';
import Groups from './components/Groups';
import Schedule from './components/Schedule';
import Toast from './components/Toast';
import { subjectsData } from './data/subjects';
import { allLecturesData } from './data/lectures';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch {
      return [];
    }
  });

  // حفظ المفضلة
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // إخفاء الإشعار
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const toggleFavorite = (code) => {
    setFavorites(prev =>
      prev.includes(code)
        ? prev.filter(c => c !== code)
        : [...prev, code]
    );
    setToastMessage(
      favorites.includes(code)
        ? 'تمت إزالة المادة من المفضلة'
        : 'تمت إضافة المادة إلى المفضلة'
    );
  };

  const handleExplain = (lectureTitle) => {
    setCurrentView('bot');
    // سيتم التعامل مع الرسالة داخل مكون Bot عبر prop
    window.__pendingBotMessage = `مرحباً، أريد شرحاً تفصيلياً لـ "${lectureTitle}".`;
  };

  const filteredSubjects = subjectsData.filter(sub =>
    sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.arabicName.includes(searchQuery) ||
    sub.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div dir="rtl" className="font-sans min-h-screen bg-[#050000] text-gray-200">
      {currentView === 'home' && (
        <Home
          setCurrentView={setCurrentView}
          favorites={favorites}
        />
      )}

      {currentView === 'groups' && (
        <Groups
          setCurrentView={setCurrentView}
          setSelectedGroup={setSelectedGroup}
        />
      )}

      {currentView === 'subjects' && (
        <Subjects
          setCurrentView={setCurrentView}
          setSelectedSubject={setSelectedSubject}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredSubjects={filteredSubjects}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          allLecturesData={allLecturesData}
        />
      )}

      {currentView === 'lectures' && (
        <Lectures
          setCurrentView={setCurrentView}
          selectedSubject={selectedSubject}
          handleExplain={handleExplain}
          setToastMessage={setToastMessage}
        />
      )}

      {currentView === 'bot' && (
        <Bot
          setCurrentView={setCurrentView}
        />
      )}

      {currentView === 'schedule' && (
        <Schedule
          setCurrentView={setCurrentView}
          selectedGroup={selectedGroup}
        />
      )}

      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
