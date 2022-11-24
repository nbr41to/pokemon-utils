import type { z } from 'zod';

import type {
  productCreateSchema,
  productUpdateSchema,
} from '@/libs/validation/schemas/product';

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export type ProductCreateParams = z.infer<typeof productCreateSchema>;
export type ProductUpdateParams = z.infer<typeof productUpdateSchema>;
