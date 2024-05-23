"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationOrder = void 0;
const zod_1 = require("zod");
const orderSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'email should must be a valid email' }),
    productId: zod_1.z.string({ message: 'productId should be a string' }),
    price: zod_1.z.number({ message: 'price should be a number' }),
    quantity: zod_1.z.number({ message: 'quantity should be a number' })
});
exports.ZodValidationOrder = orderSchema;
