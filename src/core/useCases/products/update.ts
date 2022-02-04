import {ProductRepositoryInterface} from "../../domain/products/productRepositoryInterface";
import {Product, ProductDto} from "../../domain/products/product";

//TODO Normalement ici je ne dois pas retourné des objects Product du domaine mais des presenter...a creuser
export async function usecase_update(repository: ProductRepositoryInterface, productDto: ProductDto, idProduct: string): Promise<Product> {
    const product_to_update: Product = await repository.show(idProduct)
    const new_product = {...product_to_update, ...productDto, updated_at: new Date()} as Product
    return repository.update(new_product, idProduct)
}
