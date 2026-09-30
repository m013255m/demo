import React from 'react';
import { ServiceDetail } from '../types/seo';
import { SeoHead } from '../components/seo/SeoHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FaqSection } from '../components/home/FaqSection';
import { SERVICES_DATA } from '../data/services-data';
import { BLOG_POSTS } from '../data/blog-data';
import { CheckCircle2, ArrowUpLeft, ChevronLeft, PhoneCall } from 'lucide-react';
import strategyDeskImg from '../assets/images/marketing_strategy_desk_1790588165905.jpg';
import { SITE_URL } from '../config/site';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const serviceName = service.arabicTitle || service.title;
  const phoneNumber = '01060474659';
  const internationalPhone = '+201060474659';

  const breadcrumbs = [
    { name: 'الرئيسية', url: '/' },
    { name: 'الخدمات', url: '/services' },
    { name: serviceName, url: `/services/${service.slug}` },
  ];

  // Resolve related services and articles
  const relatedServices = SERVICES_DATA.filter((s) => service.relatedServicesSlugs.includes(s.slug));
  const relatedArticles = BLOG_POSTS.filter((b) => service.relatedArticlesSlugs.includes(b.slug));

  // Service Schema.org JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: service.category,
    provider: {
      '@type': 'AdvertisingAgency',
      name: 'شركة ديمو للتسويق الإلكتروني (Demo)',
      url: `${SITE_URL}/`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'خدمة عن بُعد من مصر',
        addressLocality: 'القاهرة',
        addressRegion: 'محافظة القاهرة',
        addressCountry: 'EG',
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Kuwait' },
    ],
    description: service.metaDescription,
  };

  return (
    <>
      <SeoHead
        title={`${serviceName} | شركة ديمو`}
        description={service.metaDescription}
        canonicalPath={`/services/${service.slug}`}
        schema={serviceSchema}
      />

      <article className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

          {/* Section 1: Hero & H1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                <span>{service.category}</span>
                <span className="text-neutral-300">·</span>
                <span className="text-neutral-600">خدمة متخصصة ضمن حلول ديمو</span>
              </div>

              {/* Unique H1 */}
              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl font-display leading-[1.2]">
                {serviceName}
              </h1>

              <p className="text-base text-neutral-600 sm:text-lg leading-relaxed font-arabic max-w-3xl">
                {service.tagline}
              </p>

              {/* Keyword Association Badge (Unboxed clean text) */}
              <div className="pt-2 text-xs text-neutral-500 font-arabic">
                <span className="text-amber-700 font-bold">الاستهداف الرئيسي:</span>{' '}
                <span className="text-neutral-800 font-medium">{service.primaryKeywordArabic}</span>
                {service.secondaryKeywords.length > 0 && (
                  <span className="text-neutral-500">
                    {' '}| كلمات مكملة: {service.secondaryKeywords.slice(0, 2).join('، ')}
                  </span>
                )}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3.5 text-sm font-bold text-neutral-950 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
                >
                  <span>طلب عرض سعر واستشارة لهذه الخدمة</span>
                  <ArrowUpLeft className="h-4 w-4" />
                </a>

                <a
                  href={`tel:${internationalPhone}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3.5 text-sm font-bold text-neutral-800 hover:bg-neutral-50 transition-colors shadow-sm font-mono"
                >
                  <PhoneCall className="h-4 w-4 text-amber-600" />
                  <span dir="ltr">{phoneNumber}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/50">
                <img
                  src={strategyDeskImg}
                  alt={`تخطيط استراتيجية ${serviceName} في مصر والخليج`}
                  loading="eager"
                  className="h-full w-full object-cover aspect-[4/3]"
                  width="480"
                  height="360"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Problem & Solution Framing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-neutral-200 py-12">
            <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-700 font-arabic">
                التحدي والمشكلة التجارية الشائعة
              </div>
              <h2 className="text-xl font-bold text-neutral-900 font-display">
                لماذا تفشل معظم الحملات في تحقيق عائد؟
              </h2>
              <p className="text-sm leading-relaxed text-neutral-700 font-arabic">
                {service.problemStatement}
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-arabic">
                الحل الاستراتيجي من وكالة ديمو
              </div>
              <h2 className="text-xl font-bold text-neutral-900 font-display">
                منظومتنا القائمة على البيانات والأرباح
              </h2>
              <p className="text-sm leading-relaxed text-neutral-700 font-arabic">
                {service.solutionStatement}
              </p>
            </div>
          </div>

          {/* Section 3: Deliverables */}
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                مخرجات العمل وما يشمله العقد
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display">
                ما ستحصل عليه بالضبط مع فريق ديمو
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 space-y-3 shadow-sm hover:border-amber-400/60 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-800 text-xs font-bold font-display">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 font-arabic">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-neutral-600 font-arabic pr-10">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: 4-Step Process */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-8 lg:p-12 space-y-8">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                منهجية التنفيذ خطوة بخطوة
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display">
                كيف ننفذ الحملات لضمان جودة وسرعة مناسبة؟
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="text-3xl font-extrabold text-amber-600 font-display">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 font-arabic">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-arabic">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Benefits & Suitability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Commercial Benefits */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                المزايا التنافسية
              </div>
              <h2 className="text-xl font-bold text-neutral-900 font-display">
                العوائد المباشرة على نشاطك التجاري
              </h2>
              <ul className="space-y-3 pt-2">
                {service.businessBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-neutral-700 font-arabic">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suitability */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                لمن تناسب هذه الخدمة؟
              </div>
              <h2 className="text-xl font-bold text-neutral-900 font-display">
                الأنشطة التي تحقق أعلى عائد من هذه الخدمة
              </h2>
              <ul className="space-y-3 pt-2">
                {service.suitableFor.map((target, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-neutral-700 font-arabic">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 6: Market Relevance */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 space-y-4 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
              ملاءمة السوق المصري والأسواق العربية
            </div>
            <h3 className="text-lg font-bold text-neutral-900 font-display">
              تطبيق عملي يراعي عادات وسلوك المستهلك العربي
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 font-arabic">
              {service.egyptianMarketRelevance}
            </p>
          </div>

          {/* Section 7: FAQs with Schema */}
          {service.faqs.length > 0 && (
            <FaqSection
              title={`الأسئلة الشائعة حول ${serviceName}`}
              subtitle="إجابات صريحة ومباشرة حول التكاليف وطريقة التنفيذ والنتائج المتوقعة."
              items={service.faqs}
              enableSchema={true}
            />
          )}

          {/* Section 8: Related Services & Articles Mesh */}
          <div className="border-t border-neutral-200 pt-12 space-y-8">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                خدمات ومقالات تكميلية
              </div>
              <h2 className="text-xl font-bold text-neutral-900 font-display">
                خدمات تدعم نجاح هذه المنظومة
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relService) => (
                <a
                  key={relService.slug}
                  href={`/services/${relService.slug}`}
                  onClick={(e) => handleLinkClick(e, `/services/${relService.slug}`)}
                  className="group rounded-2xl border border-neutral-200 bg-white p-5 transition-all hover:border-amber-400/60 hover:shadow-md block space-y-2 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-700 font-arabic">{relService.category}</span>
                    <ArrowUpLeft className="h-4 w-4 text-neutral-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 group-hover:text-amber-600 transition-colors font-arabic">
                    {relService.arabicTitle || relService.title}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 font-arabic">
                    {relService.tagline}
                  </p>
                </a>
              ))}
            </div>

            {/* Related Blog Posts */}
            {relatedArticles.length > 0 && (
              <div className="pt-6 space-y-4">
                <h3 className="text-sm font-bold text-neutral-800 font-arabic">
                  مقالات وأدلة استراتيجية مرتبطة بهذه الخدمة:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedArticles.map((article) => (
                    <a
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      onClick={(e) => handleLinkClick(e, `/blog/${article.slug}`)}
                      className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-4 hover:border-amber-400/60 transition-all shadow-sm"
                    >
                      <div className="space-y-1 pr-2">
                        <span className="text-[11px] font-bold text-amber-700 font-arabic">{article.category}</span>
                        <h4 className="text-xs font-bold text-neutral-900 group-hover:text-amber-600 transition-colors font-arabic">
                          {article.arabicTitle || article.title}
                        </h4>
                      </div>
                      <ChevronLeft className="h-4 w-4 text-neutral-400 group-hover:text-amber-600 shrink-0 transition-transform group-hover:-translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Section 9: Bottom CTA */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-8 sm:p-12 text-center space-y-6 shadow-md shadow-neutral-200/50">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display">
              هل أنت جاهز لتطبيق هذه الخدمة ومضاعفة مبيعاتك؟
            </h2>
            <p className="text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed font-arabic">
              احجز جلستك الاستشارية المجانية مع كبير استراتيجيي شركة ديمو لتحليل وضع مشروعك ووضع خطة عمل فورية.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-sm font-bold text-neutral-950 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
              >
                <span>احجز استشارة مجانية مع فريق الخبراء</span>
                <ArrowUpLeft className="h-4 w-4" />
              </a>

              <a
                href={`tel:${internationalPhone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-4 text-sm font-bold text-neutral-800 hover:bg-neutral-100 transition-colors shadow-sm font-mono"
              >
                <PhoneCall className="h-4 w-4 text-amber-600" />
                <span>اتصل هاتفياً: {phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
