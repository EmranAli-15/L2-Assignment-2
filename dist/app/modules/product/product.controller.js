"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_zod_validation_1 = require("./product.zod.validation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const zodParseData = product_zod_validation_1.ZodValidationProduct.parse(product);
        const result = yield product_service_1.ProductService.createProductIntoDB(zodParseData);
        res.status(200).json({
            success: true,
            message: "Product is created successfully",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "!!Something went wrong!!",
            data: error
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        if (searchTerm) {
            const search = req.query.searchTerm;
            const result = yield product_service_1.ProductService.searchProductsFromDB(search);
            res.status(200).json({
                success: true,
                message: "Products matching search term 'iphone' fetched successfully!",
                data: result
            });
        }
        else {
            const result = yield product_service_1.ProductService.getAllProductsFromDB();
            res.status(200).json({
                success: true,
                message: "You got all products successfully",
                data: result
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "!!Something went wrong!!",
            data: error
        });
    }
});
const getAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.ProductService.getAProductFromDB(id);
        res.status(200).json({
            success: true,
            message: "You got a products successfully",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!! could not find any product.",
            data: error
        });
    }
});
const updateAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const body = req.body;
        const result = yield product_service_1.ProductService.updateProductFromDB(id, body);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!! could not updated.",
            data: error
        });
    }
});
const deleteAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.ProductService.deleteAProductFromDB(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!! could not deleted.",
            data: error
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getAProduct,
    updateAProduct,
    deleteAProduct,
};
