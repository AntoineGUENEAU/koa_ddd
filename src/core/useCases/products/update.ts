import {Product, ProductDto} from "../../domain/products/product";
import "reflect-metadata";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../types";
import {ProductRepositoryInterface} from "../../domain/products/productRepositoryInterface";

@injectable()
export class UpdateProduct {
    @inject(TYPES.ProductRepositoryInterface) private repository: ProductRepositoryInterface

    public async invoke(productDto: ProductDto, idProduct: string): Promise<Product> {
        const product_to_update: Product = await this.repository.show(idProduct)
        const new_product = {...product_to_update, ...productDto, updated_at: new Date()} as Product
        return this.repository.update(new_product, idProduct)
    }
}
