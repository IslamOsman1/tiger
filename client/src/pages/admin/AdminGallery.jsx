import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Edit3, Plus, Trash2, X } from 'lucide-react';
import api from '../../api/client.js';

const emptyForm = { title: '', description: '', category: 'animal', featured: false, image: null };

export default function AdminGallery() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    const { data } = await api.get('/api/gallery');
    setItems(data);
  };

  useEffect(() => { load().catch(() => toast.error('تعذر تحميل المعرض')); }, []);

  const reset = () => {
    setForm(emptyForm);
    setEditing(null);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append('title', form.title);
      fd.append('description', form.description);
      fd.append('category', form.category);
      fd.append('featured', form.featured);
      if (form.image) fd.append('image', form.image);

      if (editing) {
        await api.put(`/api/gallery/${editing._id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
        toast.success('تم تعديل الصورة');
      } else {
        await api.post('/api/gallery', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
        toast.success('تم إضافة الصورة');
      }
      reset();
      load();
    } catch (error) {
      toast.error(error.response?.data?.message || 'حدث خطأ');
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    if (!confirm('هل تريد حذف هذه الصورة؟')) return;
    await api.delete(`/api/gallery/${id}`);
    toast.success('تم الحذف');
    load();
  };

  const startEdit = (item) => {
    setEditing(item);
    setForm({ title: item.title, description: item.description || '', category: item.category || 'animal', featured: Boolean(item.featured), image: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black">إدارة المعرض</h2>
          <p className="mt-2 text-white/50">أضف صور الأعمال وارفعها على Cloudinary.</p>
        </div>
      </div>

      <form onSubmit={submit} className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 md:p-7">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-2xl font-black">{editing ? 'تعديل صورة' : 'إضافة صورة جديدة'}</h3>
          {editing && <button type="button" onClick={reset} className="rounded-xl bg-white/10 p-2"><X /></button>}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-white/60">اسم التصميم</label>
            <input className="input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-white/60">القسم</label>
            <select className="input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
              <option value="animal">نقشات حيوانات</option>
              <option value="flowers">زهور ونباتات</option>
              <option value="abstract">مودرن</option>
              <option value="sublimation">سبليميشن</option>
              <option value="heatpress">كبس حراري</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-bold text-white/60">الوصف</label>
            <textarea className="input min-h-28" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-white/60">الصورة</label>
            <input className="input" type="file" accept="image/*" onChange={(e) => setForm({ ...form, image: e.target.files?.[0] })} required={!editing} />
          </div>
          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
            <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} />
            <span className="font-bold">عرض في الرئيسية</span>
          </label>
        </div>
        <button disabled={loading} className="btn-primary mt-5"><Plus size={18} /> {loading ? 'جاري الحفظ...' : editing ? 'حفظ التعديل' : 'إضافة الصورة'}</button>
      </form>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item._id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05]">
            <img src={item.imageUrl} alt={item.title} className="h-64 w-full object-cover" />
            <div className="p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="text-xs text-tiger-300">{item.category}</p>
                </div>
                {item.featured && <span className="rounded-full bg-tiger-400 px-3 py-1 text-xs font-black text-black">مميز</span>}
              </div>
              <p className="line-clamp-2 text-sm leading-6 text-white/55">{item.description}</p>
              <div className="mt-5 flex gap-2">
                <button onClick={() => startEdit(item)} className="flex-1 rounded-2xl bg-white/10 px-4 py-3 font-bold hover:bg-white/15"><Edit3 className="mx-auto" size={18} /></button>
                <button onClick={() => remove(item._id)} className="flex-1 rounded-2xl bg-red-500/15 px-4 py-3 font-bold text-red-200 hover:bg-red-500/25"><Trash2 className="mx-auto" size={18} /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
