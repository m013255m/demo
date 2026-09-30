import React from 'react';
import { SeoHead } from '../components/seo/SeoHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ShieldCheck, CheckCircle2, Award, Users, MapPin, ArrowUpLeft, Globe, PhoneCall } from 'lucide-react';
import teamImg from '../assets/images/team_creative_campaign_1790588153887.jpg';
import { SITE_URL } from '../config/site';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const phoneNumber = '01060474659';
  const internationalPhone = '+201060474659';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const breadcrumbs = [
    { name: 'الرئيسية', url: '/' },
    { name: 'من نحن', url: '/about' },
  ];

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'عن شركة ديمو للتسويق الإلكتروني والدعاية والإعلان',
    description: 'تعرف على شركة ديمو (Demo): رؤيتنا في التسويق المبني على البيانات والعائد الحقيقي، فريق متخصص يعمل مع العملاء في مصر والدول العربية، والتزامنا بإرشادات جوجل للأرشفة الصارمة.',
    url: `${SITE_URL}/about`,
    mainEntity: {
      '@type': 'AdvertisingAgency',
      name: 'شركة ديمو للتسويق الإلكتروني والدعاية والإعلان (Demo)',
    },
  };

  return (
    <>
      <SeoHead
        title="من نحن | شركة ديمو (Demo) للتسويق الرقمي في مصر والدول العربية"
        description="تعرف على شركة ديمو (Demo): رؤيتنا في التسويق المبني على البيانات والعائد الحقيقي، فريق متخصص يعمل مع العملاء في مصر والدول العربية، والتزامنا بإرشادات جوجل للأرشفة الصارمة."
        canonicalPath="/about"
        schema={aboutSchema}
      />

      <div className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

          {/* Page Header */}
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
              فلسفة ورؤية وكالة ديمو
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl font-display leading-tight">
              نبني شراكات نمو حقيقية ترتكز على البيانات والأرباح الصافية
            </h1>
            <p className="text-base text-neutral-600 sm:text-lg leading-relaxed font-arabic">
              تأسست شركة ديمو (Demo) لمواجهة فوضى التسويق التقليدي والمقاييس الوهمية. نؤمن بأن التسويق الناجح ليس مجرد تصاميم مبهرة أو مشاهدات عابرة، بل هو منظومة تجارية محكمة تحول نية البحث في جوجل والاهتمام في السوشيال ميديا إلى تدفق دائم من العملاء والأرباح.
            </p>
          </div>

          {/* Hero Visual */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/50">
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={teamImg}
                alt="فريق الخبراء والاستراتيجيين في شركة ديمو للتسويق الرقمي"
                loading="eager"
                className="h-full w-full object-cover"
                width="1200"
                height="514"
              />
            </div>
          </div>

          {/* Core Philosophy & Ethical Commitment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 font-display">
                التزامنا الصارم بمعايير جوجل الرسمية (Google Search Essentials)
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 font-arabic">
                في عالم يتسابق فيه البعض لاستخدام حيل الذكاء الاصطناعي الرديئة وشراء الروابط المشبوهة، نلتزم في شركة ديمو بمبادئ السيو الأخلاقي الأبيض (White-Hat SEO). نبني مواقع فائقة السرعة، وننظم البيانات وفق أرقى معايير Schema.org، ونكتب محتوى يلبي متطلبات الخبرة والمصداقية (E-E-A-T).
              </p>
              <p className="text-sm leading-relaxed text-neutral-600 font-arabic">
                هذا الالتزام يحمي موقعك وعلامتك التجارية من أي عقوبات لخوارزميات جوجل، ويضمن لك تحسين مستدام للظهور في البحث.
              </p>

              <div className="space-y-3 pt-2 text-xs text-neutral-700 font-arabic">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>لا نشتري أي روابط خلفية وهمية أو شبكات مواقع خاصة (PBNs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>لا نستخدم حشو الكلمات المفتاحية أو النصوص المخفية على الإطلاق</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>ملكية كاملة وإدارية للحسابات والبيانات للعميل بنسبة 100%</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-amber-600" />
                <h3 className="text-xl font-bold text-neutral-900 font-display">
                  القيم الجوهرية الأربع لشركة ديمو
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm font-arabic mb-1">١. الأولوية للعائد على الاستثمار (ROI First)</h4>
                  <p className="text-neutral-600 leading-relaxed font-arabic">
                    نقيس نجاحنا بنجاحك المالي؛ كل قرار إعلاني أو استثماري يخضع لمعادلة الربحية وتكلفة اكتساب العميل المشتري.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900 text-sm font-arabic mb-1">٢. الشفافية والوضوح المطلق</h4>
                  <p className="text-neutral-600 leading-relaxed font-arabic">
                    لا توجد عمولات خفية على ميزانيات الإعلانات، وتقاريرنا واضحة ومباشرة تخبرك بالحقيقة دون تجميل أو مصطلحات غامضة.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900 text-sm font-arabic mb-1">٣. التفوق الهندسي والتقني</h4>
                  <p className="text-neutral-600 leading-relaxed font-arabic">
                    نوظف أحدث تقنيات الويب والتتبع خادم-إلى-خادم (Server-Side Tracking) لضمان دقة البيانات وسرعة التحميل القياسية.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900 text-sm font-arabic mb-1">٤. الفهم العميق للمستهلك العربي</h4>
                  <p className="text-neutral-600 leading-relaxed font-arabic">
                    نصمم حملاتنا بما يلائم سيكولوجية المشتري في مصر والخليج العربي، ونستغل نقاط القوة المحلية كالواتساب والدفع الفوري.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Senior Leadership */}
          <div className="space-y-8 pt-8 border-t border-neutral-200">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                القيادة والخبرة
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display">
                فريق من كبار الخبراء المتمرسين في السوق المصري والعربي
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 space-y-3 shadow-sm hover:border-neutral-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 font-display">استراتيجيو التسويق والأداء</h3>
                    <p className="text-xs text-amber-700 font-arabic font-semibold">استراتيجيات النمو والأداء (Growth & Performance)</p>
                  </div>
                  <span className="text-xs text-neutral-500 font-arabic">خبرات متعددة</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600 font-arabic">
                  فريق متخصص في بناء استراتيجيات الاستحواذ وإدارة الحملات وتحليل الأداء وفق أهداف النشاط التجاري.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 space-y-3 shadow-sm hover:border-neutral-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 font-display">متخصصو SEO والتقنية</h3>
                    <p className="text-xs text-amber-700 font-arabic font-semibold">تحسين محركات البحث والتقنية (Technical SEO)</p>
                  </div>
                  <span className="text-xs text-neutral-500 font-arabic">خبرات متعددة</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600 font-arabic">
                  متخصص في بنية السيو التقنية والبيانات المنظمة للمواقع الضخمة والمتاجر الإلكترونية. نجح في تصدر أكثر من ٥٠٠ كلمة بحث تنافسية وجلب ملايين الزيارات المجانية للمواقع التي أشرف عليها.
                </p>
              </div>
            </div>
          </div>

          {/* Regional Reach Section */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold font-arabic">
                <Globe className="h-4 w-4 text-amber-600" />
                <span>حضور إقليمي يخدم كافة الدول العربية</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 font-display">
                هل ترغب في مناقشة أهداف شركتك مع خبرائنا؟
              </h3>
              <p className="text-sm text-neutral-600 font-arabic leading-relaxed">
                يسعدنا عقد اجتماع افتراضي عبر زووم أو جوجل ميت لمراجعة نشاطك التجاري.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3.5 text-sm font-bold text-neutral-950 hover:bg-amber-300 transition-all sm:whitespace-nowrap shadow-md shadow-amber-400/20"
              >
                <span>احجز موعد استشارة مع الفريق</span>
                <ArrowUpLeft className="h-4 w-4" />
              </a>

              <a
                href={`tel:${internationalPhone}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-neutral-300 bg-white px-5 py-3.5 text-sm font-bold text-neutral-800 hover:bg-neutral-100 transition-colors font-mono"
              >
                <PhoneCall className="h-4 w-4 text-amber-600" />
                <span>{phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
