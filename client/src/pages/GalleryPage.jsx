import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import GalleryCard from '../components/GalleryCard.jsx';
import WhatsAppFloat from '../components/WhatsAppFloat.jsx';
import usePublicData from '../hooks/usePublicData.js';

const categoryLabels = {
  all: 'الكل',
  animal: 'نقشات حيوانات',
  flowers: 'زهور ونباتات',
  abstract: 'مودرن',
  sublimation: 'سبليميشن',
  heatpress: 'كبس حراري'
};

export default function GalleryPage() {
  const { gallery, settings } = usePublicData();
  const [category, setCategory] = useState('all');
  const categories = useMemo(() => ['all', ...new Set(gallery.map((item) => item.category).filter(Boolean))], [gallery]);
  const filtered = category === 'all' ? gallery : gallery.filter((item) => item.category === category);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar settings={settings} />
      <WhatsAppFloat phone={settings?.whatsapp} />
      <section className="section-padding ar-pattern pt-32 pb-14">
        <div className="container-main">
          <p className="mb-4 font-black text-tiger-300">معرض الأعمال</p>
          <h1 className="max-w-3xl text-4xl font-black sm:text-6xl">تصميمات وأقمشة مطبوعة بجودة عالية</h1>
          <p className="mt-5 max-w-2xl leading-8 text-white/60">تصفح نماذج من النقشات والتصميمات، ويمكنك إضافة المزيد من لوحة التحكم بسهولة.</p>
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="container-main">
          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-black transition ${category === cat ? 'bg-tiger-400 text-black' : 'bg-white/10 text-white/70 hover:bg-white/15'}`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => <GalleryCard key={item._id} item={item} />)}
          </div>
        </div>
      </section>
      <Footer settings={settings} />
    </main>
  );
}
