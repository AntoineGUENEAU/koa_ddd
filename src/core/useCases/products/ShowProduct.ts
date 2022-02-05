import { Product } from "../../domain/products/product";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";
import { ProductRepositoryInterface } from "../../domain/products/productRepositoryInterface";

@injectable()
export class ShowProduct {
    @inject(TYPES.ProductRepositoryInterface) private repository: ProductRepositoryInterface;

    public invoke(idProduct: string): Promise<Product | null> {
        return this.repository.show(idProduct);
    }
}
