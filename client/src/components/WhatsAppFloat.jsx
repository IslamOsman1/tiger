import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat({ phone }) {
  const normalized = (phone || '+201009998714').replace(/[^0-9]/g, '');
  return (
    <a
      href={`https://wa.me/${normalized}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
