import {ProductDto} from "../../../../core/domain/product/product";
import "reflect-metadata";
import { ProductRepositoryInterface } from "../../../../core/domain/product/productRepositoryInterface";
import { injectable } from "inversify";

const products = [
    { id: "id1", reference: "ref1", name: "iphone", price: 34, updated_at: new Date(), created_at: new Date() } as ProductDto,
    { id: "id2", reference: "ref2", name: "tv", price: 56, updated_at: new Date(), created_at: new Date() } as ProductDto
];

@injectable()
export class ProductRepository implements ProductRepositoryInterface {
    async list(): Promise<ProductDto[]> {
        return products;
    }
    async show(id: string): Promise<ProductDto | null> {
        return (
            products.filter((product) => {
                return product.id === id;
            })[0] ?? null
        );
    }
    async store(product: ProductDto): Promise<ProductDto> {
        products.push(product);
        return product;
    }
    async update(product: ProductDto, idProduct: string): Promise<ProductDto> {
        const index: number = products.findIndex((obj) => obj.id === idProduct);
        products[index] = { ...product };
        return product;
    }
}
