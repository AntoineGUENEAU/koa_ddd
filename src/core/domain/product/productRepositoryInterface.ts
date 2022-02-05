import {ProductDto} from "./product";

export type ProductRepositoryInterface = {
    list(): Promise<ProductDto[]>;
    show(id: string): Promise<ProductDto | null>;
    store(product: ProductDto): Promise<ProductDto>;
    update(product: ProductDto, idProduct: string): Promise<ProductDto>;
};
