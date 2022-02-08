import {inject, injectable} from "inversify";
import {TYPES} from "../../../types";
import {ProductRepositoryInterface} from "../../domain/product/ProductRepositoryInterface";

@injectable()
export abstract class AbstractProduct {
    @inject(TYPES.ProductRepositoryInterface) protected repository: ProductRepositoryInterface;
}
