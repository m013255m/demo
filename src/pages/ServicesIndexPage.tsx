import React, { useState } from 'react';
import { SeoHead } from '../components/seo/SeoHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SERVICES_DATA } from '../data/services-data';
import { ArrowUpLeft, Search, BarChart3, Film, ShoppingBag, Layers, MessageSquare, Palette, Cpu, Sparkles, Target } from 'lucide-react';

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const breadcrumbs = [
    { name: 'الرئيسية', url: '/' },
    { name: 'خدمات الوكالة', url: '/services' },
  ];

  const categories = [
    { id: 'all', label: 'كافة الخدمات (١٣)' },
    { id: 'ads', label: 'إعلانات وتسويق أداء' },
    { id: 'seo', label: 'سيو وأرشفة محركات البحث' },
    { id: 'creative', label: 'إبداع، محتوى وهوية' },
    { id: 'tech', label: 'برمجة ومتاجر رقمية' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ads') {
      return ['facebook-ads', 'instagram-ads', 'google-ads', 'performance-marketing', 'social-media-marketing'].includes(service.slug);
    }
    if (selectedFilter === 'seo') {
      return ['seo', 'digital-marketing'].includes(service.slug);
    }
    if (selectedFilter === 'creative') {
      return ['content-marketing', 'graphic-design', 'video-production', 'social-media-management'].includes(service.slug);
    }
    if (selectedFilter === 'tech') {
      return ['web-design', 'ecommerce-marketing'].includes(service.slug);
    }
    return true;
  });

  const servicesCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'خدمات التسويق الإلكتروني والإعلانات الممولة والأرشفة | شركة ديمو',
    description: 'استكشف خدمات شركة ديمو المتكاملة: سيو SEO، إعلانات جوجل، إعلانات فيسبوك وانستجرام، تسويق المتاجر الإلكترونية، إنتاج الفيديو وتصميم المواقع السريعة.',
    url: 'https://demo-seven-indol-67.vercel.app/services',
    hasPart: SERVICES_DATA.map((service) => ({
      '@type': 'Service',
      name: service.arabicTitle || service.title,
      url: `https://demo-seven-indol-67.vercel.app/services/${service.slug}`,
      description: service.metaDescription,
      provider: {
        '@type': 'AdvertisingAgency',
        name: 'شركة ديمو للتسويق الرقمي والدعاية والإعلان (Demo)',
      },
    })),
  };

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'seo':
      case 'google-ads':
        return <Search className="h-5 w-5 text-amber-600" />;
      case 'facebook-ads':
      case 'instagram-ads':
      case 'social-media-marketing':
        return <BarChart3 className="h-5 w-5 text-amber-600" />;
      case 'ecommerce-marketing':
        return <ShoppingBag className="h-5 w-5 text-amber-600" />;
      case 'web-design':
        return <Cpu className="h-5 w-5 text-amber-600" />;
      case 'video-production':
        return <Film className="h-5 w-5 text-amber-600" />;
      case 'graphic-design':
        return <Palette className="h-5 w-5 text-amber-600" />;
      case 'social-media-management':
        return <MessageSquare className="h-5 w-5 text-amber-600" />;
      case 'performance-marketing':
        return <Target className="h-5 w-5 text-amber-600" />;
      default:
        return <Layers className="h-5 w-5 text-amber-600" />;
    }
  };

  return (
    <>
      <SeoHead
        title="خدمات التسويق الإلكتروني والإعلانات الممولة والأرشفة | شركة ديمو"
        description="استكشف خدمات شركة ديمو المتكاملة: سيو SEO، إعلانات جوجل، إعلانات فيسبوك وانستجرام، تسويق المتاجر الإلكترونية، إنتاج الفيديو وتصميم المواقع السريعة."
        canonicalPath="/services"
        schema={servicesCollectionSchema}
      />

      <div className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

          {/* Page Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 border-b border-amber-500/40 pb-1 text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>دليل الخدمات الشامل لهندسة النمو الرقمي</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl font-display leading-[1.2]">
              خدمات التسويق الإلكتروني والإعلانات الممولة والأرشفة في مصر والوطن العربي
            </h1>
            <p className="text-base text-neutral-600 sm:text-lg leading-relaxed font-arabic">
              ١٣ خدمة متخصصة مصممة بعناية لتغطية كافة مراحل نمو شركتك: من التصدر في الصفحة الأولى لجوجل وحتى إدارة الحملات الإعلانية المربحة وتطوير المتاجر الرقمية السريعة.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-neutral-200 pb-4">
            {categories.map((cat) => {
              const isActive = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-4 py-2 text-xs font-bold font-arabic rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20'
                      : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/70 border border-neutral-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:border-amber-400/60 hover:shadow-xl hover:shadow-neutral-200/60"
              >
                <div className="space-y-4">
                  {/* Top Bar: Category & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-700 font-arabic tracking-wider uppercase">
                      {service.category}
                    </span>
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.slug)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-neutral-900 font-display group-hover:text-amber-600 transition-colors">
                      {service.arabicTitle || service.title}
                    </h2>
                    <p className="text-xs text-neutral-600 leading-relaxed font-arabic line-clamp-3">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Key Deliverables Highlights */}
                  <div className="pt-3 border-t border-neutral-100 space-y-2 text-xs text-neutral-500 font-arabic">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 line-clamp-1">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-arabic">
                    {service.searchIntent === 'Commercial' ? 'حلول نمو تجاري' : 'خدمات استراتيجية'}
                  </span>
                  <a
                    href={`/services/${service.slug}`}
                    onClick={(e) => handleLinkClick(e, `/services/${service.slug}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    <span>خطة وتفاصيل الخدمة</span>
                    <ArrowUpLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-neutral-200/40">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl font-bold text-neutral-900 font-display">
                غير متأكد أي المجموعات التسويقية أنسب لنشاطك التجاري حالياً؟
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-arabic">
                تواصل معنا الآن وسيقوم استراتيجي التسويق والأداء بدراسة وضعك الحالي واقتراح المزيج الإعلاني الأكثر فاعلية لتحقيق عائد استثماري قابل للقياس لنشاطك.
              </p>
            </div>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3.5 text-xs font-bold text-neutral-950 hover:bg-amber-300 transition-all hover:scale-105 active:scale-95 sm:whitespace-nowrap shadow-md shadow-amber-400/20"
            >
              <span>احجز استشارة لتحديد الخدمات المناسبة</span>
              <ArrowUpLeft className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
