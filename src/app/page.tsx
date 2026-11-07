export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-emerald-50 px-6 py-16">
      <section className="mx-auto w-full max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Fresh food, better mood
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Makanan sehat untuk hari yang lebih baik
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Temukan pilihan makanan dan minuman segar yang dibuat untuk menemani
          aktivitasmu setiap hari
        </p>
      </section>
    </main>
  );
}
