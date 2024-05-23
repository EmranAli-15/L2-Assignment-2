import { z } from 'zod';

const orderSchema = z.object({
    email: z.string().email({ message: 'email should must be a valid email' }),
    productId: z.string({ message: 'productId should be a string' }),
    price: z.number({ message: 'price should be a number' }),
    quantity: z.number({ message: 'quantity should be a number' })
});

export const ZodValidationOrder = orderSchema;