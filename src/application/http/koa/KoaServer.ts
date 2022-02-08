import "reflect-metadata";
import { router } from "./routes/products/productsRoutes";
import { ServerInterface } from "../ServerInterface";
import { injectable } from "inversify";
const logger = require("koa-logger");
const koaBody = require("koa-body");
const validate = require("koa-validation");
const Koa = require("koa");
const app = (module.exports = new Koa());
const session = require('koa-session')
const passport = require('koa-passport')

@injectable()
export class KoaServer implements ServerInterface {
    startServer(): void {
        app.keys = ['super-secret-key'];
        app.use(session(app));
        app.use(logger());
        app.use(koaBody());
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(validate());
        app.use(router.routes());
        app.listen(3000);
    }
}
