import { z } from '../client';

export const productUpdateSchema = z
  .object({
    id: z.number(),
    title: z.string().min(1).max(6),
    description: z.string().min(1),
    price: z
      .string()
      .min(1)
      .refine(
        (v) => {
          return !Number.isNaN(parseInt(v, 10));
        },
        {
          message: '数値を入力してください。',
        }
      )
      .transform((v) => {
        return Number(v);
      }),
    thumbnail: z.string(),
  })
  .strict();

export const productCreateSchema = productUpdateSchema.omit({ id: true });
