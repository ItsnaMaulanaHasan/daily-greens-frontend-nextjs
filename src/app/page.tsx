import ProductCard from "@/components/products/product-card";
import { mapProductToCard } from "@/lib/products/map-product-to-card";
import { featuredProductsResponse } from "@/mocks/products";

const featuredProductCards =
  featuredProductsResponse.data.map(mapProductToCard);

export default function Home() {
  return (
    <main className="flex-1 bg-emerald-50">
      <section className="flex min-h-[calc(100vh-4rem)] items-center px-6 py-16">
        <div className="mx-auto w-full max-w-6xl">
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
        </div>
      </section>

      <section
        id="menu"
        aria-labelledby="menu-heading"
        className="bg-white px-6 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Pilihan favorit
            </p>

            <h2
              id="menu-heading"
              className="mt-3 text-3xl font-bold text-slate-900">
              Menu pilihan Daily Greens
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProductCards.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
