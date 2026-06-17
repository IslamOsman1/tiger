import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';

const navItems = [
  { label: 'الرئيسية', to: '/' },
  { label: 'المعرض', to: '/gallery' },
  { label: 'تواصل معنا', to: '/contact' }
];

export default function Navbar({ settings }) {
  const [open, setOpen] = useState(false);
  const whatsapp = settings?.whatsapp || '+201009998714';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
      <div className="container-main section-padding flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
          <div className="logo-glow-ring flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#9e7a44]/35 shadow-glow sm:h-12 sm:w-12 sm:rounded-2xl">
            <img src="/logo.png" alt="Tiger Textile logo" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-base font-black leading-none text-[#9e7a44] sm:text-lg">Tiger Textile</p>
            <p className="text-xs text-[#7f6540]">لطباعة المنسوجات</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm font-bold transition ${isActive ? 'bg-tiger-400 text-black' : 'text-white/75 hover:bg-white/10 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn-primary py-2.5" href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
            <PhoneCall size={18} /> واتساب
          </a>
        </div>

        <button className="rounded-xl border border-white/10 p-2.5 lg:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="section-padding border-t border-white/10 bg-black/95 pb-5 lg:hidden">
          <div className="container-main grid gap-2 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 text-sm font-bold ${isActive ? 'bg-tiger-400 text-black' : 'bg-white/5 text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a className="btn-primary mt-2" href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
              اطلب تصميمك الآن
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
