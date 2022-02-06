import {ProductDto} from "../../domain/product/product";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";
import { ProductRepositoryInterface } from "../../domain/product/productRepositoryInterface";

@injectable()
export class CreateProduct {
    @inject(TYPES.ProductRepositoryInterface) private repository: ProductRepositoryInterface;

    public async invoke(productDto: ProductDto): Promise<ProductDto> {
        const newProduct = { ...productDto, updated_at: new Date(), created_at: new Date() } as ProductDto;
        return (await this.repository.store(newProduct)).toDto();
    }
}
