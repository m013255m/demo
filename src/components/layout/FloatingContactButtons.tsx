import React, { useState } from 'react';
import { PhoneCall, MessageCircle, X, Sparkles } from 'lucide-react';

export const FloatingContactButtons: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '01060474659';
  const internationalPhone = '+201060474659';
  const whatsappUrl = `https://wa.me/201060474659?text=${encodeURIComponent(
    'مرحباً شركة ديمو للتسويق الرقمي، أود استشارة تسويقية وتدقيقاً مجانياً لموقعي وحساباتي الإعلانية.'
  )}`;

  return (
    <aside
      aria-label="أزرار التواصل السريع"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-6 left-3 sm:left-6 z-50 flex flex-col items-start gap-2.5 select-none max-w-[calc(100vw-1.5rem)]"
    >
      {/* Expanded Quick Contact Card */}
      {isExpanded && (
        <div className="w-72 max-w-[calc(100vw-1.5rem)] rounded-2xl border border-neutral-200 bg-white/98 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200 text-right">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <button
              onClick={() => setIsExpanded(false)}
              className="text-neutral-400 hover:text-neutral-700 p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="إغلاق نافذة التواصل"
            >
              <X className="h-4 w-4 shrink-0" />
            </button>
            <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 font-arabic">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
              <span>فريق ديمو متاح الآن</span>
            </div>
          </div>

          <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed font-arabic">
            تواصل مباشرة مع استشاري التسويق والأرشفة عبر الرقم الرسمي:
          </p>

          <div className="mt-2.5 text-center py-2 px-3 bg-neutral-50 rounded-xl border border-neutral-200/80 font-mono text-base font-extrabold text-neutral-900 tracking-wider">
            {phoneNumber}
          </div>

          <div className="mt-3 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#25D366]/20 hover:bg-[#20ba59] transition-all cursor-pointer font-arabic"
            >
              <MessageCircle className="h-4 w-4 shrink-0 fill-white" />
              <span>محادثة واتساب فورية</span>
            </a>

            <a
              href={`tel:${internationalPhone}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-neutral-800 transition-all cursor-pointer font-arabic"
            >
              <PhoneCall className="h-4 w-4 shrink-0 text-amber-400" />
              <span>اتصال هاتفي مباشر</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Buttons Group */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* WhatsApp Floating Button: Circular on mobile, Pill on desktop */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer h-12 w-12 sm:h-14 sm:w-auto sm:px-4 sm:py-2 sm:gap-2.5 shrink-0"
          title={`تواصل عبر واتساب على الرقم ${phoneNumber}`}
          aria-label="تواصل عبر واتساب"
        >
          {/* Live Ping Animation */}
          <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
          </span>

          <svg
            className="h-6 w-6 shrink-0 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M17.472 14.382c-.301-.15-1.777-.877-2.052-.977-.275-.1-.476-.15-.676.15-.2.301-.776.977-.951 1.177-.175.201-.351.226-.652.075-1.03-.514-1.936-1.127-2.73-1.82-.619-.54-1.118-1.185-1.488-1.895-.15-.276-.016-.426.134-.576.135-.135.301-.351.451-.526.15-.175.201-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.588-.493-.508-.677-.517l-.576-.01c-.201 0-.526.075-.802.376-.275.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.228 3.11.15.201 2.122 3.24 5.141 4.542 1.83.789 2.553.86 3.488.721.57-.085 1.777-.726 2.028-1.428.25-.702.25-1.304.175-1.429-.075-.125-.276-.2-.577-.35zM12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.51 5.28L2 22l4.88-1.47C8.36 21.47 10.12 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.67 0-3.23-.48-4.56-1.31l-.33-.2-3.32 1 1.02-3.22-.22-.35A8.17 8.17 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z" />
          </svg>

          {/* Text visible on desktop */}
          <div className="hidden sm:flex flex-col text-right leading-tight">
            <span className="font-arabic text-xs font-bold">واتساب ديمو</span>
            <span className="font-mono text-[11px] font-semibold text-white/95" dir="ltr">
              {phoneNumber}
            </span>
          </div>
        </a>

        {/* Direct Phone Call Floating Button: Circular on mobile, Pill on desktop */}
        <a
          href={`tel:${internationalPhone}`}
          className="group relative flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-700/80 text-white shadow-xl shadow-neutral-900/20 hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer h-12 w-12 sm:h-14 sm:w-auto sm:px-4 sm:py-2 sm:gap-2.5 shrink-0"
          title={`اتصال هاتفي مباشر على الرقم ${phoneNumber}`}
          aria-label="اتصال هاتفي مباشر"
        >
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-amber-400 text-neutral-950 group-hover:bg-amber-300 transition-colors shrink-0">
            <PhoneCall className="h-4 w-4 shrink-0" />
          </div>

          {/* Text visible on desktop */}
          <div className="hidden sm:flex flex-col text-right leading-tight">
            <span className="font-arabic text-xs font-bold text-amber-400">اتصال فوري</span>
            <span className="font-mono text-[11px] font-semibold text-neutral-200" dir="ltr">
              {phoneNumber}
            </span>
          </div>
        </a>

        {/* Quick Info Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-md hover:bg-neutral-50 hover:text-neutral-900 transition-all cursor-pointer shrink-0"
          aria-label="خيارات الاتصال السريع"
          title="تفاصيل التواصل"
        >
          <Sparkles className="h-4 w-4 shrink-0 text-amber-500" />
        </button>
      </div>
    </aside>
  );
};
