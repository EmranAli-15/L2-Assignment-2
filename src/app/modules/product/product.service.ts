import { ProductModel } from "../product.model";
import { Product } from "./product.interface";

const createProductIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
};

const getAllProductsFromDB = async () => {
    const result = await ProductModel.find();
    return result;
};

const getAProductFromDB = async (id: string) => {
    const result = await ProductModel.findById(id);
    return result;
}



export const ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getAProductFromDB
}