import { Product, ProductDto } from "../../domain/product/Product";
import "reflect-metadata";
import  { injectable } from "inversify";
import {AbstractProduct} from "./AbstractProduct";

@injectable()
export class UpdateProduct extends AbstractProduct{
    public async invoke(productDto: ProductDto, idProduct: string): Promise<ProductDto> {
        const productToUpdate: ProductDto = await this.repository.show(idProduct);
        const newProduct = { ...productToUpdate, ...productDto, updated_at: new Date() } as Product;
        return (await this.repository.update(newProduct, idProduct)).toDto();
    }
}
