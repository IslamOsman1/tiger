import { ArrowUpLeft } from 'lucide-react';
import { getIcon } from '../utils/icons.js';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = getIcon(service.icon);
  return (
    <article className="card-hover group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tiger-400 text-black shadow-glow">
          <Icon size={27} />
        </div>
        <span className="text-5xl font-black text-white/5">0{index + 1}</span>
      </div>
      <h3 className="mb-3 text-2xl font-black">{service.title}</h3>
      <p className="leading-8 text-white/60">{service.description}</p>
      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-tiger-300">
        تفاصيل الخدمة <ArrowUpLeft className="transition group-hover:-translate-x-1 group-hover:translate-y-1" size={16} />
      </div>
    </article>
  );
}
