import multer from 'multer';

const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith('image/')) cb(null, true);
  else cb(new Error('يسمح برفع الصور فقط'), false);
}

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter
});
