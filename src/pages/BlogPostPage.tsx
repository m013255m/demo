import React from 'react';
import { BlogPost } from '../types/seo';
import { SeoHead } from '../components/seo/SeoHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SERVICES_DATA } from '../data/services-data';
import { BLOG_POSTS } from '../data/blog-data';
import { Calendar, Clock, ArrowUpLeft, Bookmark, CheckCircle2, ChevronLeft } from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const articleTitle = post.arabicTitle || post.title;

  const breadcrumbs = [
    { name: 'الرئيسية', url: '/' },
    { name: 'المدونة', url: '/blog' },
    { name: articleTitle, url: `/blog/${post.slug}` },
  ];

  // Resolve related services and articles
  const relatedServices = SERVICES_DATA.filter((s) => post.relatedServicesSlugs.includes(s.slug));
  const relatedArticles = BLOG_POSTS.filter((b) => b.slug !== post.slug && (post.relatedArticlesSlugs || []).includes(b.slug));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleTitle,
    description: post.metaDescription,
    url: `https://demo-seven-indol-67.vercel.app/blog/${post.slug}`,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'AdvertisingAgency',
      name: 'شركة ديمو للتسويق الإلكتروني (Demo)',
      url: 'https://demo-seven-indol-67.vercel.app/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://demo-seven-indol-67.vercel.app/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://demo-seven-indol-67.vercel.app/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SeoHead
        title={`${articleTitle} | مدونة ديمو`}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
        schema={articleSchema}
      />

      <article className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

          {/* Article Header */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 font-arabic">
              <span className="font-bold text-amber-700 uppercase tracking-wider text-[11px]">
                {post.category}
              </span>
              <span className="text-neutral-300">·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={post.publishDate}>{post.publishDate}</time>
              </div>
              <span className="text-neutral-300">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Exactly One Clear H1 */}
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl font-display leading-[1.25] [text-wrap:balance]">
              {articleTitle}
            </h1>

            {/* Excerpt */}
            <p className="text-base text-neutral-600 sm:text-lg leading-relaxed font-arabic">
              {post.excerpt}
            </p>

            {/* Author Profile Header */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-neutral-950 font-bold font-display text-base shadow-sm">
                {post.author.name.charAt(0)}
              </div>
              <div className="text-xs">
                <div className="font-bold text-neutral-900 font-arabic text-sm">{post.author.name}</div>
                <div className="text-neutral-500 font-arabic">{post.author.role}</div>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          {post.contentHeadings && post.contentHeadings.length > 0 && (
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                <Bookmark className="h-4 w-4 text-amber-600" />
                <span>فهرس ومحاور الدليل</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-700 font-arabic">
                {post.contentHeadings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="text-neutral-700 hover:text-amber-700 transition-colors inline-block"
                    >
                      {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Article Content Sections */}
          <div className="space-y-12 text-sm leading-relaxed text-neutral-700 font-arabic">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 font-display pt-4">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-neutral-700">
                    {p}
                  </p>
                ))}

                {section.callout && (
                  <div className="rounded-xl border-r-4 border-r-amber-500 border border-neutral-200 bg-amber-50/60 p-5 text-sm font-semibold text-neutral-900 font-arabic leading-relaxed my-4 shadow-sm">
                    {section.callout}
                  </div>
                )}

                {section.bulletList && section.bulletList.length > 0 && (
                  <ul className="space-y-2.5 pt-2 pr-4">
                    {section.bulletList.map((item, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-neutral-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Author Card Footer */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-neutral-950 font-bold font-display text-xl shadow-sm">
              {post.author.name.charAt(0)}
            </div>
            <div className="space-y-1 text-xs">
              <div className="font-bold text-neutral-900 text-base font-arabic">{post.author.name}</div>
              <div className="text-amber-700 font-semibold font-arabic">{post.author.role} في شركة ديمو</div>
              <p className="text-neutral-600 leading-relaxed font-arabic">{post.author.bio}</p>
            </div>
          </div>

          {/* Related Services Links */}
          {relatedServices.length > 0 && (
            <div className="border-t border-neutral-200 pt-10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
                  الخدمات ذات الصلة بهذا المقال
                </span>
                <h3 className="text-xl font-bold text-neutral-900 font-display">
                  كيف نساعدك على تطبيق هذه الاستراتيجيات عملياً؟
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedServices.map((service) => (
                  <a
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={(e) => handleLinkClick(e, `/services/${service.slug}`)}
                    className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:border-amber-400/60 hover:shadow-md transition-all block space-y-2 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-amber-700 font-arabic">{service.category}</span>
                      <ArrowUpLeft className="h-4 w-4 text-neutral-400 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-amber-600 transition-colors font-arabic">
                      {service.arabicTitle || service.title}
                    </h4>
                    <p className="text-xs text-neutral-500 line-clamp-2 font-arabic">
                      {service.tagline}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-neutral-200 pt-10 space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 font-display">
                مقالات وأدلة أخرى قد تهمك:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((relPost) => (
                  <a
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    onClick={(e) => handleLinkClick(e, `/blog/${relPost.slug}`)}
                    className="group rounded-2xl border border-neutral-200 bg-white p-4 hover:border-amber-400/60 hover:shadow-md transition-all block space-y-2 shadow-sm"
                  >
                    <span className="text-[10px] font-bold text-amber-700 font-arabic block">{relPost.category}</span>
                    <h4 className="text-xs font-bold text-neutral-900 group-hover:text-amber-600 transition-colors font-arabic line-clamp-2">
                      {relPost.arabicTitle || relPost.title}
                    </h4>
                    <span className="text-[11px] text-neutral-500 font-arabic block">{relPost.readTime}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-8 text-center space-y-5 shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-900 font-display">
              هل ترغب في تطبيق هذه الحلول في شركتك؟
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed font-arabic">
              احجز جلسة استشارية مجانية لمراجعة نشاطك التجاري ومناقشة سبل مضاعفة مبيعاتك وأرباحك مع خبراء شركة ديمو على الرقم 01060474659.
            </p>
            <div>
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3.5 text-xs font-bold text-neutral-950 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
              >
                <span>احجز استشارة تسويقية الآن</span>
                <ArrowUpLeft className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
