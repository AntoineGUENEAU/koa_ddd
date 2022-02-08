import { Product } from "../../../../core/domain/product/Product";
import "reflect-metadata";
import connection from "../dbConnection";
import { ProductMongo } from "./Product";
import { ProductRepositoryInterface } from "../../../../core/domain/product/ProductRepositoryInterface";
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
    // TODO Bug ici, ca va crée un nouveau produit, a voir dans le doc de mongoDB comme il faut faire.
    async update(product: Product, idProduct: string): Promise<Product> {
        await connection();
        const question = new ProductMongo({ ...product } as Product);
        return await question.save();
    }
}
