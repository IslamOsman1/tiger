import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Service from './models/Service.js';
import Settings from './models/Settings.js';

dotenv.config();
await connectDB();

await Service.deleteMany({});
await Service.insertMany([
  {
    title: 'تصميم وطباعة المنسوجات',
    description: 'تصميمات احترافية جاهزة للطباعة على مختلف أنواع الأقمشة بجودة عالية وتفاصيل واضحة.',
    icon: 'Palette',
    order: 1,
    isActive: true
  },
  {
    title: 'طباعة السبليميشن',
    description: 'ألوان ثابتة ومشرقة مناسبة للطرح، الملابس، الديكور، والمفروشات.',
    icon: 'Sparkles',
    order: 2,
    isActive: true
  },
  {
    title: 'الكبس الحراري',
    description: 'تنفيذ سريع ودقيق مع متابعة الجودة في كل مرحلة من مراحل الطباعة.',
    icon: 'Flame',
    order: 3,
    isActive: true
  },
  {
    title: 'طباعة لحساب الغير',
    description: 'خدمة مخصصة للمصانع والتجار وأصحاب البراندات بأفضل تكلفة وأسرع وقت.',
    icon: 'Factory',
    order: 4,
    isActive: true
  }
]);

await Settings.deleteMany({});
await Settings.create({
  companyName: 'Tiger Textile Printing',
  tagline: 'تصميم وطباعة المنسوجات بأسرع وقت وأفضل تكلفة',
  phone: '+20 100 999 8714',
  whatsapp: '+201009998714',
  email: 'info@tiger-textile.com',
  address: 'مصر'
});

console.log('Seed completed successfully');
process.exit(0);
