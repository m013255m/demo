# Demo Agency — Digital Marketing Website

Production-ready React/Vite marketing website prepared for:

**GitHub → Vercel → Custom Domain → Google Search Console**

## Main improvements

- Multi-page Vite build with a real HTML entry for every indexable route.
- Unique title, meta description, canonical and Open Graph metadata per route in the initial HTML.
- XML sitemap and robots.txt generated from the same page inventory at build time.
- Unknown URLs are no longer forced through a catch-all Vercel rewrite.
- Responsive/mobile hardening for navigation, floating contact controls and long CTA text.
- Accessible skip link and reduced-motion support.
- Unique SVG gradient IDs to prevent duplicated inline SVG IDs.
- SEO structured data and internal linking.
- No fake SEO guarantees in the technical deployment flow.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build generates static HTML for the site's indexable routes before Vite bundles the application.

## Website URL

The default production URL is:

```text
https://demoagency.com
```

To use another domain, create `.env.local` from `.env.example` and set:

```text
VITE_SITE_URL=https://your-real-domain.com
```

The build uses this value for canonical URLs, sitemap.xml and robots.txt.

## Vercel

Recommended settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Connect the GitHub repository to Vercel so production deployments are created from the configured production branch.

## Google Search Console

After the production domain is live:

1. Add the domain as a Domain Property in Google Search Console.
2. Verify ownership through DNS.
3. Submit `/sitemap.xml`.
4. Inspect the homepage and important service pages.
5. Use **Request Indexing** where appropriate.
6. Monitor Page Indexing, Core Web Vitals and Search Performance.

Google controls crawling and indexing; no implementation can guarantee a particular indexing time or ranking.
