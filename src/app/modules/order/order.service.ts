import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (order: Order) => {
    const result = await OrderModel.create(order);
    return result;
};

const getAllOrderFromDB = async () => {
    const result = await OrderModel.find();
    return result;
};

const searchOrderFromDB = async (email: any) => {
    const result = OrderModel.find({
        $or: [{
            email: new RegExp(email),
        }]
    });
    return result;
}


export const OrderService = {
    createOrderIntoDB,
    getAllOrderFromDB,
    searchOrderFromDB
}