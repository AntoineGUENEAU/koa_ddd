const router = require('@koa/router')();
import {create, list, show, update} from "../../controller/productController";

router.get('/products', list)
    .get('/products/:id', show)
    .put('/products/:id', update)
    .post('/products', create);

export {router};
