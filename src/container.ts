import { Container } from "inversify";
import { TYPES } from "./types";
import { ProductRepositoryInterface } from "./core/domain/product/ProductRepositoryInterface";
import { ProductRepository } from "./infra/data/inMemory/product/ProductRepository";
import { ServerInterface } from "./application/http/ServerInterface";
import { KoaServer } from "./application/http/koa/KoaServer";
import { CartRepositoryInterface } from "./core/domain/cart/CartRepositoryInterface";
import { CartRepository } from "./infra/data/inMemory/cart/CartRepository";
import { MemoryData } from "./infra/data/inMemory/Memory-data";
import { UserRepositoryInterface } from "./core/domain/user/UserRepositoryInterface";
import { UserRepository } from "./infra/data/inMemory/user/UserRepository";

const container = new Container();

container.bind<ProductRepositoryInterface>(TYPES.ProductRepositoryInterface).to(ProductRepository);
container.bind<CartRepositoryInterface>(TYPES.CartRepositoryInterface).to(CartRepository);
container.bind<UserRepositoryInterface>(TYPES.UserRepositoryInterface).to(UserRepository);
container.bind<ServerInterface>(TYPES.ServerInterface).to(KoaServer);
container.bind(TYPES.Database).to(MemoryData).inSingletonScope()

export { container };
