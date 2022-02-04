import {ProductDto} from "../../../core/domain/products/product";
import {usecase_list} from "../../../core/useCases/products/list";
import {usecase_create} from "../../../core/useCases/products/create";
import {usecase_show} from "../../../core/useCases/products/show";
import {usecase_update} from "../../../core/useCases/products/update";
import {ProductRepositoryInterface} from "../../../core/domain/products/productRepositoryInterface";
import {Config} from "../../config/Config";
import {Context} from "koa";

//Voir si il existe des modules js equivalent au service container sur Laravel.
const repository: ProductRepositoryInterface = Config.productRepository;

export async function list(ctx: Context): Promise<void>{
    ctx.body = { products: usecase_list(repository) }
}

export async function show(ctx: Context): Promise<void>{
    const id = ctx.params.id;
    const product = await usecase_show(repository, id);
    if (!product){
        ctx.throw(404, 'invalid product id')
    }
    ctx.body = { product }
}

//Voir pour verfier la request
export async function create(ctx: Context): Promise<void>{
    const product = await usecase_create(repository, ctx.body as ProductDto);
    ctx.body = { product }
}

//Voir pour verfier la request
export async function update(ctx: Context): Promise<void>{
    const product = await usecase_update(repository, ctx.body as ProductDto, ctx.params.id);
    ctx.body = { product }
}
