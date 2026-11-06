import React from 'react';
import { Download, CheckCircle, Heart } from 'lucide-react';

const Toast = ({ message }) => {
  if (!message) return null;

  const isFavorite = message.includes('المفضلة');
  const isDownload = message.includes('PDF') || message.includes('تحميل');

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg font-bold flex items-center gap-2">
        {isFavorite ? (
          <Heart className="w-5 h-5 fill-current" />
        ) : isDownload ? (
          <Download className="w-5 h-5" />
        ) : (
          <CheckCircle className="w-5 h-5" />
        )}
        {message}
      </div>
    </div>
  );
};

export default Toast;
