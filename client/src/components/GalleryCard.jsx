import { ImageIcon } from 'lucide-react';

export default function GalleryCard({ item, large = false }) {
  return (
    <article className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${large ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className={`${large ? 'h-[420px]' : 'h-72'} overflow-hidden bg-white/5`}>
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        ) : (
          <div className="flex h-full items-center justify-center text-white/25"><ImageIcon size={50} /></div>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-20">
        <span className="mb-2 inline-flex rounded-full bg-tiger-400 px-3 py-1 text-xs font-black text-black">{item.category || 'design'}</span>
        <h3 className="text-2xl font-black">{item.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/65">{item.description}</p>
      </div>
    </article>
  );
}
