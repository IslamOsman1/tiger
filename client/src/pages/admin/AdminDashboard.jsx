import { useEffect, useState } from 'react';
import { Images, Phone, Settings, Sparkles } from 'lucide-react';
import api from '../../api/client.js';
import StatCard from '../../components/admin/StatCard.jsx';
import { defaultGallery, defaultServices, defaultSettings } from '../../data/fallback.js';

export default function AdminDashboard() {
  const [data, setData] = useState({ gallery: defaultGallery, services: defaultServices, settings: defaultSettings });

  useEffect(() => {
    async function load() {
      const [gallery, services, settings] = await Promise.allSettled([
        api.get('/api/gallery'),
        api.get('/api/services'),
        api.get('/api/settings')
      ]);
      setData({
        gallery: gallery.status === 'fulfilled' ? gallery.value.data : defaultGallery,
        services: services.status === 'fulfilled' ? services.value.data : defaultServices,
        settings: settings.status === 'fulfilled' ? settings.value.data : defaultSettings
      });
    }
    load();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-black">الرئيسية</h2>
        <p className="mt-2 text-white/50">نظرة عامة على محتوى الموقع.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={Images} label="صور المعرض" value={data.gallery?.length || 0} />
        <StatCard icon={Sparkles} label="الخدمات" value={data.services?.length || 0} />
        <StatCard icon={Phone} label="رقم التواصل" value={data.settings?.phone ? '✓' : '-'} />
        <StatCard icon={Settings} label="حالة الموقع" value="Active" />
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
        <h3 className="mb-4 text-2xl font-black">آخر الصور</h3>
        <div className="grid gap-4 md:grid-cols-4">
          {(data.gallery || []).slice(0, 4).map((item) => (
            <div key={item._id} className="overflow-hidden rounded-3xl bg-black/40">
              <img src={item.imageUrl} alt={item.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <p className="font-black">{item.title}</p>
                <p className="text-xs text-white/40">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
