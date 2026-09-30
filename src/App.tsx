import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingContactButtons } from './components/layout/FloatingContactButtons';
import { SeoDiagnosticDrawer } from './components/seo/SeoDiagnosticDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SERVICES_DATA } from './data/services-data';
import { BLOG_POSTS } from './data/blog-data';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false);

  // Sync with browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route Resolver
  const renderCurrentView = () => {
    const cleanPath = currentPath.replace(/\/+$/, '') || '/';

    // 1. Core Top-Level Routes
    if (cleanPath === '/') {
      return <HomePage onNavigate={navigateTo} />;
    }
    if (cleanPath === '/about') {
      return <AboutPage onNavigate={navigateTo} />;
    }
    if (cleanPath === '/contact') {
      return <ContactPage onNavigate={navigateTo} />;
    }
    if (cleanPath === '/services') {
      return <ServicesIndexPage onNavigate={navigateTo} />;
    }
    if (cleanPath === '/blog') {
      return <BlogIndexPage onNavigate={navigateTo} />;
    }

    // 2. Service Detail Sub-Routes (/services/:slug)
    if (cleanPath.startsWith('/services/')) {
      const slug = cleanPath.replace('/services/', '');
      const matchedService = SERVICES_DATA.find((s) => s.slug === slug);
      if (matchedService) {
        return <ServiceDetailPage service={matchedService} onNavigate={navigateTo} />;
      }
    }

    // 3. Blog Article Sub-Routes (/blog/:slug)
    if (cleanPath.startsWith('/blog/')) {
      const slug = cleanPath.replace('/blog/', '');
      const matchedPost = BLOG_POSTS.find((b) => b.slug === slug);
      if (matchedPost) {
        return <BlogPostPage post={matchedPost} onNavigate={navigateTo} />;
      }
    }

    // 4. Fallback 404
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-400 selection:text-neutral-950">
      <a href="#main-content" className="skip-link">تخطي إلى المحتوى الرئيسي</a>
      {/* 3-Zone Top Navigation Contract */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Crawlable Footer */}
      <Footer onNavigate={navigateTo} onOpenDiagnostics={() => setDiagnosticsOpen(true)} />

      {/* Floating Instant Contact Buttons (WhatsApp & Direct Phone Call) */}
      <FloatingContactButtons />

      {/* Technical SEO & Schema Diagnostics Drawer */}
      <SeoDiagnosticDrawer
        isOpen={diagnosticsOpen}
        onClose={() => setDiagnosticsOpen(false)}
        currentPath={currentPath}
      />
    </div>
  );
}
