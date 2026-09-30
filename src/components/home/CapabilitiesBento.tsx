import React from 'react';
import { ArrowUpLeft, Search, BarChart3, ShoppingBag, Code, Target, Zap, ShieldCheck } from 'lucide-react';

interface CapabilitiesBentoProps {
  onNavigate: (path: string) => void;
}

export const CapabilitiesBento: React.FC<CapabilitiesBentoProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <section className="relative border-b border-neutral-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 font-arabic">
              منظومة وكالة ديمو المتكاملة
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.6rem] font-display leading-[1.25] [text-wrap:balance]">
              قدرات تسويقية وإعلانية تقود علامتك التجارية نحو صدارة السوق
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed font-arabic">
              نجمع بين دقة محركات البحث وسرعة انتشار السوشيال ميديا وتطوير البرمجيات السريعة لبناء مسارات تحويل عملاء متكاملة تضاعف مبيعاتك في مصر والدول العربية.
            </p>
          </div>
          <a
            href="/services"
            onClick={(e) => handleLinkClick(e, '/services')}
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors sm:whitespace-nowrap"
          >
            <span>استعراض كافة الخدمات الـ ١٣ بالتفصيل</span>
            <ArrowUpLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          </a>
        </div>

        {/* Asymmetric Bento Grid in Crisp Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Col span 2 - High-Intent Search & SEO Dominance */}
          <div className="group md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col justify-between transition-all duration-300 hover:border-amber-400/60 hover:shadow-xl hover:shadow-neutral-200/60">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-700 font-arabic">٠١. تحسين محركات البحث والفهرسة</span>
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-110 transition-transform">
                  <Search className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 font-display group-hover:text-amber-600 transition-colors">
                إعلانات جوجل عالية نية الشراء وتصدر نتائج البحث (SEO)
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xl font-arabic">
                نقتنص المشتري في اللحظة التي يكتب فيها حاجته على محرك بحث جوجل. ندمج إدارة مزادات إعلانات جوجل الاحترافية مع تدقيق سيو تقني صارم يضمن أرشفة صفحاتك بالكامل في Google Search Console وتصدر الكلمات التنافسية الكبرى في مصر والخليج بدون دفع مصاريف إعلانات.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-neutral-500 font-arabic">
                <span>استهداف الكلمات المفتاحية ذات نية الشراء</span>
                <span>·</span>
                <span>بيانات منظمة Schema.org JSON-LD</span>
                <span>·</span>
                <span>تجاوز اختبارات Core Web Vitals بنجاح</span>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-arabic">تحسين فرص الظهور في نتائج البحث</span>
              <a
                href="/services/google-ads"
                onClick={(e) => handleLinkClick(e, '/services/google-ads')}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
              >
                <span>تفاصيل إعلانات جوجل</span>
                <ArrowUpLeft className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Col span 1 - Meta & Social Growth Engine */}
          <div className="group rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col justify-between transition-all duration-300 hover:border-amber-400/60 hover:shadow-xl hover:shadow-neutral-200/60">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-700 font-arabic">٠٢. السوشيال ميديا والانتشار</span>
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-display group-hover:text-amber-600 transition-colors">
                إعلانات فيسبوك وانستجرام وتيك توك
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-arabic">
                استهداف ذكي للفئات الأكثر رغبة في الشراء بمصر والخليج، مع ربط واجهة برمجة التحويلات (Meta CAPI) لتفادي مشاكل الحظر وضمان أقصى عائد مالي على الإنفاق (ROAS).
              </p>
              <div className="pt-2 text-xs text-neutral-500 space-y-1.5 font-arabic">
                <div>• حملات Advantage+ المتطورة للبيع المباشر</div>
                <div>• إنتاج مقاطع ريلز وفيديوهات بيعية سريعة الانتشار</div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-arabic">عائد استثماري قابل للقياس</span>
              <a
                href="/services/facebook-ads"
                onClick={(e) => handleLinkClick(e, '/services/facebook-ads')}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
              >
                <span>إعلانات فيسبوك وميتا</span>
                <ArrowUpLeft className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Col span 1 - E-Commerce Solutions */}
          <div className="group rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col justify-between transition-all duration-300 hover:border-amber-400/60 hover:shadow-xl hover:shadow-neutral-200/60">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-700 font-arabic">٠٣. التجارة الإلكترونية</span>
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-display group-hover:text-amber-600 transition-colors">
                تسويق المتاجر وحلول الدفع والشحن
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-arabic">
                حلول مصممة لخصوصية السوق المصري والعربي: تنمية المبيعات اليومية مع خفض مرتجعات الشحن والدفع عند الاستلام (COD) لأقل من ١٠٪ عبر أتمتة التأكيد الفوري في الواتساب.
              </p>
              <div className="pt-2 text-xs text-neutral-500 space-y-1.5 font-arabic">
                <div>• ربط بوابات إنستاباي وفوري ومدى</div>
                <div>• إعلانات الكتالوج الديناميكية وحملات إعادة الاستهداف</div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-arabic">حلول شحن ومبيعات مستدامة</span>
              <a
                href="/services/ecommerce-marketing"
                onClick={(e) => handleLinkClick(e, '/services/ecommerce-marketing')}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
              >
                <span>حلول المتاجر الرقمية</span>
                <ArrowUpLeft className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Card 4: Col span 2 - Web Development & Speed */}
          <div className="group md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col justify-between transition-all duration-300 hover:border-amber-400/60 hover:shadow-xl hover:shadow-neutral-200/60">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-700 font-arabic">٠٤. المواقع والبرمجة الحديثة</span>
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-110 transition-transform">
                  <Code className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 font-display group-hover:text-amber-600 transition-colors">
                تصميم وتطوير مواقع فائقة السرعة مهيأة ١٠٠٪ للأرشفة في جوجل
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xl font-arabic">
                نبرمج مواقع وصفحات هبوط بأكواد نظيفة ومعايير أداء استثنائية تتحمل في أقل من ثانية واحدة، متوافقة كلياً مع الهواتف الذكية وبوابات الدفع (إنستاباي، فوري، ومدى)، وبنية سيو تقنية تساعد عناكب البحث على الوصول إلى الصفحات وفهمها.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-neutral-500 font-arabic">
                <span>تجاوب سلس مع كافة الشاشات</span>
                <span>·</span>
                <span>ربط مباشر مع قنوات الواتساب التجاري</span>
                <span>·</span>
                <span>بنية آمنة مشفرة بشهادات SSL الرسمية</span>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-arabic">تحميل فائق السرعة على شبكات الهاتف</span>
              <a
                href="/services/web-design"
                onClick={(e) => handleLinkClick(e, '/services/web-design')}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
              >
                <span>تفاصيل تصميم وبرمجة المواقع</span>
                <ArrowUpLeft className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
