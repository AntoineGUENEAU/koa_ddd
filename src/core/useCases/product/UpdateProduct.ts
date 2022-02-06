import { Product, ProductDto } from "../../domain/product/product";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";
import { ProductRepositoryInterface } from "../../domain/product/productRepositoryInterface";

@injectable()
export class UpdateProduct {
    @inject(TYPES.ProductRepositoryInterface) private repository: ProductRepositoryInterface;

    public async invoke(productDto: ProductDto, idProduct: string): Promise<ProductDto> {
        const productToUpdate: ProductDto = await this.repository.show(idProduct);
        const newProduct = { ...productToUpdate, ...productDto, updated_at: new Date() } as Product;
        return (await this.repository.update(newProduct, idProduct)).toDto();
    }
}
