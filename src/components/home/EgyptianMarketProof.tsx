import React from 'react';
import { ArrowUpLeft, ShieldCheck, MapPin } from 'lucide-react';
import teamImg from '../../assets/images/team_creative_campaign_1790588153887.jpg';

interface EgyptianMarketProofProps {
  onNavigate: (path: string) => void;
}

export const EgyptianMarketProof: React.FC<EgyptianMarketProofProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const proofPoints = [
    {
      clientType: 'شركة توريدات ومعدات صناعية كبرى (B2B)',
      location: 'القاهرة الجديدة ومدينة العاشر من رمضان',
      metric: '+١٨٤٪',
      metricLabel: 'زيادة في عروض الأسعار واستفسارات التعاقد',
      outcome: 'تصميم موقع كتالوج سريع مع حملات بحث جوجل محددة بدقة واستبعاد الكلمات غير المجدية، مما خفض تكلفة العميل بنسبة ٣١٪ وجلب أكثر من ٤٢٠ طلب توريد مؤكد.',
      serviceLinked: '/services/google-ads',
      serviceName: 'إعلانات جوجل'
    },
    {
      clientType: 'علامة تجارية كبرى للأحذية والمنتجات الجلدية',
      location: 'تغطية شحن لكافة محافظات مصر والخليج',
      metric: '٣,٢٠٠ طلب',
      metricLabel: 'أوردر شهري مع تقليص المرتجعات لأقل من ١١٪',
      outcome: 'تطبيق منظومة التأكيد الفوري للطلبات عبر واتساب مع إعلانات Advantage+ Shopping على ميتا، مما رفع المبيعات وقضى على أزمة رفض استلام الشحنات.',
      serviceLinked: '/services/ecommerce-marketing',
      serviceName: 'تسويق المتاجر الإلكترونية'
    },
    {
      clientType: 'مجمع عيادات ومراكز تشخيص طبية تخصصية',
      location: 'الجيزة والشيخ زايد والرياض',
      metric: '٣.٨x',
      metricLabel: 'مضاعفة الحجوزات الطبية المؤكدة خلال ٩٠ يوماً',
      outcome: 'استهداف كلمات البحث الطبية العاجلة في جوجل وتتصدر نتائج خرائط جوجل (Google Maps 3-Pack)، مما ولد اتصالات هاتفية يومية مباشرة للمركز.',
      serviceLinked: '/services/seo',
      serviceName: 'السيو وتصدر نتائج جوجل'
    }
  ];

  return (
    <section className="relative border-b border-neutral-200 bg-neutral-50/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 font-arabic">
            نتائج تجارية حقيقية وموثقة بالأرقام
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.6rem] font-display leading-[1.25] [text-wrap:balance]">
            تأثير مالي ملموس لشركائنا في مصر ومختلف الدول العربية
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed font-arabic">
            نشاركك أرقاماً ونتائج فعلية تعكس نمو أرباح عملائنا؛ بدون مبالغات تسويقية، وبأدلة إثبات واضحة من واقع السوق المصري والعربي.
          </p>
        </div>

        {/* 3 Strict Metric Case Studies in Crisp Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofPoints.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-neutral-200 bg-white p-7 flex flex-col justify-between transition-all duration-300 hover:border-amber-400/60 hover:shadow-xl hover:shadow-neutral-200/60"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-arabic">
                  <span className="font-semibold text-neutral-700">{item.clientType}</span>
                  <div className="flex items-center gap-1 text-amber-600 font-medium">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="py-3 border-y border-neutral-100">
                  <div className="text-4xl font-extrabold text-amber-600 font-display tabular-nums tracking-tight">
                    {item.metric}
                  </div>
                  <div className="text-xs font-bold text-neutral-800 mt-1 font-arabic">
                    {item.metricLabel}
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-neutral-600 font-arabic">
                  {item.outcome}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-arabic">الخدمة: {item.serviceName}</span>
                <a
                  href={item.serviceLinked}
                  onClick={(e) => handleLinkClick(e, item.serviceLinked)}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>استكشف الاستراتيجية</span>
                  <ArrowUpLeft className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Image & Strategic Commitment */}
        <div className="mt-16 rounded-2xl border border-neutral-200 bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-xl shadow-neutral-200/50">
          <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 font-arabic">
              <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
              <span>معايير جوجل الرسمية Google Search Essentials</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-neutral-600 font-normal">أرشفة آمنة بنسبة ١٠٠٪</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display leading-tight">
              لا نستخدم أي ممارسات سبام أو أساليب احتيالية قد تعرض موقعك للحظر
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 font-arabic">
              نلتزم التزاماً صارماً بأخلاقيات التسويق الأبيض (White-Hat). لا نشتري روابط وهمية، ولا نحشو كلمات مكررة، ولا نقدم وعوداً خيالية غير ممكنة. ما نبنيه لموقعك هو أصل تجاري رقمي متين يزداد قوة وأرباحاً مع مرور الوقت ويحظى بثقة جوجل الكاملة.
            </p>
            <div className="pt-2">
              <a
                href="/about"
                onClick={(e) => handleLinkClick(e, '/about')}
                className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3.5 text-xs font-bold text-white hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <span>تعرف على منهجية وفريق عمل ديمو</span>
                <ArrowUpLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 aspect-[16/10] overflow-hidden">
            <img
              src={teamImg}
              alt="فريق التخطيط الاستراتيجي في وكالة ديمو للتسويق الرقمي"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              width="640"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
