import {Product, ProductDto} from "./product";

export type ProductRepositoryInterface = {
    list(): Promise<Product[]>;
    show(id: string): Promise<Product | null>;
    store(product: ProductDto): Promise<Product>;
    update(product: ProductDto, idProduct: string): Promise<Product>;
};
