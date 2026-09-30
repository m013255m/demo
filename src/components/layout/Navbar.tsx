import React, { useState } from 'react';
import { Menu, X, ArrowUpLeft, PhoneCall, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = '01060474659';
  const internationalPhone = '+201060474659';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'الرئيسية', path: '/' },
    { label: 'خدمات الوكالة', path: '/services' },
    { label: 'عن شركة ديمو', path: '/about' },
    { label: 'دراسات النمو والمدونة', path: '/blog' },
    { label: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur-xl transition-colors">
      {/* Top micro banner */}
      <div className="hidden lg:block border-b border-neutral-100 bg-neutral-50/80 px-4 py-1.5 text-xs text-neutral-600">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-semibold text-emerald-700 font-arabic">
              متاح حالياً لاستقبال مشاريع وحملات الربع القادم في مصر والخليج
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-neutral-600 font-arabic">
            <span>وكالة تسويق رقمي إدارة حملات Google وMeta</span>
            <span className="text-neutral-300">|</span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${internationalPhone}`}
                className="flex items-center gap-1 text-neutral-800 font-bold hover:text-amber-600 transition-colors"
                title="اتصال هاتفي مباشر"
              >
                <PhoneCall className="h-3 w-3 shrink-0 text-amber-500" />
                <span dir="ltr">01060474659</span>
              </a>
              <span className="text-neutral-300">·</span>
              <a
                href={`https://wa.me/201060474659?text=${encodeURIComponent('مرحباً شركة ديمو للتسويق، أود استشارة حول خدماتكم.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
              >
                <MessageCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                <span>واتساب مباشر</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="group block shrink-0"
          title="ديمو (Demo) - وكالة التسويق الرقمي والدعاية والإعلان وتصدر محركات البحث"
        >
          <BrandLogo variant="full" theme="light" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-700">
          {navLinks.map((link) => {
            const isActive = link.path === '/' ? currentPath === '/' : currentPath.startsWith(link.path);
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`relative py-2 font-arabic transition-all duration-200 hover:text-neutral-950 ${
                  isActive ? 'text-amber-600 font-bold' : 'text-neutral-700'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Primary CTA & Mobile Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop phone badge */}
          <a
            href={`tel:${internationalPhone}`}
            className="hidden xl:inline-flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs font-bold text-neutral-800 hover:bg-neutral-100 hover:border-neutral-300 transition-all font-mono shrink-0"
            title="اتصال سريع"
          >
            <PhoneCall className="h-3.5 w-3.5 shrink-0 text-amber-600" />
            <span dir="ltr">01060474659</span>
          </a>

          {/* Desktop consultation CTA button */}
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-neutral-950 shadow-md shadow-amber-400/20 hover:shadow-lg hover:shadow-amber-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shrink-0"
          >
            <span>طلب تدقيق تسويقي</span>
            <ArrowUpLeft className="h-4 w-4 shrink-0" />
          </a>

          {/* Mobile Direct Phone Tap Icon */}
          <a
            href={`tel:${internationalPhone}`}
            className="inline-flex sm:hidden items-center justify-center h-10 w-10 min-w-10 shrink-0 rounded-xl border border-amber-300/80 bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors shadow-sm"
            aria-label="اتصال هاتفي مباشر بشركة ديمو"
            title="اتصال على 01060474659"
          >
            <PhoneCall className="h-4 w-4 shrink-0" />
          </a>

          {/* Mobile Direct WhatsApp Tap Icon */}
          <a
            href={`https://wa.me/201060474659?text=${encodeURIComponent('مرحباً شركة ديمو، أود استشارة حول خدماتكم.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex sm:hidden items-center justify-center h-10 w-10 min-w-10 shrink-0 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors shadow-sm"
            aria-label="محادثة واتساب مباشرة"
            title="واتساب 01060474659"
          >
            <MessageCircle className="h-4 w-4 shrink-0 fill-white" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden h-10 w-10 shrink-0 items-center justify-center text-neutral-700 hover:text-neutral-950 rounded-xl border border-neutral-200 hover:bg-neutral-100 focus:outline-none transition-colors"
            aria-label="قائمة تصفح وكالة ديمو"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 shrink-0 text-amber-600" /> : <Menu className="h-5 w-5 shrink-0" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-neutral-200 bg-white px-4 sm:px-5 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`block rounded-xl px-3.5 py-2.5 text-base font-arabic font-medium transition-colors ${
                  currentPath === link.path
                    ? 'bg-amber-50 text-amber-700 font-bold'
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${internationalPhone}`}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-neutral-900 px-3 py-2.5 text-xs font-bold text-white shadow-sm"
              >
                <PhoneCall className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span dir="ltr" className="font-mono">01060474659</span>
              </a>
              <a
                href={`https://wa.me/201060474659?text=${encodeURIComponent('مرحباً شركة ديمو للتسويق، أود استشارة حول خدماتكم.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-xs font-bold text-white shadow-sm"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0 fill-white" />
                <span>واتساب</span>
              </a>
            </div>

            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-3 text-sm font-bold text-neutral-950 shadow-md shadow-amber-400/20"
            >
              <span>طلب استشارة تسويقية وتهيئة للفهرسة</span>
              <ArrowUpLeft className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
