import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Lock, Mail } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: 'admin@tiger.com', password: '123456' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form.email, form.password);
      toast.success('تم تسجيل الدخول بنجاح');
      navigate('/admin');
    } catch (error) {
      toast.error(error.response?.data?.message || 'بيانات الدخول غير صحيحة');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="ar-pattern flex min-h-screen items-center justify-center bg-black p-4 text-white">
      <form onSubmit={submit} className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="logo-glow-ring mx-auto mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl border border-[#9e7a44]/35">
            <img src="/logo.png" alt="Tiger Textile logo" className="h-full w-full object-cover" />
          </div>
          <h1 className="text-3xl font-black">لوحة التحكم</h1>
          <p className="mt-2 text-sm text-white/50">إدارة المعرض والخدمات وبيانات التواصل</p>
        </div>

        <label className="mb-2 block text-sm font-bold text-white/70">البريد الإلكتروني</label>
        <div className="relative mb-4">
          <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35" size={18} />
          <input className="input pr-12" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" required />
        </div>

        <label className="mb-2 block text-sm font-bold text-white/70">كلمة المرور</label>
        <div className="relative mb-6">
          <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35" size={18} />
          <input className="input pr-12" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" required />
        </div>

        <button disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? 'جاري الدخول...' : 'تسجيل الدخول'}
        </button>
      </form>
    </main>
  );
}
