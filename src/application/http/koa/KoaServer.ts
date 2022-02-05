import "reflect-metadata";
import { router } from "./routes/products/productsRoutes";
import { ServerInterface } from "../ServerInterface";
import { injectable } from "inversify";
const logger = require("koa-logger");
const koaBody = require("koa-body");
const validate = require("koa-validation");
const Koa = require("koa");
const app = (module.exports = new Koa());

@injectable()
export class KoaServer implements ServerInterface {
    start(): void {
        app.use(logger());
        app.use(koaBody());
        app.use(validate());
        app.use(router.routes());
        app.listen(3000);
    }
}
