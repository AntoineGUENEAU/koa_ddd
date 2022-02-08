import "reflect-metadata";
import {Product, ProductDto} from "../../domain/product/Product";
import { injectable } from "inversify";
import {AbstractProduct} from "./AbstractProduct";

@injectable()
export class ListProducts extends AbstractProduct{
    public async invoke(): Promise<ProductDto[]> {
        return (await this.repository.list()).map((product: Product) => {
            return product.toDto()
        });
    }
}
