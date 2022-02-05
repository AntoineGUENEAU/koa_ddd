import { Container } from 'inversify'
import { TYPES } from './types'
import {ProductRepositoryInterface} from "./core/domain/products/productRepositoryInterface";
import {ProductRepository} from "./infra/data/inMemory/products/productRepository";

const container = new Container()

container.bind<ProductRepositoryInterface>(TYPES.ProductRepositoryInterface).to(ProductRepository)

export { container }
