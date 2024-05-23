import { Request, Response } from "express";
import { ZodValidationOrder } from "./order.zod.validation";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        const zodParseData = ZodValidationOrder.parse(order);
        const result = await OrderService.createOrderIntoDB(zodParseData);

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "!!Something went wrong!!",
            data: error
        });
    }
};

const getAllOrder = async (req: Request, res: Response) => {
    try {
        const email = req.query.email;

        if (email) {
            const result = await OrderService.searchOrderFromDB(email);

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result
            });
        }
        else {
            const result = await OrderService.getAllOrderFromDB();

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "!!Something went wrong!!",
            data: error
        });
    }
}


export const OrderController = {
    createOrder,
    getAllOrder
}