export const scheduleGroup1 = [
  {
    day: 'الأحد',
    dayEn: 'Sunday',
    slots: [
      { time: '09:30 AM', items: [{ subject: 'Comm Presentation', doctor: 'د. طه', hall: 'مدرج 3' }] },
      { time: '11:30 AM', items: [{ subject: 'Section Math 0', doctor: 'م. محمد جاد', hall: 'مبنى G 211 - الأهلية' }] },
    ]
  },
  {
    day: 'الإثنين',
    dayEn: 'Monday',
    slots: [
      { time: '09:00 AM', items: [{ subject: 'Scientific Thinking', doctor: 'د. حمادة محمود', hall: 'مدرج 4 - حكومي' }] },
      { time: '11:00 AM', items: [{ subject: 'Human Rights', doctor: 'د. عادلي أبو هشيمة', hall: 'مدرج 1 - حكومي' }] },
      { time: '01:00 PM', items: [{ subject: 'Fundamentals', doctor: 'د. محمد قايد', hall: 'مدرج 2 - حكومي' }] }
    ]
  },
  {
    day: 'الثلاثاء',
    dayEn: 'Tuesday',
    slots: [
      { time: '09:00 AM', items: [
        { subject: 'Sec Math 1', doctor: 'م. أسماء', hall: 'D 301' },
        { subject: 'Sec Math 1', doctor: 'م. رضا', hall: 'B 314' }
      ]},
      { time: '11:00 AM', items: [
        { subject: 'Sec Electronics', doctor: 'م. سلمى', hall: 'H 203' },
        { subject: 'Sec Fundamentals', doctor: 'م. هيام', hall: 'E 312' }
      ]},
      { time: '01:00 PM', items: [
        { subject: 'Sec Fundamentals', doctor: 'م. هيام', hall: 'E 312' },
        { subject: 'Sec Electronics', doctor: 'م. سلمى', hall: 'H 203' }
      ]}
    ]
  },
  {
    day: 'الأربعاء',
    dayEn: 'Wednesday',
    slots: [
      { time: '09:00 AM', items: [{ subject: 'Math 1', doctor: 'د. دعاء', hall: 'مدرج 2 - حكومي' }] },
      { time: '11:00 AM', items: [{ subject: 'English', doctor: 'د. شيماء', hall: 'مدرج 3 - حكومي' }] },
      { time: '01:00 PM', items: [{ subject: 'Electronics', doctor: 'د. شريف', hall: 'مدرج 4 - حكومي' }] },
      { time: '03:00 PM', items: [{ subject: 'Math 0', doctor: 'د. عبد المنعم', hall: 'قاعة 4 - حكومي' }] }
    ]
  }
];

export const scheduleGroup2 = [
  {
    day: 'الأحد',
    dayEn: 'Sunday',
    slots: [
      { time: '09:30 AM', items: [{ subject: 'Comm Presentation', doctor: 'د. طه', hall: 'مدرج 3 - حكومي' }] },
      { time: '11:30 AM', items: [{ subject: 'Section Math 0', doctor: 'م. محمد جاد', hall: 'مبنى G 211 - الأهلية' }] },
      { time: '01:00 PM', items: [{ subject: 'Math 1', doctor: 'د. محمد حسين', hall: 'مبنى C 309 - الأهلية' }] }
    ]
  },
  {
    day: 'الإثنين',
    dayEn: 'Monday',
    slots: [
      { time: '09:00 AM', items: [{ subject: 'Scientific Thinking', doctor: 'د. حمادة محمود', hall: 'مدرج 4 - حكومي' }] },
      { time: '11:00 AM', items: [{ subject: 'Human Rights', doctor: 'د. عادل أبو هشيمة', hall: 'مدرج 1 - حكومي' }] },
      { time: '01:00 PM', items: [{ subject: 'Fundamentals', doctor: 'د. محمد قايد', hall: 'مدرج 2 - حكومي' }] }
    ]
  },
  {
    day: 'الثلاثاء',
    dayEn: 'Tuesday',
    slots: [
      { time: '09:00 AM', items: [
        { subject: 'Sec 3 Fundamentals', doctor: 'م. هيام', hall: 'E 312' },
        { subject: 'Sec 4 Electronics', doctor: 'م. سلمى', hall: 'H 203 - الأهلية' }
      ]},
      { time: '11:00 AM', items: [
        { subject: 'Sec 3 Math 1', doctor: 'م. أسماء', hall: 'D 301 - الأهلية' },
        { subject: 'Sec 4 Math 1', doctor: 'م. رضا', hall: 'B 314 - الأهلية' }
      ]},
      { time: '01:00 PM', items: [
        { subject: 'Sec 3 Electronics', doctor: 'م. سلمى', hall: 'H 203 - الأهلية' },
        { subject: 'Sec 4 Fundamentals', doctor: 'م. هيام', hall: 'E 312 - الأهلية' }
      ]}
    ]
  },
  {
    day: 'الأربعاء',
    dayEn: 'Wednesday',
    slots: [
      { time: '11:00 AM', items: [{ subject: 'English', doctor: 'د. شيماء', hall: 'مدرج 3 - حكومي' }] },
      { time: '01:00 PM', items: [{ subject: 'Electronics', doctor: 'د. شريف', hall: 'مدرج 4 - حكومي' }] },
      { time: '03:00 PM', items: [{ subject: 'Math 0', doctor: 'د. عبد المنعم', hall: 'قاعة 4 - حكومي' }] }
    ]
  }
];

// Helper to get today's Arabic day name
export const getTodayArabic = () => {
  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  return days[new Date().getDay()];
};
