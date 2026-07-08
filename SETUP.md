# تفعيل إرسال الإيميل من فورم التواصل (EmailJS)

فورم التواصل جاهز بالكود، بس محتاج منك 3 قيم توخديهم من حساب EmailJS مجاني وتحطيهم بملف `.env`. بعدها أي حدا يعبي الفورم رح توصلك رسالة على `hala45515@gmail.com` مباشرة.

## الخطوات

1. **سجّلي حساب مجاني** على [emailjs.com](https://www.emailjs.com).

2. من لوحة التحكم، روحي على **Email Services** → **Add New Service** → اختاري **Gmail** واربطيه بحساب `hala45515@gmail.com`.
   - بعد الربط رح تحصلي على **Service ID** (مثلاً `service_abc1234`).

3. روحي على **Email Templates** → **Create New Template**، وحطي محتوى الإيميل بحيث يستخدم هالمتغيرات:
   - `{{name}}` — اسم الشخص يلي بعت
   - `{{email}}` — إيميله
   - `{{message}}` — رسالته
   - وتأكدي إن حقل **To Email** بإعدادات القالب = `hala45515@gmail.com`
   - بعد الحفظ رح تحصلي على **Template ID** (مثلاً `template_xyz789`).

4. روحي على **Account** → **General** ودوري على **Public Key** (مثلاً `AbCdEfGhIjKlMnOp`).

5. بمجلد المشروع، اعملي نسخة من ملف `.env.example` باسم `.env`، وحطي فيه القيم التلاتة يلي حصلتيهم:

   ```
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
   ```

6. أوقفي السيرفر المحلي (Ctrl+C) وشغليه من جديد:

   ```
   npm run dev
   ```

7. جربي تبعتي رسالة من الفورم بالموقع — المفروض توصلك عل جيميل خلال ثواني.

> ملاحظة: ملف `.env` غير مرفوع لأي مكان (موجود بـ `.gitignore`) — لما ترفعي الموقع لاستضافة زي Vercel أو Netlify، لازم تضيفي نفس الـ 3 متغيرات من إعدادات الـ Environment Variables تبع المشروع هناك كمان.

---

# محتوى يحتاج تعديل قبل النشر

فيه كام قسم انحطلهم نص placeholder واضح لحتى تعبيهم بمحتواك الحقيقي:

- `src/data/testimonials.ts` — آراء عملاء حقيقية (أو احذفي القسم من `src/components/sections/Testimonials.tsx` إذا ما عندك لهلق).
