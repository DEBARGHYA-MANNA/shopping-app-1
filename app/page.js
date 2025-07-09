import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#FFFBDE] px-4 text-center">
      <h1 className="text-4xl text-[#1E293B] font-bold mb-4">Welcome to the Shop</h1>
      <p className="text-[#1E293B] mb-4">Simple shopping cart built with Next.js & Tailwind CSS</p>
      <p className='text-[#1E293B] mb-6 font-semibold'>By Debarghya Manna</p>

      <Link href="/products">
        <button className="bg-[#14B8A6] text-white px-6 py-3 rounded-md hover:bg-[#0D9488] transition">
          Shop Now
        </button>
      </Link>
    </main>
  );
}
