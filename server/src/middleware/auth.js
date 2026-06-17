import jwt from 'jsonwebtoken';

export function protect(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'غير مصرح بالدخول' });
  }

  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev_secret');
    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'جلسة الدخول غير صالحة' });
  }
}
