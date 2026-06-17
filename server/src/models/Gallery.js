import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  category: { type: String, default: 'design', index: true },
  imageUrl: { type: String, required: true },
  publicId: { type: String, default: '' },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Gallery', gallerySchema);
