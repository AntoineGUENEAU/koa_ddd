import {ProductRepositoryInterface} from "../../domain/products/productRepositoryInterface";
import {Product} from "../../domain/products/product";

//TODO Normalement ici je ne dois pas retourné des objects Product du domaine mais des presenter...a creuser
export async function usecase_list(repository: ProductRepositoryInterface): Promise<Product[]> {
    return repository.list()
}
