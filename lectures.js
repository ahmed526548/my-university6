export const allLecturesData = {
  'CS101': [
    {
      id: 1,
      title: 'المحاضرة الأولى: Introduction (مقدمة)',
      doctor: 'د. محمد قايد',
      hasContent: true,
      duration: '45 دقيقة',
      summaryAr: `أهلاً بك في عالم علوم الحاسب! 🚀

بكل بساطة، الحاسب الآلي هو آلة ذكية جداً. إحنا بنديلها بيانات خام (Input)، هي بتفكر فيها وتعالجها (Processing)، وبعدين تطلع لنا معلومات مفيدة (Output) وتقدر تحفظها لوقت تاني (Storage).

ليش بنعتمد على الحاسب؟
⚡ سريع جداً وبينجز ملايين العمليات في ثانية.
🎯 دقيق ومش بيغلط لو عطيته الأوامر صح.
📚 يقدر يخزن كميات مهولة من البيانات.

تذكر دايماً: الحاسوب مقسوم لجزئين أساسيين:
1. المكونات المادية (Hardware): الحاجات اللي تقدر تمسكها بإيدك.
2. البرمجيات (Software): الروح اللي بتشغل الجهاز.

مفاهيم مهمة:
• البيانات vs المعلومات: البيانات خام، المعلومات نتيجة معالجة.
• نظام الحاسب = Hardware + Software + Users + Data`,
      summaryEn: `Welcome to the world of Computer Science! 🚀

Simply put, a computer is an incredibly smart machine. We give it raw data (Input), it thinks and processes it (Processing), then gives us useful information (Output), and can store it for later (Storage).

Why do we rely on computers?
⚡ Super Fast: Can do millions of operations per second.
🎯 Accurate: It doesn't make mistakes if given the right commands.
📚 Huge Storage Capacity.

Always remember, a computer is divided into two main parts:
1. Hardware: The physical components you can touch.
2. Software: The programs that breathe life into the machine.

Key Concepts:
• Data vs Information: Data is raw, Information is processed data.
• Computer System = Hardware + Software + Users + Data`
    },
    {
      id: 2,
      title: 'المحاضرة الثانية: Number System (أنظمة الأعداد)',
      doctor: 'د. محمد قايد',
      hasContent: true,
      duration: '50 دقيقة',
      summaryAr: `أنظمة الأعداد - لغة الكمبيوتر 🔢

إحنا كبشر بنستخدم النظام العشري (Decimal) اللي بيتكون من 10 أرقام (من 0 لـ 9). لكن الكمبيوتر مبياكلش معاه الكلام ده! الكمبيوتر بيفهم بس الكهربا (شغال أو طافي).

عشان كده الكمبيوتر بيستخدم النظام الثنائي (Binary):
🟢 1 يعني في كهربا (On).
🔴 0 يعني مفيش كهربا (Off).

أنظمة تانية بنستخدمها في البرمجة:
• الثماني (Octal): أساسه 8 (من 0 لـ 7).
• السادس عشر (Hexadecimal): أساسه 16 (من 0 لـ 9، وبعدها من A لـ F). بنستخدمه عشان نختصر الأرقام الثنائية الطويلة جداً!

تحويل سريع:
• Binary → Decimal: اضرب كل رقم في 2^مكانه واجمع.
• Decimal → Binary: اقسم على 2 وخد الباقي.`,
      summaryEn: `Number Systems - The Language of Computers 🔢

As humans, we use the Decimal system (base 10, numbers 0-9). But computers don't understand that! They only understand electricity (on or off).

That's why computers use the Binary system (base 2):
🟢 1 means electricity is ON.
🔴 0 means electricity is OFF.

Other systems used in computing:
• Octal (base 8): Uses digits 0-7.
• Hexadecimal (base 16): Uses digits 0-9 and letters A-F. We use it to shorten very long binary numbers!

Quick Conversion:
• Binary → Decimal: Multiply each digit by 2^position and sum.
• Decimal → Binary: Divide by 2 and take remainders.`
    },
    {
      id: 3,
      title: 'المحاضرة الثالثة: Hardware (المكونات المادية)',
      doctor: 'د. محمد قايد',
      hasContent: true,
      duration: '55 دقيقة',
      summaryAr: `المكونات المادية - جسم الكمبيوتر 🖥️

أي حاجة تقدر تمسكها في الكمبيوتر هي Hardware. وبتتقسم لـ 4 أقسام رئيسية:

1. وحدات الإدخال (Input Devices):
   • الكيبورد، الماوس، الميكروفون، الكاميرا، السكانر

2. وحدة المعالجة المركزية (CPU - المخ):
   • بتعمل كل الحسابات والمنطق
   • سرعة المعالج تقاس بالـ GHz
   • Core = نواة معالجة

3. وحدات الإخراج (Output Devices):
   • الشاشة، السماعات، الطابعة، البروجيكتور

4. الذاكرة والتخزين (Memory & Storage):
   • RAM (ذاكرة عشوائية): سريعة جداً لكن مؤقتة (بتنسى لما الكهرباء تقطع)
   • Hard Disk / SSD: تخزين دائم، أبطأ من الـ RAM
   • Cache: ذاكرة فائقة السرعة داخل المعالج

ملاحظة: SSD أسرع بكثير من HDD التقليدي.`,
      summaryEn: `Hardware - The Body of the Computer 🖥️

Anything physical you can touch in a computer is Hardware. It's divided into 4 main categories:

1. Input Devices:
   • Keyboard, Mouse, Microphone, Camera, Scanner

2. Central Processing Unit (CPU - The Brain):
   • Performs all calculations and logic
   • Speed measured in GHz
   • Core = processing unit

3. Output Devices:
   • Monitor, Speakers, Printer, Projector

4. Memory & Storage:
   • RAM (Random Access Memory): Super fast but volatile (forgets when power is off)
   • Hard Disk / SSD: Permanent storage, slower than RAM
   • Cache: Ultra-fast memory inside the processor

Note: SSDs are much faster than traditional HDDs.`
    },
    {
      id: 4,
      title: 'المحاضرة الرابعة: Software (البرمجيات)',
      doctor: 'د. محمد قايد',
      hasContent: true,
      duration: '50 دقيقة',
      summaryAr: `البرمجيات - روح الجهاز 💻

البرمجيات هي مجموعة التعليمات اللي بتقول للجهاز يعمل إيه. بدونها الجهاز مجرد حديد.

أنواع البرمجيات:

1. برمجيات النظام (System Software):
   • نظام التشغيل (Windows, Linux, macOS, Android)
   • برامج التشغيل (Drivers)
   • أدوات النظام (Antivirus, Disk Utilities)

2. برمجيات التطبيقات (Application Software):
   • برامج الإنتاجية (Word, Excel, PowerPoint)
   • المتصفحات (Chrome, Firefox)
   • الألعاب، برامج التصميم، إلخ

3. لغات البرمجة (Programming Languages):
   • عالية المستوى: Python, Java, C++, JavaScript
   • منخفضة المستوى: Assembly
   • الآلة: Binary (0 و 1)

نظام التشغيل هو الوسيط بين المستخدم والهاردوير.`,
      summaryEn: `Software - The Soul of the Machine 💻

Software is a set of instructions that tell the computer what to do. Without it, the computer is just metal.

Types of Software:

1. System Software:
   • Operating Systems (Windows, Linux, macOS, Android)
   • Device Drivers
   • System Utilities (Antivirus, Disk Tools)

2. Application Software:
   • Productivity apps (Word, Excel, PowerPoint)
   • Browsers (Chrome, Firefox)
   • Games, Design tools, etc.

3. Programming Languages:
   • High-level: Python, Java, C++, JavaScript
   • Low-level: Assembly
   • Machine Language: Binary (0s and 1s)

The Operating System is the intermediary between the user and the hardware.`
    },
    {
      id: 5,
      title: 'المحاضرة الخامسة: Networks (الشبكات)',
      doctor: 'د. محمد قايد',
      hasContent: true,
      duration: '50 دقيقة',
      summaryAr: `الشبكات - ربط الأجهزة ببعض 🌐

الشبكة هي مجموعة أجهزة متصلة ببعض عشان تتبادل البيانات.

أنواع الشبكات حسب الحجم:
• LAN (Local Area Network): شبكة محلية (بيت، مكتب، كلية)
• MAN (Metropolitan Area Network): شبكة مدينة
• WAN (Wide Area Network): شبكة واسعة (الإنترنت أكبر مثال)

مكونات الشبكة:
• Router: يوجه البيانات بين الشبكات
• Switch: يربط الأجهزة داخل نفس الشبكة
• Modem: يحول الإشارة
• Access Point: نقطة وصول لاسلكية

بروتوكولات مهمة:
• TCP/IP: أساس الإنترنت
• HTTP/HTTPS: تصفح الويب
• FTP: نقل الملفات
• IP Address: عنوان الجهاز على الشبكة

الإنترنت = شبكة الشبكات.`,
      summaryEn: `Networks - Connecting Devices 🌐

A network is a group of devices connected to share data.

Types by Size:
• LAN (Local Area Network): Home, office, campus
• MAN (Metropolitan Area Network): City-wide
• WAN (Wide Area Network): Large scale (Internet is the biggest)

Network Components:
• Router: Directs data between networks
• Switch: Connects devices within the same network
• Modem: Converts signals
• Access Point: Wireless connection point

Important Protocols:
• TCP/IP: Foundation of the Internet
• HTTP/HTTPS: Web browsing
• FTP: File transfer
• IP Address: Device address on the network

The Internet = Network of networks.`
    },
    {
      id: 6,
      title: 'المحاضرة السادسة: Security (أمن المعلومات)',
      doctor: 'د. محمد قايد',
      hasContent: true,
      duration: '45 دقيقة',
      summaryAr: `أمن المعلومات - حماية بياناتك 🔒

أهداف الأمن الثلاثة (CIA Triad):
1. Confidentiality (السرية): البيانات متاحة بس للي مصرح لهم
2. Integrity (السلامة): البيانات متتغيرتش بدون إذن
3. Availability (التوافر): البيانات متاحة لما تحتاجها

تهديدات شائعة:
• الفيروسات والبرامج الخبيثة (Malware)
• التصيد الاحتيالي (Phishing)
• هجمات Ransomware
• اختراق كلمات المرور

نصائح حماية أساسية:
• استخدم كلمات مرور قوية ومختلفة
• فعّل المصادقة الثنائية (2FA)
• حدّث نظامك وبرامجك باستمرار
• لا تفتح روابط مشبوهة
• استخدم VPN على الشبكات العامة
• اعمل نسخ احتياطي منتظم`,
      summaryEn: `Information Security - Protect Your Data 🔒

The CIA Triad:
1. Confidentiality: Data accessible only to authorized people
2. Integrity: Data is not changed without permission
3. Availability: Data is available when needed

Common Threats:
• Viruses and Malware
• Phishing attacks
• Ransomware
• Password cracking

Basic Protection Tips:
• Use strong and unique passwords
• Enable Two-Factor Authentication (2FA)
• Keep your system and apps updated
• Don't open suspicious links
• Use VPN on public networks
• Make regular backups`
    },
  ],
  'MA101': [
    {
      id: 1,
      title: 'المحاضرة الأولى: المقدمات والتفاضل',
      doctor: 'د. دعاء',
      hasContent: true,
      duration: '60 دقيقة',
      summaryAr: `مقدمة في التفاضل والتكامل 📐

التفاضل هو دراسة معدل التغير. لو عندك دالة f(x)، المشتقة f'(x) بتقولك الدالة بتزيد ولا بتقل وبأي سرعة.

قواعد أساسية:
• مشتقة الثابت = 0
• مشتقة x^n = n * x^(n-1)
• قاعدة المجموع: (f+g)' = f' + g'
• قاعدة الضرب والقسمة موجودة

تطبيقات:
• إيجاد السرعة والتسارع
• إيجاد القيم العظمى والصغرى
• رسم المنحنيات`,
      summaryEn: `Introduction to Differentiation 📐

Differentiation studies the rate of change. For a function f(x), the derivative f'(x) tells you whether the function is increasing or decreasing and how fast.

Basic Rules:
• Derivative of a constant = 0
• Derivative of x^n = n * x^(n-1)
• Sum rule: (f+g)' = f' + g'
• Product and quotient rules exist

Applications:
• Finding velocity and acceleration
• Finding maxima and minima
• Curve sketching`
    },
    {
      id: 2,
      title: 'المحاضرة الثانية: قواعد التفاضل المتقدمة',
      doctor: 'د. دعاء',
      hasContent: false,
      duration: '55 دقيقة',
      summaryAr: '',
      summaryEn: ''
    },
  ],
  'EL101': [
    {
      id: 1,
      title: 'المحاضرة الأولى: مقدمة في الإلكترونيات',
      doctor: 'د. شريف',
      hasContent: true,
      duration: '50 دقيقة',
      summaryAr: `مقدمة في الإلكترونيات ⚡

الإلكترونيات هي دراسة تدفق الإلكترونات والتحكم فيها.

مكونات أساسية:
• المقاومة (Resistor): تقاوم مرور التيار
• المكثف (Capacitor): يخزن الشحنة
• الملف (Inductor): يخزن الطاقة المغناطيسية
• الدايود (Diode): يسمح بمرور التيار في اتجاه واحد
• الترانزستور (Transistor): مفتاح أو مضخم إلكتروني

قوانين أساسية:
• قانون أوم: V = I × R
• قانونا كيرشوف للتيار والجهد`,
      summaryEn: `Introduction to Electronics ⚡

Electronics is the study of electron flow and its control.

Basic Components:
• Resistor: Opposes current flow
• Capacitor: Stores charge
• Inductor: Stores magnetic energy
• Diode: Allows current in one direction
• Transistor: Electronic switch or amplifier

Basic Laws:
• Ohm's Law: V = I × R
• Kirchhoff's Current and Voltage Laws`
    },
  ],
  'HU102': [
    {
      id: 1,
      title: 'المحاضرة الأولى: ما هو التفكير العلمي؟',
      doctor: 'د. حمادة محمود',
      hasContent: true,
      duration: '45 دقيقة',
      summaryAr: `التفكير العلمي 🧠

التفكير العلمي هو أسلوب منظم لفهم العالم يعتمد على:
• الملاحظة الدقيقة
• طرح الأسئلة
• وضع الفرضيات
• التجربة والاختبار
• استخلاص النتائج
• التعديل بناءً على الأدلة

خصائص التفكير العلمي:
• موضوعي (مش عاطفي)
• قابل للاختبار
• قابل للتكرار
• مبني على الدليل
• منفتح على التصحيح`,
      summaryEn: `What is Scientific Thinking? 🧠

Scientific thinking is a systematic way of understanding the world based on:
• Careful observation
• Asking questions
• Forming hypotheses
• Experimentation and testing
• Drawing conclusions
• Revising based on evidence

Characteristics:
• Objective (not emotional)
• Testable
• Reproducible
• Evidence-based
• Open to correction`
    },
  ],
  'default': [
    {
      id: 1,
      title: 'جاري إضافة محاضرات هذه المادة...',
      doctor: 'غير محدد',
      hasContent: false,
      duration: '-',
      summaryAr: '',
      summaryEn: ''
    }
  ]
};
