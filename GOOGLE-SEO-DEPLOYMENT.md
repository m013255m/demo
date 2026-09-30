# دليل النشر والربط مع Google Search Console لشركة ديمو (Demo)
# Google Search Console & Production Deployment Guide: Demo Agency

هذا الدليل يوضح الخطوات العملية الدقيقة لنشر موقع شركة **ديمو (Demo)** وربطه مع Google Search Console لتهيئة الموقع لأفضل قابلية ممكنة للزحف والفهرسة في Google.

---

## مسار النشر والربط الكامل
$$\text{GitHub Repository} \longrightarrow \text{Vercel Edge Network} \longrightarrow \text{Custom Domain (DNS)} \longrightarrow \text{Google Search Console}$$

---

### الخطوة الأولى: رفع المشروع إلى GitHub (Push to GitHub)
1. قم بتهيئة مستودع Git داخل مجلد المشروع:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-ready Demo agency platform with technical SEO"
   ```
2. أنشئ مستودعاً جديداً على GitHub باسم `demo-agency` أو أي اسم تفضله.
3. اربط المستودع وادفع الكود:
   ```bash
   git remote add origin https://github.com/your-username/demo-agency.git
   git branch -M main
   git push -u origin main
   ```

---

### الخطوة الثانية: ربط المستودع مع منصة Vercel
1. سجل الدخول إلى منصة [Vercel](https://vercel.com).
2. اضغط على **Add New** $\rightarrow$ **Project**.
3. اختر مستودع GitHub الخاص بشركة ديمو (`demo-agency`).
4. سيتعرف Vercel تلقائياً على إعدادات `Vite`.
5. تأكد من إعدادات البناء:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. اضغط على **Deploy**. سيقوم Vercel ببناء الموقع ونشره على شبكة الخوادم السحابية السريعة.

---

### الخطوة الثالثة: ربط الدومين المخصص (Custom Domain)
1. من لوحة تحكم مشروعك على Vercel، اذهب إلى **Settings** $\rightarrow$ **Domains**.
2. أضف الدومين الخاص بك: `demoagency.com` (أو أي دومين تختاره).
3. اختر تحويل نسخة `www` إلى الدومين الرئيسي أو العكس لضمان ثبات الرابط الأساسي (Canonical URL).
4. اضبط سجلات الـ DNS في مزود الدومين الخاص بك (مثل Cloudflare أو GoDaddy أو Namecheap):
   - **نوع A Record:** المضيف `@` $\rightarrow$ القيمة `76.76.21.21`
   - **نوع CNAME Record:** المضيف `www` $\rightarrow$ القيمة `cname.vercel-dns.com`
5. ستقوم Vercel تلقائياً بتفعيل شهادة الأمان المجانية **SSL (HTTPS)**.

---

### الخطوة الرابعة: إضافة الموقع وإثبات الملكية في Google Search Console
1. افتح أداة [Google Search Console](https://search.google.com/search-console).
2. اختر نوع الخاصية: **نطاق (Domain Property)** واكتب الدومين الخاص بك (مثلاً `demoagency.com`).
3. انسخ سجل التحقق النصي **TXT Record** الذي يقدمه جوجل.
4. الصق سجل الـ TXT في لوحة تحكم الـ DNS الخاصة بدومينك.
5. ارجع إلى Search Console واضغط **تأكيد (Verify)**. سيتم التحقق من ملكيتك للموقع فوراً.

---

### الخطوة الخامسة: إرسال خريطة الموقع (Submit Sitemap.xml)
1. من القائمة الجانبية في Google Search Console، اضغط على **ملفات السايت ماب (Sitemaps)**.
2. في خانة "إضافة ملف سايت ماب جديد"، اكتب:
   ```text
   sitemap.xml
   ```
3. اضغط **إرسال (Submit)**.
4. سيصبح الـSitemap متاحاً لـGoogle لاكتشاف عناوين الموقع. ظهور الصفحات في تقرير الفهرسة يظل خاضعاً لأنظمة Google.

---

### الخطوة السادسة: طلب فهرسة الصفحات المهمة عبر URL Inspection (URL Inspection Tool)
1. استخدم شريط البحث العلوي في Search Console (أداة فحص العناوين - URL Inspection).
2. ضع الرابط الرئيسي `https://demoagency.com/` واضغط Enter.
3. اضغط على زر **اختبار الرابط المنشور (Test Live URL)** للتأكد من استجابة الصفحة وخلوها من الأخطاء.
4. اضغط على زر **طلب الفهرسة (Request Indexing)** لتنبيه روبوت جوجل بزيارة الصفحة فوراً.
5. كرر نفس الخطوة مع الصفحات الخدمية الكبرى مثل `/services/seo` و `/services/google-ads` و `/services/digital-marketing` لمساعدة Google على اكتشافها؛ ولا يضمن ذلك الفهرسة أو ترتيب النتائج.

---

### الخطوة السابعة: مراقبة الأرشفة وتجنب أخطاء الفهرسة
1. راقب تقرير **الصفحات (Pages)** أسبوعياً للتأكد من تزايد عدد الصفحات المفهرسة (Indexed Pages).
2. تأكد من أن تقرير **Core Web Vitals** يُظهر باللون الأخضر ("جيدة") للسرعة وتجربة المستخدم على الهواتف.
3. في حال ظهرت أي صفحات تحت تصنيف "تم الزحف إليها - لم تتم فهرستها حالياً"، تأكد من إضافة روابط داخلية إليها من المقالات والصفحة الرئيسية.

---

### جاهزية بنية السيو في المشروع
المشروع مجهز تقنياً لمساعدة محركات البحث على الزحف والفهم والفهرسة:
- ملف `public/robots.txt` يسمح بالزحف الكامل لعناكب جوجل وصور جوجل.
- ملف `public/sitemap.xml` يحتوي على كافة الروابط بأولوية وتاريخ تعديل دقيق.
- كل صفحة تحتوي على وسم `link rel="canonical"` صريح يمنع تكرار المحتوى.
- وسوم البيانات المنظمة `Schema.org JSON-LD` مدمجة لجميع الخدمات والمقالات والمؤسسة.
- خطوط عربية محسنة وسريعة التحميل (Cairo & Alexandria).
