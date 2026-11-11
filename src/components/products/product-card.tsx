import type { ProductCardData } from "@/lib/products/map-product-to-card";
import Image from "next/image";

type ProductCardProps = {
  product: ProductCardData;
};

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white">
      <div className="relative aspect-4/3 overflow-hidden bg-emerald-100">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-medium text-emerald-700">
            Gambar belum tersedia
          </div>
        )}

        {!product.isAvailable && (
          <span className="absolute top-4 right-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
            Stok habis
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-sm font-medium text-emerald-700">
          {product.categoryName}
        </p>

        <h3 className="mt-3 text-xl font-semibold text-slate-900">
          {product.name}
        </h3>

        {product.description && (
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        )}

        {product.preparationTimeMinutes !== null && (
          <p className="mt-4 text-sm text-slate-500">
            Sekitar {product.preparationTimeMinutes} menit
          </p>
        )}

        <p className="mt-6 font-semibold text-slate-900">
          {product.startingPrice === null
            ? "Harga belum tersedia"
            : `Mulai ${currencyFormatter.format(product.startingPrice)}`}
        </p>
      </div>
    </article>
  );
}
