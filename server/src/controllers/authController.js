import jwt from 'jsonwebtoken';

export async function login(req, res) {
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@tiger.com';
  const adminPassword = process.env.ADMIN_PASSWORD || '123456';

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ message: 'بيانات الدخول غير صحيحة' });
  }

  const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET || 'dev_secret', { expiresIn: '7d' });
  res.json({ token, admin: { email, role: 'admin' } });
}
