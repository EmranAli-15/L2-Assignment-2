import { z } from 'zod';

const variantSchema = z.object({
    type: z.string({message: 'type should be a string'}),
    value: z.string({message: 'value should be a string'})
});

const inventorySchema = z.object({
    quantity: z.number().max(10, {message: 'maximum length is 10 digit'}),
    inStock: z.boolean({message: 'inStock should be "true" or "false"'})
});

const productSchema = z.object({
    name: z.string().max(20, {message: 'maximum length is 20 character'}),
    description: z.string(),
    price: z.number({message: 'Price should be a valid number'}),
    category: z.string({message: 'category should be a string'}),
    tags: z.array(z.string()),
    variants: z.array(variantSchema),
    inventory: inventorySchema
});

export const ZodValidationProduct = productSchema;