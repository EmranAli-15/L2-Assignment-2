import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ZodValidationProduct } from "./product.zod.validation";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;

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
};

const getAProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductService.getAProductFromDB(id);

        res.status(200).json({
            success: true,
            message: "You got a products successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!! could not find any product.",
            data: error
        });
    }
}

const updateAProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const body = req.body;
        const result = await ProductService.updateProductFromDB(id, body);

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!! could not updated.",
            data: error
        });
    }
}

const deleteAProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductService.deleteAProductFromDB(id);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!! could not deleted.",
            data: error
        });
    }
}

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getAProduct,
    updateAProduct,
    deleteAProduct
}