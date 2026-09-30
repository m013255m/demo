import React from 'react';
import { SeoHead } from '../components/seo/SeoHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ContactForm } from '../components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, Globe, MessageCircle } from 'lucide-react';
import { SITE_URL, CONTACT_EMAIL } from '../config/site';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const phoneNumber = '01060474659';
  const internationalPhone = '+201060474659';

  const breadcrumbs = [
    { name: 'الرئيسية', url: '/' },
    { name: 'تواصل معنا', url: '/contact' },
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'تواصل مع شركة ديمو (Demo) | وكالة تسويق رقمي في مصر والدول العربية',
    description: 'تواصل مع خبراء شركة ديمو للتسويق الإلكتروني. احجز جلسة استشارية لتحليل نشاطك التجاري ومضاعفة مبيعاتك في مصر والخليج العربي.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'AdvertisingAgency',
      name: 'شركة ديمو للتسويق الإلكتروني والدعاية والإعلان (Demo)',
      telephone: '+20 106 047 4659',
      email: CONTACT_EMAIL,
    },
  };

  return (
    <>
      <SeoHead
        title="تواصل مع شركة ديمو (Demo) | وكالة تسويق رقمي في مصر والدول العربية"
        description="تواصل مع خبراء شركة ديمو للتسويق الإلكتروني. احجز جلسة استشارية لتحليل نشاطك التجاري ومضاعفة مبيعاتك في مصر والخليج العربي على الرقم 01060474659."
        canonicalPath="/contact"
        schema={contactSchema}
      />

      <div className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

          {/* Page Header */}
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
              تواصل مباشر مع كبار الخبراء
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl font-display leading-[1.2]">
              احجز جلسة استشارية وتدقيقاً تسويقياً مجانياً لشركتك
            </h1>
            <p className="text-base text-neutral-600 sm:text-lg leading-relaxed font-arabic">
              تحدث مباشرة مع فريق التخطيط الاستراتيجي في شركة ديمو. سنقوم بمراجعة أداء موقعك، حساباتك الإعلانية، ونقاط القوة لدى منافسيك، ونقدم لك خطة نمو واضحة تركز على تحسين العائد الاستثماري.
            </p>
          </div>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Physical Cairo Presence (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-8 space-y-6 shadow-sm">
                <h2 className="text-lg font-bold text-neutral-900 font-display">
                  بيانات التواصل
                </h2>

                <div className="space-y-5 text-xs text-neutral-700 font-arabic">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-neutral-900 mb-0.5">نطاق العمل:</div>
                      <p className="text-neutral-600 leading-relaxed">
                        خدمة عن بُعد من مصر، مع اجتماعات أونلاين للعملاء في مصر والدول العربية.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-neutral-900 mb-0.5">النطاق والأسواق المخدومة:</div>
                      <p className="text-neutral-600 leading-relaxed">
                        جمهورية مصر العربية، المملكة العربية السعودية، الإمارات، الكويت، قطر، سلطنة عمان، والبحرين.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-neutral-900 mb-0.5">الاتصال الهاتفي والهاتف المباشر:</div>
                      <a href={`tel:${internationalPhone}`} className="text-neutral-900 font-mono font-bold hover:text-amber-700" dir="ltr">
                        {phoneNumber} (20+)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-neutral-900 mb-0.5">واتساب الإدارة المباشر:</div>
                      <a
                        href={`https://wa.me/201060474659?text=${encodeURIComponent('مرحباً شركة ديمو، أود استشارة حول خدماتكم.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline font-mono"
                        dir="ltr"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-neutral-900 mb-0.5">البريد الإلكتروني للشركات:</div>
                      <p className="text-neutral-600" dir="ltr">growth@demoagency.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-neutral-900 mb-0.5">ساعات العمل الرسمية:</div>
                      <p className="text-neutral-600">
                        من الأحد إلى الخميس: ٩:٠٠ صباحاً – ٦:٠٠ مساءً (بتوقيت القاهرة والرياض)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strict Zero-Spam Assurance */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 flex items-start gap-3 text-xs text-neutral-700 font-arabic shadow-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-neutral-900 block">حماية وخصوصية تامة للبيانات</span>
                  <p className="text-neutral-600 leading-relaxed">
                    نحن نحترم وقتك ونلتزم باتفاقيات سرية البيانات (NDA). لن تتعرض لأي اتصالات عشوائية متطفلة؛ فقط تواصل مهني متخصص مع خبير تسويقي يراجع مشروعك بدقة.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-xl shadow-neutral-200/50">
              <div className="mb-6 space-y-1">
                <h2 className="text-xl font-bold text-neutral-900 font-display">
                  نموذج طلب الاستشارة والتدقيق المجاني
                </h2>
                <p className="text-xs text-neutral-500 font-arabic">
                  املأ البيانات التالية وسيقوم خبير النمو بدراسة موقعك والتواصل معك خلال ساعتي عمل.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
