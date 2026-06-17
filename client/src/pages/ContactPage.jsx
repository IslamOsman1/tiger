import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppFloat from '../components/WhatsAppFloat.jsx';
import usePublicData from '../hooks/usePublicData.js';

export default function ContactPage() {
  const { settings } = usePublicData();
  const whatsapp = (settings?.whatsapp || '+201009998714').replace(/[^0-9]/g, '');

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar settings={settings} />
      <WhatsAppFloat phone={settings?.whatsapp} />
      <section className="section-padding ar-pattern pt-32 pb-20">
        <div className="container-main grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-4 font-black text-tiger-300">تواصل معنا</p>
            <h1 className="text-4xl font-black sm:text-6xl">ابعت تفاصيل مشروعك وهنرد عليك بسرعة</h1>
            <p className="mt-5 leading-8 text-white/60">ارسل نوع القماش، المقاس، عدد الأمتار، التصميم المطلوب، وصورة مرجعية إن وجدت.</p>
            <a className="btn-primary mt-8" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle /> واتساب مباشر</a>
          </div>

          <div className="rounded-[3rem] border border-white/10 bg-white/[0.06] p-6 md:p-8">
            <div className="grid gap-4">
              {[
                [Phone, 'الهاتف', settings?.phone],
                [MessageCircle, 'واتساب', settings?.whatsapp],
                [Mail, 'البريد الإلكتروني', settings?.email],
                [MapPin, 'العنوان', settings?.address]
              ].map(([Icon, label, value]) => (
                <div key={label} className="rounded-3xl bg-black/40 p-5">
                  <div className="mb-3 flex items-center gap-3 text-tiger-300"><Icon size={22} /><span className="font-black">{label}</span></div>
                  <p className="text-white/70">{value || 'غير محدد'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer settings={settings} />
    </main>
  );
}
