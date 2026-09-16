import z from 'zod';
export const productSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  price: z.coerce.number().positive({ message: 'Price must be greater than 0' }),
})

export const productPatchSchema = productSchema.partial().refine(
  (product) => Object.keys(product).length > 0,
  { message: 'At least one product field is required' }
)

export const productIdSchema = z.object({
    id: z.coerce.number().int().positive()
})

export const productQuerySchema = z.object({
  limit: z.coerce.number().int().positive().default(5),
  page: z.coerce.number().int().positive().default(1),
  search: z.string().optional(),
  sortBy: z.enum(['id', 'name', 'description', 'price']).optional(),
  order: z.enum(['asc', 'desc']).default('asc'),
})