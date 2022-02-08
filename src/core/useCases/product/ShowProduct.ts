import {Product, ProductDto} from "../../domain/product/Product";
import "reflect-metadata";
import { injectable } from "inversify";
import {AbstractProduct} from "./AbstractProduct";

@injectable()
export class ShowProduct extends AbstractProduct {
    public async invoke(idProduct: string): Promise<ProductDto> {
        const product: Product = await this.repository.show(idProduct)
        return product.toDto();
    }
}
