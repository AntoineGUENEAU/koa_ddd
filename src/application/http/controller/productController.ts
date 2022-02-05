import { Product, ProductDto } from "../../../core/domain/products/product";
import { Context } from "koa";
import { ListProducts } from "../../../core/useCases/products/list";
import { container } from "../../../container";
import { CreateProduct } from "../../../core/useCases/products/create";
import { UpdateProduct } from "../../../core/useCases/products/update";
import { ShowProduct } from "../../../core/useCases/products/show";

export async function list(ctx: Context): Promise<void> {
    ctx.body = { products: (await container.resolve(ListProducts).invoke()) as Product[] };
}

export async function show(ctx: Context): Promise<void> {
    const id = ctx.params.id;
    const product: Product | null = await container.resolve(ShowProduct).invoke(id);
    if (!product) {
        ctx.throw(404, "invalid product id");
    }
    ctx.body = { product };
}

export async function create(ctx: Context): Promise<void> {
    const product: Product = await container.resolve(CreateProduct).invoke(ctx.body as ProductDto);
    ctx.body = { product };
}

export async function update(ctx: Context): Promise<void> {
    const product: Product = await container.resolve(UpdateProduct).invoke(ctx.body as ProductDto, ctx.params.id);
    ctx.body = { product };
}
