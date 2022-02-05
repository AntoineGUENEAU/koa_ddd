import "reflect-metadata";
import {ProductDto} from "../../domain/product/product";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";
import { ProductRepositoryInterface } from "../../domain/product/productRepositoryInterface";

@injectable()
export class ListProducts {
    @inject(TYPES.ProductRepositoryInterface) private repository: ProductRepositoryInterface;

    public async invoke(): Promise<ProductDto[]> {
        return this.repository.list();
    }
}
