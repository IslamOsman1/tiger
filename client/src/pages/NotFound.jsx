import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6 text-center text-white">
      <div>
        <h1 className="text-7xl font-black text-tiger-300">404</h1>
        <p className="mt-4 text-xl font-bold">الصفحة غير موجودة</p>
        <Link className="btn-primary mt-8" to="/">العودة للرئيسية</Link>
      </div>
    </main>
  );
}
