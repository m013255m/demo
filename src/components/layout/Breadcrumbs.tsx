import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { SITE_URL } from '../../config/site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  // Generate Schema.org BreadcrumbList JSON-LD
  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <>
      {/* Inject BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />

      <nav aria-label="مسار التصفح" className="py-2 text-xs text-neutral-500 overflow-x-auto">
        <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5 shrink-0">
                {index > 0 && <ChevronLeft className="h-3.5 w-3.5 text-neutral-400 shrink-0" aria-hidden="true" />}
                {isLast ? (
                  <span className="text-neutral-900 font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.url}
                    onClick={(e) => handleLinkClick(e, item.url)}
                    className="hover:text-amber-600 transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
