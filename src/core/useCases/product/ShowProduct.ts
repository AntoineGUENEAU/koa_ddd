import {Product, ProductDto} from "../../domain/product/product";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";
import { ProductRepositoryInterface } from "../../domain/product/productRepositoryInterface";

@injectable()
export class ShowProduct {
    @inject(TYPES.ProductRepositoryInterface) private repository: ProductRepositoryInterface;

    public async invoke(idProduct: string): Promise<ProductDto> {
        const product: Product = await this.repository.show(idProduct)
        return product.toDto();
    }
}
