import { Product } from "../../../../core/domain/products/product";
import "reflect-metadata";
import connection from "../dbConnection";
import { ProductMongo } from "./product";
import { ProductRepositoryInterface } from "../../../../core/domain/products/productRepositoryInterface";
import { injectable } from "inversify";

@injectable()
export class ProductRepository implements ProductRepositoryInterface {
    async list(): Promise<Product[]> {
        await connection();
        return ProductMongo.find();
    }
    async show(id: string): Promise<Product | null> {
        await connection();
        return ProductMongo.find({ id })[0] ?? null;
    }
    async store(product: Product): Promise<Product> {
        await connection();
        const question = new ProductMongo(product);
        return await question.save();
    }
    // Bug ici, ca va crée un nouveau produit, a voir dans le doc de mongoDB comme il faut faire.
    async update(product: Product, idProduct: string): Promise<Product> {
        await connection();
        const question = new ProductMongo({ ...product } as Product);
        return await question.save();
    }
}
