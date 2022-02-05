import { Product } from "../../domain/products/product";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";
import { ProductRepositoryInterface } from "../../domain/products/productRepositoryInterface";

@injectable()
export class ListProducts {
    @inject(TYPES.ProductRepositoryInterface) private repository: ProductRepositoryInterface;

    public async invoke(): Promise<Product[]> {
        return this.repository.list();
    }
}
