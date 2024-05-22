import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ZodValidationProduct } from "./product.zod.validation";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body.product;

        const zodParseData = ZodValidationProduct.parse(product);

        const result = await ProductService.createProductIntoDB(zodParseData);

        res.status(200).json({
            success: true,
            message: "Product is created successfully",
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

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getAllProductsFromDB();

        res.status(200).json({
            success: true,
            message: "You got all products successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "!!Something went wrong!!",
            data: error
        });
    }
}

export const ProductControllers = {
    createProduct,
    getAllProducts
}