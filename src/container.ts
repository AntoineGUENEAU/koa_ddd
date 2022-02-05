import { Container } from "inversify";
import { TYPES } from "./types";
import { ProductRepositoryInterface } from "./core/domain/products/productRepositoryInterface";
import { ProductRepository } from "./infra/data/inMemory/products/productRepository";
import { ServerInterface } from "./application/http/ServerInterface";
import { KoaServer } from "./application/http/koa/KoaServer";

const container = new Container();

container.bind<ProductRepositoryInterface>(TYPES.ProductRepositoryInterface).to(ProductRepository);
container.bind<ServerInterface>(TYPES.ServerInterface).to(KoaServer).inSingletonScope();

export { container };
