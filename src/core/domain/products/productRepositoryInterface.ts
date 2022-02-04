import {Product} from "./product";

export type ProductRepositoryInterface = {
    list: () => Promise<Product[]>,
    show: (id: string) => Promise<Product|null>,
    store: (product : Product) => Promise<Product>,
    update: (product: Product, idProduct: string) => Promise<Product>,
}
