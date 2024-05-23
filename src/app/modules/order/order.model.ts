import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

export const OrderModel = mongoose.model('Order', orderSchema);