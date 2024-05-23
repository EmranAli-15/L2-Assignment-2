"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationProduct = void 0;
const zod_1 = require("zod");
const variantSchema = zod_1.z.object({
    type: zod_1.z.string({ message: 'type should be a string' }),
    value: zod_1.z.string({ message: 'value should be a string' })
});
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean({ message: 'inStock should be "true" or "false"' })
});
const productSchema = zod_1.z.object({
    name: zod_1.z.string().max(20, { message: 'maximum length is 20 character' }),
    description: zod_1.z.string(),
    price: zod_1.z.number({ message: 'Price should be a valid number' }),
    category: zod_1.z.string({ message: 'category should be a string' }),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(variantSchema),
    inventory: inventorySchema
});
exports.ZodValidationProduct = productSchema;
