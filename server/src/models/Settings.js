import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  companyName: { type: String, default: 'Tiger Textile Printing' },
  tagline: { type: String, default: 'تصميم وطباعة المنسوجات بأسرع وقت وأفضل تكلفة' },
  phone: { type: String, default: '+20 100 999 8714' },
  whatsapp: { type: String, default: '+201009998714' },
  email: { type: String, default: 'info@tiger-textile.com' },
  address: { type: String, default: 'مصر' },
  facebook: { type: String, default: '' },
  instagram: { type: String, default: '' },
  heroImage: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('Settings', settingsSchema);
