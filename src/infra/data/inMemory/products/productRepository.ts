import {Product} from "../../../../core/domain/products/product";

const products = [
    {id: 'id1', reference: 'ref1', name: 'iphone', price : 34, updated_at: new Date(), created_at: new Date()} as Product,
    {id: 'id2', reference: 'ref2', name: 'tv', price : 56, updated_at: new Date(), created_at: new Date()} as Product,
]

export const productRepository = {
    list: async (): Promise<Product[]> => {
        return products
    },
    show: async (id: string): Promise<Product|null> => {
        return products.filter((product) => {
            return product.id === id
        })[0] ?? null
    },
    store: async (product: Product): Promise<Product> => {
        products.push(product)
        return product
    },
    update: async (product: Product, idProduct: string): Promise<Product> => {
        const index: number = products.findIndex((obj => obj.id == idProduct));
        products[index] = { ...product }
        return product
    }
}
