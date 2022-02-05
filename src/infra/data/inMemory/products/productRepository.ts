import {Product} from "../../../../core/domain/products/product";
import "reflect-metadata";
import {ProductRepositoryInterface} from "../../../../core/domain/products/productRepositoryInterface";
import {injectable} from "inversify";

const products = [
    {id: 'id1', reference: 'ref1', name: 'iphone', price : 34, updated_at: new Date(), created_at: new Date()} as Product,
    {id: 'id2', reference: 'ref2', name: 'tv', price : 56, updated_at: new Date(), created_at: new Date()} as Product,
]

@injectable()
export class ProductRepository implements ProductRepositoryInterface {
    async list(): Promise<Product[]> {
        return products
    }
    async show(id: string): Promise<Product|null> {
        return products.filter((product) => {
            return product.id === id
        })[0] ?? null
    }
    async store(product: Product): Promise<Product> {
        products.push(product)
        return product
    }
    async update(product: Product, idProduct: string): Promise<Product> {
        const index: number = products.findIndex((obj => obj.id == idProduct));
        products[index] = { ...product }
        return product
    }
}
