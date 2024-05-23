import mongoose, { model } from "mongoose";
import { Inventory, Product, Variant } from "./product.interface";

const variantSchema = new mongoose.Schema<Variant>({
    type: { type: String, required: true },
    value: { type: String, required: true }
});

const inventorySchema = new mongoose.Schema<Inventory>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});

const productSchema = new mongoose.Schema<Product>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: [variantSchema],
    inventory: { type: inventorySchema, required: true }
});

export const ProductModel = model('Product', productSchema);