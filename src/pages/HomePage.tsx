import React from 'react';
import { SeoHead } from '../components/seo/SeoHead';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { CapabilitiesBento } from '../components/home/CapabilitiesBento';
import { EgyptianMarketProof } from '../components/home/EgyptianMarketProof';
import { FaqSection } from '../components/home/FaqSection';
import { ContactForm } from '../components/contact/ContactForm';
import { ArrowUpLeft, CheckCircle2, MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import cairoSkylineImg from '../assets/images/cairo_business_district_1790588141705.jpg';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const phoneNumber = '01060474659';
  const internationalPhone = '+201060474659';

  const homeFaqs = [
    {
      question: 'ما الذي يجعل شركة ديمو (Demo) مختلفة عن أي شركة تسويق أخرى في مصر؟',
      answer: 'نحن نلغي تماماً المقاييس السطحية مثل عدد المشاهدات والنقرات العشوائية. منظومتنا بالكامل مبرمجة لتحقيق نتائج مالية ملموسة: مكالمات هاتفية مؤكدة، استفسارات B2B مسجلة، وطلبات شراء فعلية في متاجرك. كما تحتفظ شركتك بملكية إدارية كاملة بنسبة 100% لكافة حسابات جوجل وميتا والأكواد البرمجية.'
    },
    {
      question: 'كيف تركز شركة ديمو على أرشفة الموقع في محرك بحث جوجل (SEO)؟',
      answer: 'نضع الأرشفة في قمة أولوياتنا التقنية من اليوم الأول: بناء خرائط مواقع sitemap.xml دقيقة، ضبط ملف robots.txt، إضافة وسوم الكانونيكال النظيفة، كتابة أكواد Schema.org JSON-LD، والتحميل فائق السرعة عبر الهواتف، مما يساعد محركات البحث على اكتشاف الموقع وفهم صفحاته، دون ضمان مدة للفهرسة.'
    },
    {
      question: 'كيف تتم محاسبة ميزانيات الإعلانات الممولة؟',
      answer: 'تدفع شركتك تكاليف الصرف الإعلاني مباشرة لمنصات جوجل وميتا عبر بطاقتك الائتمانية الرسمية بالعملة التي تناسبك دون أي رسوم أو زيادات خفية، وتتقاضى شركة ديمو أتعاب الإدارة والاستراتيجية المتفق عليها بشفافية مطلقة.'
    },
    {
      question: 'هل تقدمون خدماتكم للشركات خارج القاهرة ومصر؟',
      answer: 'نعم بالتأكيد. رغم أن نعمل من مصر عن بُعد، ونخدم ندير حملات تسويقية وتصدر نتائج البحث لكبرى الشركات والمتاجر في الإسكندرية والمنصورة والصعيد، وكذلك في المملكة العربية السعودية، الإمارات، الكويت، قطر، وكافة الدول العربية.'
    }
  ];

  return (
    <>
      <SeoHead
        title="Demo | شركة ديمو للتسويق الإلكتروني والدعاية والإعلان"
        description="شركة ديمو (Demo) المتخصصة في التسويق الإلكتروني، تحسين محركات البحث SEO، وإعلانات جوجل وميتا، وتصميم المواقع في مصر ومختلف الدول العربية."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* Trust & Quantitative Proof Bar */}
      <TrustBar />

      {/* Core Capabilities Bento */}
      <CapabilitiesBento onNavigate={onNavigate} />

      {/* Egyptian & Arab Market Validated Proof */}
      <EgyptianMarketProof onNavigate={onNavigate} />

      {/* Geographic Anchoring & Arab Regional Reach in Light Theme */}
      <section className="border-b border-neutral-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                التواجد الجغرافي والنطاق الإقليمي
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl font-display">
                نعمل من مصر ونخدم العملاء في مصر والدول العربية
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 font-arabic">
                نجمع بين الفهم العميق لثقافة وسلوك المستهلك المصري والخليجي والعربي، وبين تطبيق المعايير العالمية في تتبع البيانات وهندسة النمو الرقمي. سواء كنت شركة ناشئة تبحث عن انطلاقة قوية أو مؤسسة كبرى تسعى لمضاعفة حصتها السوقية، فريق ديمو جاهز لدعمك.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-arabic">نطاق العمل:</strong>
                    <span>خدمة عن بُعد من مصر مع إمكانية خدمة العملاء في مختلف الدول العربية</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Globe className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-arabic">نطاق التغطية:</strong>
                    <span>مصر، السعودية، الإمارات، الكويت، قطر، عمان</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-arabic">الاتصال الهاتفي:</strong>
                    <a href={`tel:${internationalPhone}`} dir="ltr" className="hover:text-amber-700 font-bold font-mono">
                      {phoneNumber} (20+)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MessageCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-arabic">واتساب المباشر:</strong>
                    <a
                      href={`https://wa.me/201060474659?text=${encodeURIComponent('مرحباً شركة ديمو، أود استشارة حول خدماتكم.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-bold font-mono"
                      dir="ltr"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/50">
                <img
                  src={cairoSkylineImg}
                  alt="مقر شركة ديمو للتسويق الإلكتروني بالقاهرة الجديدة يخدم الأسواق العربية"
                  loading="lazy"
                  className="h-full w-full object-cover aspect-[4/3]"
                  width="600"
                  height="450"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with JSON-LD Schema */}
      <FaqSection
        title="الأسئلة الشائعة حول خدمات التسويق والأرشفة في جوجل"
        subtitle="إجابات شفافة حول التكاليف الإعلانية، تصدر محركات البحث، وطرق التعاقد مع شركة ديمو."
        items={homeFaqs}
        enableSchema={true}
      />

      {/* Conversion Section with Form in Light Theme */}
      <section className="bg-neutral-50 py-16 lg:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                ابدأ رحلة النمو اليوم
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl font-display">
                جاهز لمضاعفة مبيعاتك وتصدر محرك بحث جوجل؟
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 font-arabic">
                احجز جلستك الاستشارية المجانية مع كبير استراتيجيي التسويق في ديمو. سنقوم بمراجعة موقعك وحساباتك الإعلانية وتقديم خطة نمو تفصيلية لنشاطك التجاري.
              </p>

              <div className="space-y-3 pt-2 text-xs text-neutral-700 font-arabic">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>تدقيق ومراجعة شاملة لموقعك وحساباتك الإعلانية مجاناً</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>تحديد تكلفة العميل المتوقعة وحجم الطلب على خدماتك في جوجل</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>بدون أي التزامات مالية مسبقة، وشفافية مطلقة ١٠٠٪</span>
                </div>
              </div>

              {/* Direct call banner */}
              <div className="p-4 rounded-xl border border-neutral-200 bg-white shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900 font-arabic">هل تفضل التحدث هاتفياً فوراً؟</div>
                  <div className="text-[11px] text-neutral-500 font-arabic">الرقم المباشر الموحد لفريق العمل:</div>
                </div>
                <a
                  href={`tel:${internationalPhone}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900 text-white text-xs font-bold font-mono hover:bg-neutral-800 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-400" />
                  <span dir="ltr">{phoneNumber}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-200/50">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
