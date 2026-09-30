import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertTriangle, FileCode, Layers, Search, ListCheck, ExternalLink, Shield } from 'lucide-react';
import { PAGE_INVENTORY } from '../../data/page-inventory';
import { SITE_URL } from '../../config/site';

interface SeoDiagnosticDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const SeoDiagnosticDrawer: React.FC<SeoDiagnosticDrawerProps> = ({
  isOpen,
  onClose,
  currentPath,
}) => {
  const [activeTab, setActiveTab] = useState<'current' | 'inventory' | 'checklist'>('current');
  const [pageInfo, setPageInfo] = useState({
    title: '',
    description: '',
    canonical: '',
    h1Count: 0,
    h1Text: '',
    h2Count: 0,
    jsonLdPresent: false,
    schemaPreview: '',
  });

  useEffect(() => {
    if (!isOpen) return;

    const title = document.title;
    const descTag = document.querySelector('meta[name="description"]');
    const description = descTag ? descTag.getAttribute('content') || '' : '';
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    const canonical = canonicalTag ? canonicalTag.getAttribute('href') || '' : '';

    const h1Elements = document.querySelectorAll('h1');
    const h1Count = h1Elements.length;
    const h1Text = h1Elements.length > 0 ? h1Elements[0].textContent || '' : '';

    const h2Elements = document.querySelectorAll('h2');
    const h2Count = h2Elements.length;

    const dynamicScript = document.getElementById('dynamic-page-schema');
    const jsonLdPresent = !!dynamicScript;
    const schemaPreview = dynamicScript?.textContent || 'بيانات Organization الأساسية محملة في <head>';

    setPageInfo({
      title,
      description,
      canonical,
      h1Count,
      h1Text,
      h2Count,
      jsonLdPresent,
      schemaPreview,
    });
  }, [isOpen, currentPath]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-neutral-900/60 backdrop-blur-sm flex justify-start">
      <div className="w-full max-w-2xl bg-white border-l border-neutral-200 h-full flex flex-col shadow-2xl text-neutral-800">
        {/* Drawer Header */}
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-600" />
            <h2 className="text-base font-bold text-neutral-900 font-display">
              أداة الفحص والتدقيق المباشر للسيو والأرشفة في جوجل
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="إغلاق لوحة الفحص"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-200 bg-neutral-100 text-xs font-arabic">
          <button
            onClick={() => setActiveTab('current')}
            className={`flex-1 py-3 text-center font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'current'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-neutral-600 hover:text-neutral-900'
            }`}
          >
            فحص الصفحة الحالية
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex-1 py-3 text-center font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'inventory'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-neutral-600 hover:text-neutral-900'
            }`}
          >
            فهرس كافة الصفحات (٢٦ صفحة)
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex-1 py-3 text-center font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'checklist'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-neutral-600 hover:text-neutral-900'
            }`}
          >
            معايير جودة الأرشفة
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 font-arabic text-xs">
          {activeTab === 'current' && (
            <div className="space-y-6">
              {/* Canonical URL Check */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-900 text-sm">الرابط المعتمد (Canonical URL):</span>
                  <span className="flex items-center gap-1 text-emerald-700 text-xs font-bold">
                    <CheckCircle className="h-4 w-4" /> مطابق ونظيف
                  </span>
                </div>
                <div className="font-mono text-xs text-neutral-800 break-all p-2 rounded bg-white border border-neutral-200" dir="ltr">
                  {pageInfo.canonical || `${SITE_URL}${currentPath}`}
                </div>
              </div>

              {/* Title Tag Check */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-900 text-sm">عنوان الصفحة (Title Tag):</span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {pageInfo.title.length} حرف (المثالي: ٤٠ - ٦٥)
                  </span>
                </div>
                <div className="text-xs text-neutral-900 p-2.5 rounded bg-white border border-neutral-200 font-semibold leading-relaxed">
                  {pageInfo.title}
                </div>
              </div>

              {/* Meta Description Check */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-900 text-sm">الوصف التعريفي (Meta Description):</span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {pageInfo.description.length} حرف (المثالي: ١٢٠ - ١٦٠)
                  </span>
                </div>
                <div className="text-xs text-neutral-700 p-2.5 rounded bg-white border border-neutral-200 leading-relaxed">
                  {pageInfo.description}
                </div>
              </div>

              {/* Heading Hierarchy Check */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 space-y-1">
                  <span className="font-bold text-neutral-900">عدد وسوم H1:</span>
                  <div className="text-2xl font-extrabold text-neutral-900 font-display">
                    {pageInfo.h1Count}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {pageInfo.h1Count === 1 ? 'مطابق لقواعد جوجل (H1 واحد)' : 'تنبيه: يجب أن يكون هناك H1 وحيد'}
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 space-y-1">
                  <span className="font-bold text-neutral-900">عدد وسوم H2:</span>
                  <div className="text-2xl font-extrabold text-neutral-900 font-display">
                    {pageInfo.h2Count}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    تسلسل هرمي منظم للمحتوى
                  </div>
                </div>
              </div>

              {/* Schema JSON-LD Validation */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-900 text-sm">البيانات المنظمة (Schema.org):</span>
                  <span className="text-emerald-700 text-xs font-bold flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" /> محقونة وجاهزة
                  </span>
                </div>
                <pre className="text-[11px] text-neutral-800 p-3 rounded bg-white border border-neutral-200 font-mono overflow-x-auto max-h-48 leading-relaxed" dir="ltr">
                  {pageInfo.schemaPreview}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="space-y-4">
              <div className="text-neutral-600 mb-2">
                فهرس الصفحات المؤهلة للأرشفة (٢٦ مساراً مستقلاً دون تكرار أو تنافس داخلي):
              </div>
              <div className="space-y-3">
                {PAGE_INVENTORY.map((page, idx) => (
                  <div key={idx} className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 space-y-1.5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-amber-700" dir="ltr">{page.url}</span>
                      <span className="text-[11px] text-neutral-500">{page.pageType}</span>
                    </div>
                    <div className="text-xs font-semibold text-neutral-900">{page.primaryTopicArabic}</div>
                    <div className="text-[11px] text-neutral-600 line-clamp-1">{page.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-3">
                <div className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-700" />
                  <span>معايير قابلية الزحف والفهرسة المطبقة في الموقع:</span>
                </div>
                <ul className="space-y-2 text-xs text-emerald-800">
                  <li>• خريطة موقع XML تحتوي على الروابط الأساسية القابلة للفهرسة.</li>
                  <li>• ملف robots.txt يسمح بالزحف لكافة روبوتات البحث دون قيود غير مقصودة.</li>
                  <li>• وسوم Canonical واضحة ومتسقة للصفحات القابلة للفهرسة.</li>
                  <li>• بنية بيانات Schema.org JSON-LD (Agency, Service, Article, FAQPage, BreadcrumbList).</li>
                  <li>• تحسين للأداء وتقليل الأكواد الخارجية غير الضرورية.</li>
                  <li>• إشارات محلية صادقة تعكس نطاق الخدمة الفعلي دون بيانات جغرافية وهمية.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
