import {CreateProduct} from "./core/useCases/products/create";
import {UpdateProduct} from "./core/useCases/products/update";
import {ShowProduct} from "./core/useCases/products/show";
import {ListProducts} from "./core/useCases/products/list";

const TYPES = {
  ProductRepositoryInterface: Symbol.for('ProductRepositoryInterface'),
  ListProducts: Symbol.for('ListProducts'),
  ShowProduct: Symbol.for('ShowProduct'),
  CreateProduct: Symbol.for('CreateProduct'),
  UpdateProduct: Symbol.for('UpdateProduct')
}

export { TYPES }
