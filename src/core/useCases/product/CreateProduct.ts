import { ProductDto } from "../../domain/product/Product";
import "reflect-metadata";
import { injectable } from "inversify";
import { AbstractProduct } from "./AbstractProduct";

@injectable()
export class CreateProduct extends AbstractProduct{
    public async invoke(productDto: ProductDto): Promise<ProductDto> {
        const newProduct = { ...productDto, updated_at: new Date(), created_at: new Date() } as ProductDto;
        return (await this.repository.store(newProduct)).toDto();
    }
}
