import { Product, ProductDto } from "../../domain/products/product";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";
import { ProductRepositoryInterface } from "../../domain/products/productRepositoryInterface";

@injectable()
export class CreateProduct {
    @inject(TYPES.ProductRepositoryInterface) private repository: ProductRepositoryInterface;

    public async invoke(productDto: ProductDto): Promise<Product> {
        const newProduct = { ...productDto, updated_at: new Date(), created_at: new Date() } as Product;
        return this.repository.store(newProduct);
    }
}
