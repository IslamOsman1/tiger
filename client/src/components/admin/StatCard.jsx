export default function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-tiger-400 text-black">
        <Icon size={24} />
      </div>
      <p className="text-4xl font-black">{value}</p>
      <p className="mt-2 text-sm text-white/50">{label}</p>
    </div>
  );
}
