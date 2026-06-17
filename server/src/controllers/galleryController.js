import Gallery from '../models/Gallery.js';
import { deleteFromCloudinary, uploadBufferToCloudinary } from '../utils/cloudinaryUpload.js';

export async function getGallery(req, res) {
  const items = await Gallery.find().sort({ featured: -1, createdAt: -1 });
  res.json(items);
}

export async function createGalleryItem(req, res) {
  const { title, description, category, featured } = req.body;
  if (!title) return res.status(400).json({ message: 'اسم التصميم مطلوب' });
  if (!req.file) return res.status(400).json({ message: 'الصورة مطلوبة' });

  const uploaded = await uploadBufferToCloudinary(req.file.buffer);
  const item = await Gallery.create({
    title,
    description,
    category,
    featured: featured === 'true' || featured === true,
    imageUrl: uploaded.secure_url,
    publicId: uploaded.public_id
  });

  res.status(201).json(item);
}

export async function updateGalleryItem(req, res) {
  const item = await Gallery.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'الصورة غير موجودة' });

  const { title, description, category, featured } = req.body;
  item.title = title ?? item.title;
  item.description = description ?? item.description;
  item.category = category ?? item.category;
  if (featured !== undefined) item.featured = featured === 'true' || featured === true;

  if (req.file) {
    if (item.publicId) await deleteFromCloudinary(item.publicId);
    const uploaded = await uploadBufferToCloudinary(req.file.buffer);
    item.imageUrl = uploaded.secure_url;
    item.publicId = uploaded.public_id;
  }

  await item.save();
  res.json(item);
}

export async function deleteGalleryItem(req, res) {
  const item = await Gallery.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'الصورة غير موجودة' });
  if (item.publicId) await deleteFromCloudinary(item.publicId);
  await item.deleteOne();
  res.json({ message: 'تم حذف الصورة' });
}
