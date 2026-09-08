import z from 'zod';
export const productSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' })})

export const productIdSchema = z.object({
    id: z.coerce.number().int().positive()
})

export const productQuerySchema = z.object({
  limit: z.coerce.number().int().positive().default(5),
  page: z.coerce.number().int().positive().default(1)
})