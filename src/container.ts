import { Container } from "inversify";
import { TYPES } from "./types";
import { ProductRepositoryInterface } from "./core/domain/product/productRepositoryInterface";
import { ProductRepository } from "./infra/data/inMemory/products/productRepository";
import { ServerInterface } from "./application/http/ServerInterface";
import { KoaServer } from "./application/http/koa/KoaServer";
import {CartRepositoryInterface} from "./core/domain/cart/cartRepositoryInterface";
import {CartRepository} from "./infra/data/inMemory/cart/cartRepository";
import {MemoryData} from "./infra/data/inMemory/memory-data";

const container = new Container();

container.bind<ProductRepositoryInterface>(TYPES.ProductRepositoryInterface).to(ProductRepository);
container.bind<CartRepositoryInterface>(TYPES.CartRepositoryInterface).to(CartRepository);
container.bind<ServerInterface>(TYPES.ServerInterface).to(KoaServer).inSingletonScope();
container.bind(TYPES.Database).to(MemoryData).inSingletonScope()

export { container };
