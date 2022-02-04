import {Product} from "../../../../core/domain/products/product";
import connection from "../dbConnection";
import { ProductMongo } from "./product";

export const productRepository = {
    list: async (): Promise<Product[]> => {
        await connection();
        return ProductMongo.find()
    },
    show: async (id: string): Promise<Product|null> => {
        await connection();
        return ProductMongo.find({id})[0] ?? null;
    },
    store: async (product: Product): Promise<Product> => {
        await connection();
        const question = new ProductMongo(product)
        return await question.save()
    },
    //Bug ici, ca va crée un nouveau produit, a voir dans le doc de mongoDB comme il faut faire.
    update: async (product: Product, idProduct: string): Promise<Product> => {
        await connection();
        const question = new ProductMongo({...product} as Product)
        return await question.save()
    }
}
