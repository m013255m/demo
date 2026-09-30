import React, { useState } from 'react';
import { SeoHead } from '../components/seo/SeoHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { BLOG_POSTS } from '../data/blog-data';
import { ArrowUpLeft, Clock, Sparkles } from 'lucide-react';

interface BlogIndexPageProps {
  onNavigate: (path: string) => void;
}

export const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const breadcrumbs = [
    { name: 'الرئيسية', url: '/' },
    { name: 'المدونة', url: '/blog' },
  ];

  const categories = [
    { id: 'all', label: 'كافة المقالات والأدلة' },
    { id: 'تحسين محركات البحث SEO', label: 'السيو وتصدر جوجل' },
    { id: 'إعلانات جوجل ومحركات البحث', label: 'إعلانات جوجل Google Ads' },
    { id: 'مقارنات ومنصات إعلانية', label: 'مقارنات الإعلانات وميتا' },
    { id: 'تسويق المتاجر الإلكترونية', label: 'المتاجر الإلكترونية' },
    { id: 'استراتيجيات التسويق الرقمي', label: 'استراتيجيات السوق العربي' },
    { id: 'إرشادات ونصائح الأعمال', label: 'نصائح اختيار الشركات' },
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const blogIndexSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'مدونة ديمو للتسويق الرقمي والأرشفة وتصدر نتائج جوجل',
    description: 'مقالات وأدلة عملية متخصصة في السيو SEO، إعلانات جوجل، إعلانات السوشيال ميديا، واستراتيجيات نمو المتاجر والشركات في مصر والوطن العربي.',
    url: 'https://demo-seven-indol-67.vercel.app/blog',
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.arabicTitle || post.title,
      url: `https://demo-seven-indol-67.vercel.app/blog/${post.slug}`,
      datePublished: post.publishDate,
      dateModified: post.modifiedDate,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <SeoHead
        title="مدونة ديمو للتسويق الرقمي والأرشفة | دليلك لتصدر جوجل وتنمية المبيعات"
        description="مقالات وأدلة عملية متخصصة في السيو SEO، إعلانات جوجل، إعلانات السوشيال ميديا، واستراتيجيات نمو المتاجر والشركات في مصر والوطن العربي."
        canonicalPath="/blog"
        schema={blogIndexSchema}
      />

      <div className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

          {/* Page Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 border-b border-amber-500/40 pb-1 text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>مركز المعرفة والأبحاث التسويقية في ديمو</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl font-display leading-[1.2]">
              مدونة ديمو للتسويق الرقمي والأرشفة وتصدر محركات البحث
            </h1>
            <p className="text-base text-neutral-600 sm:text-lg leading-relaxed font-arabic">
              أدلة استراتيجية عملية وموثقة كتبت خصيصاً لمساعدة أصحاب الشركات والمتاجر في مصر والدول العربية على فهم أسرار التسويق الحقيقي وتجنب حيل الوكالات غير المحترفة.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all font-arabic cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-neutral-950 shadow-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/70 border border-neutral-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Articles Grid in Light Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:border-amber-400/60 hover:shadow-xl hover:shadow-neutral-200/50 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-arabic">
                    <span className="text-amber-700 font-bold uppercase tracking-wider text-[11px]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-neutral-500">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-neutral-900 font-display group-hover:text-amber-600 transition-colors leading-snug">
                    <a
                      href={`/blog/${post.slug}`}
                      onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                    >
                      {post.arabicTitle || post.title}
                    </a>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs text-neutral-600 leading-relaxed font-arabic line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author & Read Action */}
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div className="text-xs">
                    <div className="font-bold text-neutral-900 font-arabic">{post.author.name}</div>
                    <div className="text-[11px] text-neutral-500 font-arabic">{post.author.role}</div>
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    <span>قراءة الدليل</span>
                    <ArrowUpLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
