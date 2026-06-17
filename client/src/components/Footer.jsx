import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ settings }) {
  return (
    <footer className="border-t border-white/10 bg-black py-8 sm:py-10">
      <div className="container-main section-padding grid gap-6 sm:gap-8 md:grid-cols-[1.4fr_.8fr_.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="logo-glow-ring flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#9e7a44]/35 sm:h-12 sm:w-12 sm:rounded-2xl">
              <img src="/logo.png" alt="Tiger Textile logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-black sm:text-xl">{settings?.companyName || 'Tiger Textile Printing'}</h3>
              <p className="text-xs text-white/55 sm:text-sm">تصميم وطباعة المنسوجات</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            نقدم خدمات تصميم وطباعة القماش والسبلميشن والكبس الحراري بجودة عالية، تنفيذ سريع، وأسعار مناسبة للتجار والمصانع وأصحاب البراندات.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-black text-tiger-300 sm:mb-4 sm:text-base">روابط سريعة</h4>
          <div className="grid gap-2 text-sm text-white/65">
            <Link to="/">الرئيسية</Link>
            <Link to="/gallery">المعرض</Link>
            <Link to="/contact">تواصل معنا</Link>
            <Link to="/admin/login">لوحة التحكم</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-black text-tiger-300 sm:mb-4 sm:text-base">تواصل</h4>
          <div className="grid gap-2.5 text-xs text-white/65 sm:gap-3 sm:text-sm">
            <p className="flex items-center gap-2"><Phone size={16} /> {settings?.phone}</p>
            <p className="flex items-center gap-2"><Mail size={16} /> {settings?.email}</p>
            <p className="flex items-center gap-2"><MapPin size={16} /> {settings?.address}</p>
            <div className="flex gap-2 pt-2">
              {settings?.facebook && <a className="rounded-xl bg-white/10 p-2" href={settings.facebook} target="_blank" rel="noreferrer"><Facebook size={18} /></a>}
              {settings?.instagram && <a className="rounded-xl bg-white/10 p-2" href={settings.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /></a>}
            </div>
          </div>
        </div>
      </div>
      <div className="container-main section-padding mt-6 border-t border-white/10 pt-5 text-center text-xs text-white/40 sm:mt-8 sm:pt-6 sm:text-sm">
        © {new Date().getFullYear()} Tiger Textile Printing. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
