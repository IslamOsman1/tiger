import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Edit3, Plus, Trash2, X } from 'lucide-react';
import api from '../../api/client.js';

const emptyForm = { title: '', description: '', icon: 'Sparkles', order: 1, isActive: true };
const icons = ['Sparkles', 'Palette', 'Flame', 'Factory', 'Scissors', 'Shirt', 'Truck', 'BadgeCheck'];

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const { data } = await api.get('/api/services');
    setServices(data);
  };

  useEffect(() => { load().catch(() => toast.error('تعذر تحميل الخدمات')); }, []);

  const reset = () => { setForm(emptyForm); setEditing(null); };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await api.put(`/api/services/${editing._id}`, form);
        toast.success('تم تعديل الخدمة');
      } else {
        await api.post('/api/services', form);
        toast.success('تم إضافة الخدمة');
      }
      reset();
      load();
    } catch (error) {
      toast.error(error.response?.data?.message || 'حدث خطأ');
    }
  };

  const remove = async (id) => {
    if (!confirm('هل تريد حذف الخدمة؟')) return;
    await api.delete(`/api/services/${id}`);
    toast.success('تم الحذف');
    load();
  };

  const startEdit = (service) => {
    setEditing(service);
    setForm({ title: service.title, description: service.description, icon: service.icon || 'Sparkles', order: service.order || 1, isActive: service.isActive !== false });
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-black">إدارة الخدمات</h2>
        <p className="mt-2 text-white/50">أضف أو عدّل خدمات الشركة المعروضة في الموقع.</p>
      </div>

      <form onSubmit={submit} className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 md:p-7">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-2xl font-black">{editing ? 'تعديل خدمة' : 'إضافة خدمة'}</h3>
          {editing && <button type="button" onClick={reset} className="rounded-xl bg-white/10 p-2"><X /></button>}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-white/60">اسم الخدمة</label>
            <input className="input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-white/60">الأيقونة</label>
            <select className="input" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })}>
              {icons.map((icon) => <option key={icon} value={icon}>{icon}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-white/60">الترتيب</label>
            <input className="input" type="number" value={form.order} onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} />
          </div>
          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />
            <span className="font-bold">الخدمة فعالة</span>
          </label>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-bold text-white/60">الوصف</label>
            <textarea className="input min-h-28" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
          </div>
        </div>
        <button className="btn-primary mt-5"><Plus size={18} /> {editing ? 'حفظ التعديل' : 'إضافة الخدمة'}</button>
      </form>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service._id} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-black">{service.title}</h3>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">#{service.order}</span>
            </div>
            <p className="min-h-16 leading-7 text-white/55">{service.description}</p>
            <div className="mt-5 flex gap-2">
              <button onClick={() => startEdit(service)} className="flex-1 rounded-2xl bg-white/10 px-4 py-3 font-bold hover:bg-white/15"><Edit3 className="mx-auto" size={18} /></button>
              <button onClick={() => remove(service._id)} className="flex-1 rounded-2xl bg-red-500/15 px-4 py-3 font-bold text-red-200 hover:bg-red-500/25"><Trash2 className="mx-auto" size={18} /></button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
