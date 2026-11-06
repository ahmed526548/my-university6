import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Bot, User, Send } from 'lucide-react';

const BotPage = ({ setCurrentView }) => {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'أهلاً بك! أنا المساعد الجامعي الخاص بك 🎓\n\nيمكنك سؤالي عن أي محاضرة وسأقوم بشرحها وتبسيطها لك.\n\nجرب تكتب مثلاً:\n• اشرح أنظمة الأعداد\n• ما هو الـ Hardware؟\n• فرق بين RAM و Hard Disk',
      time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  // استقبال رسالة معلقة من صفحة المحاضرات
  useEffect(() => {
    if (window.__pendingBotMessage) {
      const msg = window.__pendingBotMessage;
      window.__pendingBotMessage = null;
      addUserMessage(msg);
      setTimeout(() => generateBotReply(msg), 600);
    }
  }, []);

  const addUserMessage = (text) => {
    setChatMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: 'user',
        text,
        time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const generateBotReply = (userText) => {
    setIsTyping(true);

    // ردود ذكية بسيطة حسب الكلمات المفتاحية
    const lower = userText.toLowerCase();
    let reply = '';

    if (lower.includes('أنظمة الأعداد') || lower.includes('number system') || lower.includes('binary') || lower.includes('ثنائي')) {
      reply = `أنظمة الأعداد من أهم أساسيات علوم الحاسب 🔢

الكمبيوتر بيفهم بس نظامين: 0 و 1 (كهربا طافية أو شغال).

• النظام العشري (Decimal): اللي بنستخدمه إحنا (0-9)
• النظام الثنائي (Binary): لغة الكمبيوتر (0 و 1)
• النظام السادس عشر (Hex): بنستخدمه عشان نختصر الأرقام الثنائية الطويلة (0-9 + A-F)

لو حابب أمثلة تحويل، قولي!`;
    } else if (lower.includes('hardware') || lower.includes('هاردوير') || lower.includes('مكونات') || lower.includes('مادي')) {
      reply = `الـ Hardware هو الجسم المادي للكمبيوتر 🖥️

ينقسم لـ:
1. وحدات إدخال (كيبورد، ماوس...)
2. المعالج (CPU) → المخ
3. وحدات إخراج (شاشة، سماعات...)
4. الذاكرة والتخزين (RAM + Hard Disk/SSD)

الـ RAM سريعة بس بتنسى لما الكهربا تقطع، أما الـ Hard Disk/SSD بيحفظ كل حاجة بشكل دائم.`;
    } else if (lower.includes('software') || lower.includes('سوفت وير') || lower.includes('برمجيات')) {
      reply = `البرمجيات هي الروح اللي بتشغل الجهاز 💻

نوعين أساسيين:
• برمجيات النظام: زي نظام التشغيل (Windows, Linux...)
• برمجيات التطبيقات: زي Word و Chrome والألعاب

بدون Software الجهاز مجرد حديد!`;
    } else if (lower.includes('شبكة') || lower.includes('network') || lower.includes('انترنت')) {
      reply = `الشبكات بتربط الأجهزة ببعض عشان تتبادل البيانات 🌐

أشهر الأنواع:
• LAN → شبكة محلية (البيت أو الكلية)
• WAN → شبكة واسعة (الإنترنت)

مكونات مهمة: Router, Switch, Modem
والـ IP Address هو عنوان جهازك على الشبكة.`;
    } else if (lower.includes('أمن') || lower.includes('security') || lower.includes('حماية')) {
      reply = `أمن المعلومات بيركز على 3 أهداف (CIA):
1. السرية (Confidentiality)
2. السلامة (Integrity)
3. التوافر (Availability)

نصائح سريعة:
• كلمات مرور قوية + 2FA
• تحديث مستمر
• متفتحش لينكات مشبوهة
• اعمل باكاب دوري`;
    } else if (lower.includes('ram') || lower.includes('ذاكرة')) {
      reply = `الـ RAM (Random Access Memory) هي الذاكرة العشوائية المؤقتة.

مميزاتها: سريعة جداً
عيبها: بتنسى كل حاجة لما الكهرباء تقطع (Volatile)

بتستخدم عشان البرامج اللي شغالة حالياً تشتغل بسرعة.`;
    } else if (lower.includes('مرحبا') || lower.includes('اهلا') || lower.includes('السلام') || lower.includes('hello')) {
      reply = `أهلاً بيك! 👋\nأنا هنا عشان أساعدك تفهم أي محاضرة.\nاسألني عن أي موضوع في أساسيات الحاسب أو الرياضيات أو الإلكترونيات.`;
    } else if (lower.includes('شكر') || lower.includes('thanks')) {
      reply = `العفو! لو محتاج أي حاجة تانية أنا موجود 😊`;
    } else {
      reply = `تم استلام سؤالك: "${userText}"\n\nهحاول أبسطلك المعلومة...\n\nلو السؤال متعلق بمحاضرة معينة، قولي اسم المحاضرة أو الموضوع بالظبط عشان أديك شرح أدق.\n\nمثال: "اشرح Hardware" أو "ما الفرق بين RAM و SSD؟"`;
    }

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 900 + Math.random() * 600);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim() || isTyping) return;

    const text = chatInput.trim();
    setChatInput('');
    addUserMessage(text);
    generateBotReply(text);
  };

  return (
    <div className="min-h-screen bg-[#050000] p-4 md:p-8 flex flex-col">
      <button
        onClick={() => setCurrentView('home')}
        className="flex items-center text-red-500 hover:text-red-400 mb-4 transition-colors font-bold w-fit"
      >
        <ChevronRight className="w-6 h-6 ml-2" />
        العودة للرئيسية
      </button>

      <div className="flex-1 max-w-4xl mx-auto w-full bg-[#110000] border border-red-900/40 rounded-2xl flex flex-col overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {/* رأس المحادثة */}
        <div className="bg-[#1a0505] p-4 flex items-center gap-3 border-b border-red-900/50">
          <div className="w-10 h-10 bg-red-900/40 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h3 className="font-bold text-white">المساعد الجامعي الذكي</h3>
            <p className="text-xs text-green-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              متصل الآن - جاهز للشرح
            </p>
          </div>
        </div>

        {/* الرسائل */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 min-h-[400px] max-h-[60vh]">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex message-enter ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 ${
                  msg.sender === 'user'
                    ? 'bg-red-900 text-white rounded-tl-none'
                    : 'bg-[#1f0505] border border-red-900/30 text-gray-200 rounded-tr-none'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 opacity-70">
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  <span className="text-xs">{msg.sender === 'user' ? 'أنت' : 'المساعد'}</span>
                </div>
                <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">{msg.text}</p>
                <span className="text-[10px] opacity-50 block mt-2 text-left" dir="ltr">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#1f0505] border border-red-900/30 rounded-2xl rounded-tr-none px-5 py-3">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* الإدخال */}
        <div className="p-4 bg-[#1a0505] border-t border-red-900/50">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="اكتب سؤالك أو اسم المحاضرة..."
              className="input-field flex-1"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!chatInput.trim() || isTyping}
              className="bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0"
            >
              <Send className="w-5 h-5 rtl:-scale-x-100" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BotPage;
