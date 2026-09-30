import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <section className="relative border-b border-neutral-200/80 bg-neutral-50/70 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          <div className="border-r border-neutral-200 pr-4 space-y-1.5">
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display">SEO</div>
            <div className="text-xs text-neutral-600 font-arabic leading-relaxed">تهيئة تقنية ومحتوى منظم لمحركات البحث</div>
          </div>
          <div className="border-r border-neutral-200 pr-4 space-y-1.5">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-display">Google</div>
            <div className="text-xs text-neutral-600 font-arabic leading-relaxed">إدارة حملات بحث وإعلانات مدفوعة</div>
          </div>
          <div className="border-r border-neutral-200 pr-4 space-y-1.5">
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display">Meta</div>
            <div className="text-xs text-neutral-600 font-arabic leading-relaxed">إعلانات وإدارة حضور على منصات التواصل</div>
          </div>
          <div className="border-r border-neutral-200 pr-4 space-y-1.5">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-display">Mobile</div>
            <div className="text-xs text-neutral-600 font-arabic leading-relaxed">تصميم سريع ومتوافق مع شاشات الهواتف</div>
          </div>
        </div>
      </div>
    </section>
  );
};
