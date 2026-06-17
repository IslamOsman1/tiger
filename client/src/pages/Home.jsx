import { Link } from 'react-router-dom';
import { ArrowLeft, BadgeCheck, Clock3, Coins, PhoneCall, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import GalleryCard from '../components/GalleryCard.jsx';
import WhatsAppFloat from '../components/WhatsAppFloat.jsx';
import usePublicData from '../hooks/usePublicData.js';

const heroStats = [
  ['+500', 'تصميم منفذ'],
  ['24h', 'سرعة رد'],
  ['100%', 'جودة ثابتة']
];

const featureCards = [
  [Clock3, 'سرعة في التنفيذ', 'نستلم التفاصيل ونجهز التصميم ونبدأ التنفيذ بأسرع وقت ممكن.'],
  [Coins, 'تكلفة مناسبة', 'حلول مناسبة للتجار وأصحاب المشاريع بدون التأثير على الجودة.'],
  [BadgeCheck, 'جودة ورضاء العميل', 'هدفنا وصول العميل للصورة المثالية من أول مرة.']
];

export default function Home() {
  const { services, gallery, settings } = usePublicData();
  const featured = gallery.filter((item) => item.featured).slice(0, 4);
  const shownGallery = featured.length ? featured : gallery.slice(0, 4);
  const whatsapp = (settings?.whatsapp || '+201009998714').replace(/[^0-9]/g, '');
  const heroImage = '/samples/1528CEEA-51AB-4C5C-9883-57579C6E5E6D.jpeg';
  const secondaryImage = '/samples/EA168059-F38D-4F45-84F8-D9DF9C97ACD6.jpeg';

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar settings={settings} />
      <WhatsAppFloat phone={settings?.whatsapp} />

      <section className="ar-pattern relative overflow-hidden pt-20 sm:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(245,159,0,.18),transparent_32%),linear-gradient(180deg,rgba(0,0,0,.15),#050505_95%)]" />
        <div className="container-main section-padding relative py-6 sm:py-14">
          <div className="hero-enter hero-stagger-1 mx-auto max-w-xl lg:hidden">
            <div className="hero-glow-frame hero-float overflow-hidden rounded-[1.6rem] border border-[#8d6d3b]/50 bg-[#161311]/95 p-2.5 shadow-[0_24px_80px_rgba(0,0,0,.42)] sm:rounded-[1.9rem] sm:p-3">
              <div className="rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.015))] p-3 sm:rounded-[1.5rem] sm:p-3.5">
                <div className="flex items-center justify-between gap-2.5 rounded-[1rem] border border-white/10 bg-white/[0.03] px-2.5 py-2 sm:gap-3 sm:rounded-[1.2rem] sm:px-3 sm:py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[0.8rem] bg-tiger-400/15 text-tiger-300 sm:h-10 sm:w-10 sm:rounded-[0.9rem]">
                      <Sparkles size={14} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#d9bb84] sm:text-[10px]">Tiger Textile</p>
                      <p className="mt-0.5 text-[10px] text-white/55 sm:text-[11px]">Premium Printing Studio</p>
                    </div>
                  </div>
                  <div className="logo-glow-ring flex h-10 w-10 items-center justify-center overflow-hidden rounded-[0.85rem] border border-[#9e7a44]/35 sm:h-11 sm:w-11 sm:rounded-[0.95rem]">
                    <img src="/logo.png" alt="Tiger Textile logo" className="h-full w-full object-cover" />
                  </div>
                </div>

                <div className="mt-3.5 text-center sm:mt-4">
                  <h1 className="text-[1.15rem] font-black leading-[1.45] text-[#f7efe3] sm:text-[1.45rem] sm:leading-[1.5]">
                    {settings?.tagline || 'طباعة منسوجات دقيقة بلمسة عرض أنيقة'}
                  </h1>
                  <p className="mx-auto mt-2 max-w-sm text-[11px] leading-5 text-white/60 sm:text-[12px] sm:leading-6">
                    تشخيص واضح، تنفيذ مدروس، وعرض بصري مرتب للمشاريع والبراندات على مختلف الخامات.
                  </p>
                </div>

                <div className="mt-3.5 overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/20 sm:mt-4 sm:rounded-[1.45rem]">
                  <div className="relative">
                    <img src={heroImage} alt="Textile printing" className="h-32 w-full object-cover sm:h-40" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,.78)_100%)]" />
                    <div className="absolute inset-x-3 bottom-3">
                      <div className="flex items-end justify-between gap-2">
                        <div className="rounded-full bg-black/40 px-2 py-1 text-[9px] font-bold text-white backdrop-blur sm:px-2.5 sm:text-[10px]">
                          جودة + سرعة
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9bb84] sm:text-[10px]">Featured Work</p>
                          <p className="mt-1 text-[11px] font-black leading-4 text-white sm:text-xs sm:leading-5">حلول طباعة ترفع حضور البراند</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
                  {heroStats.map(([num, label]) => (
                    <div key={label} className="rounded-[0.9rem] border border-white/10 bg-white/[0.035] px-1.5 py-2 text-center sm:rounded-[1rem] sm:px-2 sm:py-2.5">
                      <p className="text-[12px] font-black text-[#dfc388] sm:text-sm">{num}</p>
                      <p className="mt-1 text-[9px] leading-3.5 text-white/55 sm:text-[10px] sm:leading-4">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 grid gap-2.5 sm:mt-4 sm:gap-3">
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.035] p-3 sm:rounded-[1.3rem] sm:p-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9bb84]">Care</p>
                        <h3 className="mt-1 text-base font-black text-[#f7efe3] sm:text-lg">استشارة واضحة</h3>
                      </div>
                      <div className="rounded-full bg-tiger-400/10 px-2 py-1 text-[9px] font-bold text-tiger-300 sm:px-2.5 sm:text-[10px]">
                        تنفيذ
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] leading-5 text-white/55 sm:text-[12px] sm:leading-6">
                      نوضح لك الخامة، المقاس، وطريقة الطباعة الأنسب قبل البدء.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/[0.035] sm:rounded-[1.3rem]">
                    <img src={secondaryImage} alt="Printing showcase" className="h-24 w-full object-cover sm:h-28" />
                    <div className="p-3 sm:p-3.5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9bb84]">Booking</p>
                          <h3 className="mt-1 text-base font-black text-[#f7efe3] sm:text-lg">مواعيد مرنة</h3>
                        </div>
                        <div className="rounded-full bg-white/8 px-2 py-1 text-[9px] font-bold text-white/70 sm:px-2.5 sm:text-[10px]">
                          الحجز
                        </div>
                      </div>
                      <p className="mt-2 text-[11px] leading-5 text-white/55 sm:text-[12px] sm:leading-6">
                        ابدأ بسرعة وحدد الموعد الأنسب لاستلام وتنفيذ طلبك.
                      </p>
                      <Link className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-black text-tiger-300 sm:mt-3 sm:text-[12px]" to="/gallery">
                        عرض الأعمال <ArrowLeft size={15} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 flex flex-col gap-2 sm:mt-4 sm:gap-2.5">
                  <a className="btn-primary w-full justify-center rounded-[0.9rem] px-3.5 py-2.5 text-xs sm:rounded-[1rem] sm:px-4 sm:py-3 sm:text-sm" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                    <PhoneCall size={16} /> اطلب تصميم مبدئي
                  </a>
                  <Link className="btn-secondary w-full justify-center rounded-[0.9rem] px-3.5 py-2.5 text-xs sm:rounded-[1rem] sm:px-4 sm:py-3 sm:text-sm" to="/gallery">
                    شاهد الأعمال <ArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden min-h-[calc(100vh-5rem)] items-center gap-10 lg:grid lg:grid-cols-[1fr_.9fr]">
            <div className="hero-enter hero-stagger-1 text-right">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-tiger-400/30 bg-tiger-400/10 px-4 py-2 text-sm font-bold text-tiger-200">
                <Sparkles size={18} /> تنفيذ سريع وجودة عالية
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
                {settings?.tagline || 'تصميم وطباعة المنسوجات بأسرع وقت وأفضل تكلفة'}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-white/65">
                شركة متخصصة في تصميم وطباعة القماش، السبلميشن، الكبس الحراري، وتنفيذ تصميمات مخصصة لحساب الغير مع متابعة دقيقة للجودة.
              </p>
              <div className="mt-8 flex gap-3">
                <a className="btn-primary" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                  <PhoneCall size={20} /> اطلب تصميم مبدئي
                </a>
                <Link className="btn-secondary" to="/gallery">
                  شاهد الأعمال <ArrowLeft size={18} />
                </Link>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map(([num, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <p className="text-3xl font-black text-tiger-300">{num}</p>
                    <p className="mt-1 text-sm text-white/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-enter hero-stagger-2 relative">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-tiger-400/30 blur-3xl" />
              <div className="hero-glow-frame hero-float relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
                <img src={heroImage} alt="Textile printing" className="h-[520px] w-full rounded-[2.4rem] object-cover" />
                <div className="absolute bottom-8 right-8 rounded-3xl bg-black/70 p-5 backdrop-blur-xl">
                  <p className="text-sm text-white/55">خدمة متكاملة</p>
                  <p className="text-2xl font-black text-tiger-300">Design + Print</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-14 sm:py-20">
        <div className="container-main">
          <div className="mb-8 flex flex-col justify-between gap-3 md:mb-10 md:gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-black text-tiger-300 sm:mb-3">خدماتنا</p>
              <h2 className="text-2xl font-black sm:text-5xl">كل ما تحتاجه لطباعة المنسوجات</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              من أول التصميم حتى تنفيذ الطباعة، نجهز لك حلول مناسبة للأقمشة والبراندات والمشاريع التجارية.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.filter((s) => s.isActive !== false).slice(0, 4).map((service, index) => (
              <ServiceCard key={service._id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.03] py-14 sm:py-20">
        <div className="container-main">
          <div className="mb-8 flex flex-col justify-between gap-3 md:mb-10 md:gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-black text-tiger-300 sm:mb-3">المعرض</p>
              <h2 className="text-2xl font-black sm:text-5xl">نماذج من الطباعة والتصميم</h2>
            </div>
            <Link className="btn-secondary" to="/gallery">
              كل الأعمال <ArrowLeft size={18} />
            </Link>
          </div>
          <div className="grid auto-rows-fr gap-5 md:grid-cols-4">
            {shownGallery.slice(0, 4).map((item, index) => (
              <GalleryCard key={item._id} item={item} large={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-14 sm:py-20">
        <div className="container-main grid gap-6 md:grid-cols-3">
          {featureCards.map(([Icon, title, text]) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-tiger-gradient p-5 sm:rounded-[2rem] sm:p-7">
              <Icon className="mb-4 text-tiger-300 sm:mb-6" size={28} />
              <h3 className="mb-2 text-xl font-black sm:mb-3 sm:text-2xl">{title}</h3>
              <p className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding pb-16 sm:pb-20">
        <div className="container-main overflow-hidden rounded-[2rem] border border-tiger-400/25 bg-tiger-400 p-6 text-black shadow-glow sm:rounded-[3rem] sm:p-8 md:p-12">
          <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-2xl font-black sm:text-5xl">جاهز تبدأ تصميمك؟</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-black/70 sm:mt-4 sm:text-base">
                ابعت تفاصيل المشروع والصور المطلوبة، وسنراجع البيانات ونرسل لك تصميم مبدئي مناسب.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              تواصل واتساب <PhoneCall size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer settings={settings} />
    </main>
  );
}
