import { ConfigType } from "./ConfigType";
import {productRepository} from "../../infra/data/mongo/products/productRepository";

export const Config: ConfigType = {
    productRepository: productRepository,
};
