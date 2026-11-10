import type { ProductListItem } from "@/types/product";

export type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  categoryName: string;
  imageUrl: string | null;
  imageAlt: string;
  startingPrice: number | null;
  preparationTimeMinutes: number | null;
  isAvailable: boolean;
};

export function mapProductToCard(product: ProductListItem): ProductCardData {
  const image = product.images[0] ?? null;

  const prices = product.variants
    .map((variant) => Number(variant.price))
    .filter((price) => Number.isFinite(price));

  const startingPrice = prices.length > 0 ? Math.min(...prices) : null;

  const isAvailable = product.variants.some(
    (variant) => !variant.trackStock || variant.stock > 0,
  );

  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description,
    categoryName: product.category.name,
    imageUrl: image?.imageUrl ?? null,
    imageAlt: image?.altText ?? product.name,
    startingPrice,
    preparationTimeMinutes: product.preparationTimeMinutes,
    isAvailable,
  };
}
