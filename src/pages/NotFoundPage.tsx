import React from 'react';
import { SeoHead } from '../components/seo/SeoHead';
import { Home, Search, BookOpen, Mail } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <>
      <SeoHead
        title="الصفحة غير موجودة (404) | شركة ديمو للتسويق الإلكتروني"
        description="الصفحة المطلوبة غير متوفرة أو تم نقلها. يمكنك تصفح خدمات شركة ديمو للتسويق الإلكتروني أو قراءة مقالات المدونة أو التواصل معنا."
        canonicalPath="/404"
        robots="noindex, nofollow"
      />

      <div className="min-h-[70vh] flex items-center justify-center bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="text-6xl font-extrabold text-amber-600 font-display tabular-nums">
            404
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-neutral-900 font-display">
              عذراً، الصفحة المطلوبة غير موجودة
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-arabic">
              الرابط الذي قمت بطلبه ربما تم نقله أو حذفه. يمكنك استخدام الروابط أدناه للوصول السريع إلى أقسام موقع شركة ديمو.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 text-xs font-arabic">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="p-3.5 rounded-xl border border-neutral-200 bg-white hover:border-amber-400/60 hover:shadow-md text-neutral-800 hover:text-neutral-950 flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Home className="h-4 w-4 text-amber-600" />
              <span>الصفحة الرئيسية</span>
            </a>
            <a
              href="/services"
              onClick={(e) => handleLinkClick(e, '/services')}
              className="p-3.5 rounded-xl border border-neutral-200 bg-white hover:border-amber-400/60 hover:shadow-md text-neutral-800 hover:text-neutral-950 flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Search className="h-4 w-4 text-amber-600" />
              <span>دليل الخدمات (١٣)</span>
            </a>
            <a
              href="/blog"
              onClick={(e) => handleLinkClick(e, '/blog')}
              className="p-3.5 rounded-xl border border-neutral-200 bg-white hover:border-amber-400/60 hover:shadow-md text-neutral-800 hover:text-neutral-950 flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <BookOpen className="h-4 w-4 text-amber-600" />
              <span>مقالات المدونة</span>
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="p-3.5 rounded-xl border border-neutral-200 bg-white hover:border-amber-400/60 hover:shadow-md text-neutral-800 hover:text-neutral-950 flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Mail className="h-4 w-4 text-amber-600" />
              <span>تواصل معنا</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
