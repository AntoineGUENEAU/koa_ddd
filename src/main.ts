const logger = require('koa-logger');
const koaBody = require('koa-body');
import {router} from "./application/http/routes/productsRoutes";
const Koa = require('koa');
const app = module.exports = new Koa();

app.use(logger());
app.use(koaBody());
app.use(router.routes());

app.listen(3000);
