import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';
import { PAGE_INVENTORY } from './src/data/page-inventory';

const SITE_URL = (process.env.VITE_SITE_URL || 'https://demo-seven-indol-67.vercel.app').replace(/\/$/, '');
const generatedRoot = path.resolve(__dirname, '.generated-pages');

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function routeToFile(route: string) {
  if (route === '/') return path.join(generatedRoot, 'index.html');
  return path.join(generatedRoot, route.replace(/^\//, ''), 'index.html');
}

function createRouteHtml(title: string, description: string, route: string) {
  const canonical = `${SITE_URL}${route === '/' ? '' : route.replace(/\/$/, '')}`;
  return `<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      name: title,
      description,
      url: canonical,
      inLanguage: 'ar-EG',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` }
    })}</script>
    <meta property="og:type" content="${route.startsWith('/blog/') ? 'article' : 'website'}" />
    <meta property="og:site_name" content="ديمو | Demo للتسويق الإلكتروني والدعاية والإعلان" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:locale" content="ar_EG" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'ديمو للتسويق الإلكتروني والدعاية والإعلان | Demo',
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/logo.svg`
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: 'ديمو | Demo للتسويق الإلكتروني والدعاية والإعلان',
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'ar-EG'
        }
      ]
    })}</script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700;800&family=Cairo:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-white text-neutral-900 antialiased font-sans">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

function prepareSeoPages() {
  fs.rmSync(generatedRoot, { recursive: true, force: true });
  fs.mkdirSync(generatedRoot, { recursive: true });

  const input: Record<string, string> = {};
  for (const page of PAGE_INVENTORY) {
    const route = new URL(page.url).pathname || '/';
    const file = routeToFile(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, createRouteHtml(page.title, page.metaDescription, route), 'utf8');
    input[route === '/' ? 'index' : route.replace(/^\//, '').replace(/\//g, '__')] = file;
  }

  // Ensure the root template is always the generated SEO template.
  const rootTemplate = input.index;
  fs.copyFileSync(rootTemplate, path.resolve(__dirname, 'index.html'));

  // Keep robots.txt and sitemap.xml synchronized with the actual production URL and routes.
  const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
  const robotsPath = path.resolve(__dirname, 'public/robots.txt');
  const routes = PAGE_INVENTORY.map((page) => new URL(page.url).pathname || '/');
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((route) => `  <url><loc>${SITE_URL}${route === '/' ? '' : route}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
  fs.writeFileSync(robotsPath, `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /private/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, 'utf8');

  return input;
}

const seoInputs = prepareSeoPages();

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    rollupOptions: {
      input: Object.values(seoInputs),
    },
    sourcemap: false,
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
