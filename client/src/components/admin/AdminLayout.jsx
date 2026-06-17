import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import { Images, LayoutDashboard, LogOut, Menu, Settings, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';

const links = [
  { to: '/admin', label: 'الرئيسية', icon: LayoutDashboard },
  { to: '/admin/gallery', label: 'المعرض', icon: Images },
  { to: '/admin/services', label: 'الخدمات', icon: Sparkles },
  { to: '/admin/settings', label: 'الإعدادات', icon: Settings }
];

export default function AdminLayout() {
  const [open, setOpen] = useState(false);
  const { logout, admin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <aside className={`fixed inset-y-0 right-0 z-50 w-72 border-l border-white/10 bg-black p-5 transition lg:translate-x-0 ${open ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="logo-glow-ring flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#9e7a44]/35">
              <img src="/logo.png" alt="Tiger Textile logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-black">Tiger Admin</p>
              <p className="text-xs text-white/45">لوحة التحكم</p>
            </div>
          </Link>
          <button onClick={() => setOpen(false)} className="lg:hidden"><X /></button>
        </div>
        <nav className="grid gap-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/admin'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 font-bold transition ${isActive ? 'bg-tiger-400 text-black' : 'text-white/65 hover:bg-white/10 hover:text-white'}`}
            >
              <Icon size={20} /> {label}
            </NavLink>
          ))}
        </nav>
        <button onClick={handleLogout} className="absolute bottom-5 right-5 left-5 flex items-center justify-center gap-2 rounded-2xl bg-red-500/10 px-4 py-3 font-bold text-red-200 hover:bg-red-500/20">
          <LogOut size={18} /> خروج
        </button>
      </aside>

      {open && <div className="fixed inset-0 z-40 bg-black/70 lg:hidden" onClick={() => setOpen(false)} />}

      <div className="lg:pr-72">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070707]/80 backdrop-blur-xl">
          <div className="flex h-18 items-center justify-between px-4 py-4 lg:px-8">
            <button onClick={() => setOpen(true)} className="rounded-2xl border border-white/10 p-3 lg:hidden"><Menu /></button>
            <div>
              <p className="text-sm text-white/45">أهلاً بك</p>
              <h1 className="text-xl font-black">{admin?.email || 'Admin'}</h1>
            </div>
            <Link className="btn-secondary hidden py-2 text-sm md:inline-flex" to="/">معاينة الموقع</Link>
          </div>
        </header>
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
