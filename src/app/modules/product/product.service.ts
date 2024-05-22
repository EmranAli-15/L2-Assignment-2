import { ProductModel } from "./product.model";
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

const updateProductFromDB = async (id: string, body: object) => {
    const result = await ProductModel.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
        overwrite: true,
    });
    return result;
}

const deleteAProductFromDB = async (id: string) => {
    const result = await ProductModel.deleteOne({ _id: id });
    return result;
}

const searchProductsFromDB = async (searchTerm: any) => {
    const result = await ProductModel.find({
        $or: [
            { name: new RegExp(searchTerm, 'i') },
            { description: new RegExp(searchTerm, 'i') },
            { category: new RegExp(searchTerm, 'i') },
            { tags: new RegExp(searchTerm, 'i') }
        ]
    });
    return result;
}

export const ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getAProductFromDB,
    updateProductFromDB,
    deleteAProductFromDB,
    searchProductsFromDB
}