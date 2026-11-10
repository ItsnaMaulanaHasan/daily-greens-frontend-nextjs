import { ProductListResponse } from "@/types/product";

export const featuredProductsResponse = {
  data: [
    {
      id: "11111111-1111-4111-8111-111111111111",
      name: "Chicken Caesar Salad",
      slug: "chicken-caesar-salad",
      description: "Salad segar dengan ayam panggang dan dressing Caesar.",
      allowCustomerNote: true,
      notePlaceholder: "Contoh: dressing dipisah",
      preparationTimeMinutes: 15,
      isFeatured: true,
      category: {
        id: "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
        name: "Salad",
        slug: "salad",
      },
      images: [
        {
          id: "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb",
          imageUrl: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          altText: null,
          isPrimary: true,
        },
      ],
      variants: [
        {
          id: "cccccccc-cccc-4ccc-8ccc-cccccccccccc",
          sku: "SALAD-CAESAR",
          name: "Regular",
          price: "45000",
          stock: 15,
          trackStock: true,
          isDefault: true,
          optionValues: [],
        },
      ],
    },
    {
      id: "22222222-2222-4222-8222-222222222222",
      name: "Berry Yogurt Smoothie",
      slug: "berry-yogurt-smoothie",
      description: null,
      allowCustomerNote: false,
      notePlaceholder: null,
      preparationTimeMinutes: null,
      isFeatured: true,
      category: {
        id: "dddddddd-dddd-4ddd-8ddd-dddddddddddd",
        name: "Minuman",
        slug: "minuman",
      },
      images: [],
      variants: [
        {
          id: "eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee",
          sku: "SMOOTHIE-BERRY-S",
          name: "Small",
          price: "28000",
          stock: 0,
          trackStock: false,
          isDefault: true,
          optionValues: [
            {
              optionValue: {
                id: "ffffffff-ffff-4fff-8fff-ffffffffffff",
                value: "small",
                label: "Small",
                option: {
                  id: "33333333-3333-4333-8333-333333333333",
                  name: "size",
                  displayName: "Ukuran",
                },
              },
            },
          ],
        },
        {
          id: "44444444-4444-4444-8444-444444444444",
          sku: "SMOOTHIE-BERRY-L",
          name: "Large",
          price: "35000",
          stock: 8,
          trackStock: true,
          isDefault: false,
          optionValues: [
            {
              optionValue: {
                id: "55555555-5555-4555-8555-555555555555",
                value: "large",
                label: "Large",
                option: {
                  id: "33333333-3333-4333-8333-333333333333",
                  name: "size",
                  displayName: "Ukuran",
                },
              },
            },
          ],
        },
      ],
    },
  ],
  meta: {
    page: 1,
    limit: 20,
    total: 2,
    totalPages: 1,
  },
} satisfies ProductListResponse;
