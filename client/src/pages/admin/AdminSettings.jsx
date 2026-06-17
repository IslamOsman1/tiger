import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../api/client.js';
import { defaultSettings } from '../../data/fallback.js';

export default function AdminSettings() {
  const [form, setForm] = useState(defaultSettings);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get('/api/settings').then(({ data }) => setForm({ ...defaultSettings, ...data })).catch(() => {});
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.put('/api/settings', form);
      setForm({ ...defaultSettings, ...data });
      toast.success('تم حفظ الإعدادات');
    } catch (error) {
      toast.error(error.response?.data?.message || 'حدث خطأ');
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    ['companyName', 'اسم الشركة'],
    ['tagline', 'الجملة الرئيسية'],
    ['phone', 'رقم الهاتف'],
    ['whatsapp', 'رقم واتساب'],
    ['email', 'البريد الإلكتروني'],
    ['address', 'العنوان'],
    ['facebook', 'رابط فيسبوك'],
    ['instagram', 'رابط إنستجرام'],
    ['heroImage', 'رابط صورة الهيرو']
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-black">إعدادات الموقع</h2>
        <p className="mt-2 text-white/50">تعديل اسم الشركة وبيانات التواصل وروابط السوشيال.</p>
      </div>

      <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 md:p-7">
        <div className="grid gap-4 md:grid-cols-2">
          {fields.map(([key, label]) => (
            <div key={key} className={key === 'tagline' || key === 'heroImage' ? 'md:col-span-2' : ''}>
              <label className="mb-2 block text-sm font-bold text-white/60">{label}</label>
              <input className="input" value={form[key] || ''} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
            </div>
          ))}
        </div>
        <button disabled={loading} className="btn-primary mt-6 disabled:opacity-60">{loading ? 'جاري الحفظ...' : 'حفظ الإعدادات'}</button>
      </form>
    </div>
  );
}
