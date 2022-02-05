const logger = require('koa-logger');
const koaBody = require('koa-body');
const validate = require('koa-validation');
import {router} from "./application/http/routes/products/productsRoutes";
const Koa = require('koa');
const app = module.exports = new Koa();

app.use(logger());
app.use(koaBody());
app.use(validate());
app.use(router.routes());

app.listen(3000);
