import mongoose from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new mongoose.Schema<Order>({
    email: { type: String, required: true },
    productId: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

export const OrderModel = mongoose.model('Order', orderSchema);