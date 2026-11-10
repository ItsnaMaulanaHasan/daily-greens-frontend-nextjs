export type ProductCategorySummary = {
  id: string;
  name: string;
  slug: string;
};

export type ProductImage = {
  id: string;
  imageUrl: string;
  altText: string | null;
  isPrimary: boolean;
};

export type ProductVariantOptionValue = {
  optionValue: {
    id: string;
    value: string;
    label: string;
    option: {
      id: string;
      name: string;
      displayName: string;
    };
  };
};

export type ProductVariant = {
  id: string;
  sku: string;
  name: string;
  price: string;
  stock: number;
  trackStock: boolean;
  isDefault: boolean;
  optionValues: ProductVariantOptionValue[];
};

export type ProductListItem = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  allowCustomerNote: boolean;
  notePlaceholder: string | null;
  preparationTimeMinutes: number | null;
  isFeatured: boolean;
  category: ProductCategorySummary;
  images: ProductImage[];
  variants: ProductVariant[];
};

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type ProductListResponse = {
  data: ProductListItem[];
  meta: PaginationMeta;
};
