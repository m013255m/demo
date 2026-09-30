import React, { useId } from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'minimal';
  theme?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const gradientId = `brand-gold-${useId().replace(/:/g, '')}`;

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none shrink-0 ${className}`}>
      {/* Premium Geometric Monogram Icon */}
      <div className="relative group/logo shrink-0">
        {/* Ambient Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500/25 via-orange-400/20 to-transparent blur-md opacity-70 group-hover/logo:opacity-100 transition-opacity duration-300" />

        {/* Emblem Container with fixed square dimensions and shrink-0 */}
        <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-[1.5px] shadow-lg shadow-neutral-900/10 ring-1 ring-amber-500/30 group-hover/logo:ring-amber-500/60 transition-all duration-300">
          <div className="relative flex h-full w-full items-center justify-center rounded-[10px] bg-neutral-950 overflow-hidden shrink-0">
            {/* Subtle background tech grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:6px_6px] opacity-20" />

            {/* Vector Mark: 'D' Monogram with Growth Arrow */}
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400 shrink-0 transition-transform duration-300 group-hover/logo:scale-105"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id={gradientId} x1="2" y1="4" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FDE68A" />
                  <stop offset="0.45" stopColor="#F59E0B" />
                  <stop offset="1" stopColor="#D97706" />
                </linearGradient>
              </defs>

              {/* Main Stem of D */}
              <rect x="6" y="5" width="4" height="22" rx="1.5" fill={`url(#${gradientId})`} />

              {/* Dynamic Curved Arc of D */}
              <path
                d="M10 6.5C18 6.5 24 10 24 16C24 22 18 25.5 10 25.5"
                stroke={`url(#${gradientId})`}
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Ascending Performance Arrow */}
              <path
                d="M13 18.5L19 12.5M19 12.5H14.5M19 12.5V17"
                stroke="#FDE68A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="19" cy="12.5" r="1.5" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </div>

      {/* Typography Section */}
      {variant !== 'minimal' && (
        <div className="flex flex-col text-right shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className={`font-display text-xl sm:text-2xl font-black tracking-wider ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              DEMO
            </span>
            <span className={`h-3.5 sm:h-4 w-[1px] ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
            <span className="font-arabic text-xs sm:text-sm font-bold text-amber-600">
              ديمو
            </span>
          </div>
          {variant === 'full' && (
            <span
              className={`font-arabic text-[10px] sm:text-[11px] font-medium leading-tight hidden sm:block ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}
            >
              وكالة التسويق الرقمي وهندسة النمو
            </span>
          )}
        </div>
      )}
    </div>
  );
};
