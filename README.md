# Tiger Textile Printing

موقع كامل Full-stack لشركة تصميم وطباعة المنسوجات، به واجهة أمامية عصرية ولوحة تحكم لإدارة الصور والخدمات وبيانات التواصل.

## التقنيات المستخدمة

- Frontend: Vite + React + Tailwind CSS
- Dashboard: React Router + Axios + Toast Notifications
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Images: Cloudinary
- Auth: JWT Admin Login

## هيكل المشروع

```txt
tiger-textile/
├─ client/        واجهة الموقع ولوحة التحكم
├─ server/        API + MongoDB + Cloudinary
├─ package.json   تشغيل المشروع كاملًا
└─ README.md
```

## التشغيل محليًا

### 1) تثبيت المكتبات

```bash
npm run install:all
```

### 2) إعداد ملف البيئة للـ Backend

انسخ الملف:

```bash
cp server/.env.example server/.env
```

ثم عدّل القيم:

```env
PORT=5000
MONGO_URI=mongodb+srv://USER:PASS@cluster.mongodb.net/tiger-textile
JWT_SECRET=put_a_long_secret_here
ADMIN_EMAIL=admin@tiger.com
ADMIN_PASSWORD=123456
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:5173
```

### 3) إعداد ملف البيئة للـ Frontend

انسخ الملف:

```bash
cp client/.env.example client/.env
```

القيمة المحلية:

```env
VITE_API_URL=http://localhost:5000
```

### 4) تشغيل المشروع

```bash
npm run dev
```

الموقع يعمل على:

```txt
http://localhost:5173
```

الـ API يعمل على:

```txt
http://localhost:5000
```

لوحة التحكم:

```txt
http://localhost:5173/admin/login
```

بيانات الدخول الافتراضية من `.env`:

```txt
Email: admin@tiger.com
Password: 123456
```

## ملء بيانات تجريبية

بعد ضبط MongoDB و Cloudinary تستطيع تشغيل Seed للخدمات والإعدادات:

```bash
npm run seed
```

## Deploy سريع

### Backend على Render

- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`
- أضف Environment Variables الموجودة في `server/.env.example`
- اجعل `CLIENT_URL` هو رابط Vercel بعد نشر الواجهة

### Frontend على Vercel

- Root Directory: `client`
- Build Command: `npm run build`
- Output Directory: `dist`
- أضف Environment Variable:

```env
VITE_API_URL=https://your-render-backend.onrender.com
```

## المميزات الجاهزة

- تصميم عربي RTL حديث ومتجاوب
- معرض صور مع فلاتر
- خدمات الشركة
- صفحة تواصل وواتساب
- لوحة تحكم للموبايل والديسكتوب
- رفع الصور على Cloudinary
- CRUD للمعرض والخدمات
- إدارة بيانات التواصل
- حماية Routes لوحة التحكم بالـ JWT
