import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body.product;
        console.log(product);
        const result = await ProductService.createProductIntoDB(product);

        res.status(200).json({
            success: true,
            message: "Product is created successfully",
            data: result
        });
    } catch (error) {
        // res.status(200).json({
        //     success: false,
        //     message: "!!Something went wrong!!",
        //     data: error
        // });
        console.log(error);
    }
};

export const ProductControllers = {
    createProduct,
}