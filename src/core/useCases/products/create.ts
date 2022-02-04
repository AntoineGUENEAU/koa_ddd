import {ProductRepositoryInterface} from "../../domain/products/productRepositoryInterface";
import {Product, ProductDto} from "../../domain/products/product";

//TODO Normalement ici je ne dois pas retourné des objects Product du domaine mais des presenter...a creuser
export async function usecase_create(repository: ProductRepositoryInterface, productDto: ProductDto): Promise<Product> {
    const new_product = {...productDto, updated_at: new Date(), created_at: new Date()} as Product
    return repository.store(new_product)
}
