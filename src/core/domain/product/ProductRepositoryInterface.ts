import {Product, ProductDto} from "./Product";

export interface ProductRepositoryInterface {
    list(): Promise<Product[]>;
    show(id: string): Promise<Product | null>;
    store(product: ProductDto): Promise<Product>;
    update(product: ProductDto, idProduct: string): Promise<Product>;
}
