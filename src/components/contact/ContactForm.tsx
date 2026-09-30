import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'إعلانات جوجل ومحركات البحث',
    monthlyBudget: '٣٠,٠٠٠ - ٧٠,٠٠٠ جنيه مصري (أو ما يعادلها بالريال/الدولار)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const phoneNumber = '01060474659';
  const internationalPhone = '+201060474659';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setError('يرجى إدخال الاسم بالكامل.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('يرجى إدخال بريد إلكتروني صحيح للعمل.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError('يرجى إدخال رقم هاتف صحيح للتواصل.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center space-y-4 shadow-lg">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 font-display">
          تم استلام طلب الاستشارة التسويقية بنجاح!
        </h3>
        <p className="text-sm text-neutral-700 max-w-md mx-auto leading-relaxed font-arabic">
          شكراً لتواصلك مع شركة ديمو (Demo). يقوم فريق خبراء النمو حالياً بمراجعة نشاطك التجاري، وسيتواصل معك مستشارك التسويقي المخصص عبر الواتساب أو الهاتف خلال أقل من ساعتي عمل.
        </p>
        <div className="pt-4 border-t border-emerald-200/60 text-xs text-neutral-600">
          للتواصل الفوري والمباشر، يمكنك أيضاً مراسلتنا مباشرة على واتساب:{' '}
          <a
            href={`https://wa.me/201060474659?text=${encodeURIComponent('مرحباً شركة ديمو، أود استشارة حول خدماتكم.')}`}
            className="text-emerald-700 font-bold hover:underline font-mono"
            dir="ltr"
          >
            01060474659
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 font-arabic">
            الاسم بالكامل <span className="text-amber-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="مثال: أحمد عبد الله"
            className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 font-arabic transition-colors shadow-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 font-arabic">
            البريد الإلكتروني للعمل <span className="text-amber-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors shadow-sm"
            dir="ltr"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-semibold text-neutral-700 font-arabic">
            رقم الهاتف / واتساب <span className="text-amber-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="01000000000 أو +966 ..."
            className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors shadow-sm"
            dir="ltr"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="company" className="block text-xs font-semibold text-neutral-700 font-arabic">
            اسم الشركة أو المتجر الإلكتروني
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="مثال: شركة النور أو متجر البراند"
            className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 font-arabic transition-colors shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="serviceInterest" className="block text-xs font-semibold text-neutral-700 font-arabic">
            الخدمة الأساسية المطلوبة
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 font-arabic transition-colors shadow-sm"
          >
            <option value="إعلانات جوجل ومحركات البحث">إعلانات جوجل ومحركات البحث (Google Ads)</option>
            <option value="تحسين محركات البحث والأرشفة (SEO)">تحسين محركات البحث والأرشفة (SEO)</option>
            <option value="إعلانات فيسبوك وانستجرام وتيك توك">إعلانات فيسبوك وانستجرام وتيك توك</option>
            <option value="تسويق المتاجر الإلكترونية">تسويق المتاجر الإلكترونية (E-Commerce)</option>
            <option value="التسويق بالأداء والعائد (Performance Marketing)">التسويق بالأداء والعائد (Performance Marketing)</option>
            <option value="تصميم وبرمجة المواقع السريعة">تصميم وبرمجة المواقع السريعة</option>
            <option value="إنتاج الفيديو الإعلاني والموشن جرافيك">إنتاج الفيديو الإعلاني والموشن جرافيك</option>
            <option value="إدارة صفحات السوشيال ميديا وخدمة العملاء">إدارة صفحات السوشيال ميديا وخدمة العملاء</option>
            <option value="منظومة تسويقية متكاملة">منظومة تسويقية متكاملة (Full-Stack)</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="monthlyBudget" className="block text-xs font-semibold text-neutral-700 font-arabic">
            الميزانية الإعلانية الشهرية المتوقعة
          </label>
          <select
            id="monthlyBudget"
            name="monthlyBudget"
            value={formData.monthlyBudget}
            onChange={handleChange}
            className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 font-arabic transition-colors shadow-sm"
          >
            <option value="١٥,٠٠٠ - ٣٠,٠٠٠ جنيه مصري (أو ما يعادلها)">١٥,٠٠٠ - ٣٠,٠٠٠ جنيه مصري (أو ما يعادلها)</option>
            <option value="٣٠,٠٠٠ - ٧٠,٠٠٠ جنيه مصري (أو ما يعادلها)">٣٠,٠٠٠ - ٧٠,٠٠٠ جنيه مصري (أو ما يعادلها)</option>
            <option value="٧٠,٠٠٠ - ١٥٠,٠٠٠ جنيه مصري (أو ما يعادلها)">٧٠,٠٠٠ - ١٥٠,٠٠٠ جنيه مصري (أو ما يعادلها)</option>
            <option value="+١٥٠,٠٠٠ جنيه مصري / +١٥,٠٠٠ ريال سعودي">+١٥٠,٠٠٠ جنيه مصري / +١٥,٠٠٠ ريال سعودي</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 font-arabic">
          تفاصيل التحدي التسويقي أو الرابط لموقعك/صفحتك
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="أخبرنا عن أهدافك، التحديات التي واجهتها مع الحملات السابقة، وأي روابط لموقعك أو صفحاتك..."
          className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 font-arabic transition-colors shadow-sm"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 px-6 py-3.5 text-sm font-bold text-neutral-950 shadow-md shadow-amber-400/20 transition-all hover:bg-amber-300 hover:shadow-lg disabled:opacity-50 cursor-pointer"
      >
        <span>{isSubmitting ? 'جاري إرسال الطلب...' : 'إرسال طلب الاستشارة التسويقية'}</span>
        <Send className="h-4 w-4" />
      </button>

      <p className="text-[11px] text-neutral-500 text-center font-arabic">
        بياناتك محمية بنسبة 100%. لن نقوم بمشاركة بريدك أو هاتفك مع أي طرف ثالث على الإطلاق.
      </p>
    </form>
  );
};
