import { Container } from 'inversify'
import { TYPES } from './types'
import {ProductRepositoryInterface} from "./core/domain/products/productRepositoryInterface";
import {ProductRepository} from "./infra/data/inMemory/products/productRepository";
import {ListProducts} from "./core/useCases/products/list";
import {CreateProduct} from "./core/useCases/products/create";
import {UpdateProduct} from "./core/useCases/products/update";
import {ShowProduct} from "./core/useCases/products/show";

const container = new Container()

container.bind<ProductRepositoryInterface>(TYPES.ProductRepositoryInterface).to(ProductRepository)
container.bind<ListProducts>(ListProducts).to(ListProducts)
container.bind<ShowProduct>(ShowProduct).to(ShowProduct)
container.bind<CreateProduct>(CreateProduct).to(CreateProduct)
container.bind<UpdateProduct>(UpdateProduct).to(UpdateProduct)

export { container }
