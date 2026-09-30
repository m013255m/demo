import React, { useState } from 'react';
import { ArrowUpLeft, CheckCircle2, ChevronLeft, ShieldCheck, Zap, Target, PhoneCall, MessageCircle } from 'lucide-react';
import heroStudioImg from '../../assets/images/hero_cairo_marketing_studio_1790588128826.jpg';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeSector, setActiveSector] = useState<'ecommerce' | 'b2b' | 'medical' | 'realestate'>('ecommerce');
  const phoneNumber = '01060474659';
  const internationalPhone = '+201060474659';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const sectorData = {
    ecommerce: {
      title: 'المتاجر الإلكترونية والتجزئة',
      channel: 'إعلانات Meta Advantage+ و Google Shopping مع أتمتة الواتساب',
      metric: '٤.٩x',
      metricLabel: 'متوسط العائد على الإنفاق (ROAS)',
      indexing: 'تهيئة للفهرسة لصفحات المنتجات وتقليص مرتجعات الشحن COD لأقل من ١٠٪',
      recommendedService: '/services/ecommerce-marketing',
    },
    b2b: {
      title: 'الشركات والتوريدات التجارية B2B',
      channel: 'إعلانات البحث الدقيقة في جوجل (Exact Match) مع تصدر الـ SEO',
      metric: '+١٨٤٪',
      metricLabel: 'زيادة طلبات عروض الأسعار والتعاقدات',
      indexing: 'ظهور رسمي في أول ٣ نتائج بحث تجارية لجوجل خلال ٩٠ يوماً',
      recommendedService: '/services/google-ads',
    },
    medical: {
      title: 'المراكز الطبية والعيادات',
      channel: 'إعلانات الاتصال المباشر (Call Ads) وتصدر خرائط جوجل Google Maps',
      metric: '٣.٨x',
      metricLabel: 'مضاعفة الحجوزات المؤكدة شهرياً',
      indexing: 'تصدر نتائج البحث المحلي (Local SEO 3-Pack) في القاهرة والجيزة والرياض',
      recommendedService: '/services/seo',
    },
    realestate: {
      title: 'العقارات والتشطيبات الفاخرة',
      channel: 'حملات تجميع بيانات العملاء المؤهلين (High-Intent Leads) على انستجرام وميتا',
      metric: '-٣٤٪',
      metricLabel: 'خفض في تكلفة العميل الجاد للشراء',
      indexing: 'صفحات هبوط فائقة السرعة ترفع معدل تسجيل البيانات والاتصال المباشر',
      recommendedService: '/services/performance-marketing',
    },
  };

  const currentSector = sectorData[activeSector];

  return (
    <section className="relative overflow-hidden border-b border-neutral-200/80 bg-gradient-to-b from-amber-50/30 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Ambient Subtle Warm Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-emerald-400/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Column: Proposition & Authority Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker with geographic and domain signals */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500 font-arabic">
              <span className="text-amber-600 font-bold tracking-wide">شركة ديمو (Demo)</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>وكالة متخصصة في التسويق الرقمي والدعاية والإعلان</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-neutral-700 font-medium">القاهرة، الخليج العربي، والشرق الأوسط</span>
            </div>

            {/* Exactly One Clear H1 in High Quality Arabic with Perfect Typography */}
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem] font-display leading-[1.2] [text-wrap:balance]">
              نصنع لعلامتك التجارية نمواً رقمياً مضاعفاً وتصدراً موثقاً في محرك بحث جوجل
            </h1>

            {/* Value Proposition */}
            <p className="text-base text-neutral-600 sm:text-lg leading-relaxed max-w-2xl font-arabic">
              نلغي التخمينات والمقاييس الوهمية؛ ونبني لشركتك منظومات تسويق إلكتروني متكاملة ترتكز على نية البحث في جوجل، الإعلانات الممولة الأكثر ربحية على ميتا وتيك توك، وتحسين محركات البحث (SEO) مع تتبع واضح للزيارات والتحويلات بهدف تحسين كفاءة التسويق.
            </p>

            {/* Primary & Secondary Actions with Direct Call Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-neutral-950 shadow-lg shadow-amber-400/25 transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/35 hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                <span>احجز استشارة تسويقية وتدقيقاً مجانياً</span>
                <ArrowUpLeft className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:-translate-x-1" />
              </a>

              <a
                href={`tel:${internationalPhone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 sm:px-6 py-3.5 sm:py-4 text-sm font-bold text-neutral-800 transition-colors duration-200 hover:border-neutral-400 hover:bg-neutral-50 shadow-sm"
              >
                <PhoneCall className="h-4 w-4 shrink-0 text-amber-600" />
                <span className="font-arabic">اتصل بنا مباشرة:</span>
                <span dir="ltr" className="font-mono">{phoneNumber}</span>
              </a>
            </div>

            {/* Verification Signals (Strictly Unboxed) */}
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-600 font-arabic">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                <span>تهيئة تقنية قوية للزحف والفهرسة</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
                <span>ملكية إدارية ١٠٠٪ لحساباتك وبياناتك</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-600 shrink-0" />
                <span>خبرة عميقة بأسواق مصر والدول العربية</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Studio & Live Interactive Sector Strategy Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Visual Studio Card */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/50 transition-all duration-300 hover:border-neutral-300">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={heroStudioImg}
                  alt="فريق عمل شركة ديمو للتسويق الإلكتروني يدير حملات النمو والأرشفة"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  width="720"
                  height="450"
                />
              </div>

              {/* Status Verification Badge */}
              <div className="border-t border-neutral-100 bg-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-3 w-3 relative shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900 font-arabic">فريق التخطيط الاستراتيجي جاهز</div>
                    <div className="text-[11px] text-neutral-500 font-arabic">استشارات وتحليلات مباشرة لنشاطك التجاري</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-amber-600 font-display shrink-0">
                  Demo Agency
                </div>
              </div>
            </div>

            {/* Interactive Strategy Selector Widget for Clients */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 space-y-4 shadow-xl shadow-neutral-200/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 shrink-0 text-amber-600" />
                  <span className="text-xs font-bold text-neutral-900 font-arabic">خطة النمو الموصى بها حسب تخصصك:</span>
                </div>
                <span className="text-[11px] text-neutral-500 font-arabic hidden sm:inline">اختر مجالك للتجربة</span>
              </div>

              {/* Sector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-neutral-100 rounded-xl border border-neutral-200/70">
                <button
                  type="button"
                  onClick={() => setActiveSector('ecommerce')}
                  className={`px-2 py-1.5 text-xs font-medium rounded-lg transition-all font-arabic ${
                    activeSector === 'ecommerce'
                      ? 'bg-white text-neutral-950 font-bold shadow-sm ring-1 ring-neutral-200'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  متاجر رقمية
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSector('b2b')}
                  className={`px-2 py-1.5 text-xs font-medium rounded-lg transition-all font-arabic ${
                    activeSector === 'b2b'
                      ? 'bg-white text-neutral-950 font-bold shadow-sm ring-1 ring-neutral-200'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  شركات B2B
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSector('medical')}
                  className={`px-2 py-1.5 text-xs font-medium rounded-lg transition-all font-arabic ${
                    activeSector === 'medical'
                      ? 'bg-white text-neutral-950 font-bold shadow-sm ring-1 ring-neutral-200'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  عيادات ومراكز
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSector('realestate')}
                  className={`px-2 py-1.5 text-xs font-medium rounded-lg transition-all font-arabic ${
                    activeSector === 'realestate'
                      ? 'bg-white text-neutral-950 font-bold shadow-sm ring-1 ring-neutral-200'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  عقارات ومقاولات
                </button>
              </div>

              {/* Dynamic Sector Insight */}
              <div className="space-y-2 text-xs font-arabic pt-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-100 pb-2 gap-1">
                  <span className="text-neutral-500 font-medium shrink-0">القناة الإعلانية الأساسية:</span>
                  <span className="font-semibold text-neutral-900">{currentSector.channel}</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500 font-medium">{currentSector.metricLabel}:</span>
                  <span className="text-lg font-bold text-amber-600 font-display tabular-nums shrink-0">{currentSector.metric}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 gap-1">
                  <span className="text-neutral-500 font-medium shrink-0">الأرشفة والظهور:</span>
                  <span className="text-emerald-700 font-semibold">{currentSector.indexing}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
