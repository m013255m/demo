import React from 'react';
import { ArrowUpLeft, ShieldCheck, MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services-data';
import { BLOG_POSTS } from '../../data/blog-data';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenDiagnostics: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDiagnostics }) => {
  const phoneNumber = '01060474659';
  const internationalPhone = '+201060474659';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 text-neutral-600">
      {/* Upper Footer: Core Value & Contact */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Market Position */}
          <div className="lg:col-span-2 space-y-6">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block transition-opacity hover:opacity-90"
              title="ديمو (Demo) - وكالة التسويق الرقمي والدعاية والإعلان وتصدر محركات البحث"
            >
              <BrandLogo variant="full" theme="light" />
            </a>

            <p className="text-sm leading-relaxed text-neutral-600 max-w-md font-arabic">
              وكالة رائدة ومصنفة لتسويق الشركات والمؤسسات الكبرى والمتاجر الإلكترونية في مصر والدول العربية. نجمع بين استراتيجيات التسويق الرقمي المبنية على العائد الاستثماري (ROAS)، وإدارة إعلانات Google و Meta باحترافية، وخطط متخصصة تحسين محركات البحث وتحسين محركات البحث التقني والدلالي لضمان تصدر نشاطك التجاري.
            </p>

            <div className="space-y-3 text-xs text-neutral-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">نطاق العمل: مبنى الأعمال، خدمة عن بُعد من مصر مع إمكانية خدمة العملاء في مختلف الدول العربية</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-amber-600 shrink-0" />
                <span>نطاق التغطية: جمهورية مصر العربية، المملكة العربية السعودية، الإمارات، والكويت</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-600 shrink-0" />
                <a href={`tel:${internationalPhone}`} dir="ltr" className="hover:text-amber-700 font-bold transition-colors font-mono">
                  {phoneNumber} (20+)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <a
                  href={`https://wa.me/201060474659?text=${encodeURIComponent('مرحباً شركة ديمو للتسويق، أود استشارة حول خدماتكم.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 font-bold transition-colors text-emerald-700"
                >
                  واتساب الإدارة: {phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-600 shrink-0" />
                <a href="mailto:contact@demoagency.com" className="hover:text-neutral-900 transition-colors">
                  contact@demoagency.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Pages Index Column 1 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4 font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>إعلانات وتسويق الأداء</span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_DATA.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/services/${service.slug}`}
                    onClick={(e) => handleLinkClick(e, `/services/${service.slug}`)}
                    className="hover:text-amber-600 transition-colors block py-0.5 text-neutral-600"
                  >
                    {service.arabicTitle.split(' - ')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Pages Index Column 2 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4 font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>سيو، هوية وبرمجة</span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_DATA.slice(7).map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/services/${service.slug}`}
                    onClick={(e) => handleLinkClick(e, `/services/${service.slug}`)}
                    className="hover:text-amber-600 transition-colors block py-0.5 text-neutral-600"
                  >
                    {service.arabicTitle.split(' - ')[0]}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/services"
                  onClick={(e) => handleLinkClick(e, '/services')}
                  className="inline-flex items-center gap-1 font-bold text-amber-600 hover:text-amber-700"
                >
                  <span>كافة خدمات الوكالة الـ 13</span>
                  <ArrowUpLeft className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Editorial Articles / Research */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4 font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>أدلة السيو وتصدر جوجل</span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              {BLOG_POSTS.slice(0, 6).map((post) => (
                <li key={post.slug}>
                  <a
                    href={`/blog/${post.slug}`}
                    onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                    className="hover:text-amber-600 transition-colors line-clamp-1 py-0.5 text-neutral-600"
                    title={post.arabicTitle || post.title}
                  >
                    {post.arabicTitle ? post.arabicTitle.split('؟')[0] + '؟' : post.title.split(':')[0]}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/blog"
                  onClick={(e) => handleLinkClick(e, '/blog')}
                  className="inline-flex items-center gap-1 font-bold text-amber-600 hover:text-amber-700"
                >
                  <span>مركز أبحاث ودراسات النمو</span>
                  <ArrowUpLeft className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical SEO, Crawlability & Legal Row */}
        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-neutral-700 font-medium">© {new Date().getFullYear()} شركة ديمو للتسويق الرقمي والدعاية والإعلان (Demo). جميع الحقوق محفوظة.</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>القاهرة - مصر والدول العربية</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-amber-600 underline underline-offset-2"
            >
              خريطة الموقع XML Sitemap
            </a>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-amber-600 underline underline-offset-2"
            >
              ملف الزحف Robots.txt
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenDiagnostics}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-neutral-100 text-neutral-700 hover:text-neutral-950 transition-all border border-neutral-200 cursor-pointer text-xs shadow-sm"
              title="فحص جودة السيو، الأرشفة، والبيانات المنظمة لصفحات الموقع"
            >
              <ShieldCheck className="h-4 w-4 text-amber-600" />
              <span>لوحة فحص SEO وبيانات Schema</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
