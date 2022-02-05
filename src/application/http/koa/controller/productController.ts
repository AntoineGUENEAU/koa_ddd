import { Product, ProductDto } from "../../../../core/domain/product/product";
import { Context } from "koa";
import { container } from "../../../../container";
import { ListProducts } from "../../../../core/useCases/product/ListProducts";
import { CreateProduct } from "../../../../core/useCases/product/CreateProduct";
import { UpdateProduct } from "../../../../core/useCases/product/UpdateProduct";
import { ShowProduct } from "../../../../core/useCases/product/ShowProduct";

export async function list(ctx: Context): Promise<void> {
    ctx.body = { products: (await container.resolve(ListProducts).invoke()) as Product[] };
}

export async function show(ctx: Context): Promise<void> {
    const id = ctx.params.id;
    const product: ProductDto | null = await container.resolve(ShowProduct).invoke(id);
    if (!product) {
        ctx.throw(404, "invalid product id");
    }
    ctx.body = { product };
}

export async function create(ctx: Context): Promise<void> {
    const product: ProductDto = await container.resolve(CreateProduct).invoke(ctx.body as ProductDto);
    ctx.body = { product };
}

export async function update(ctx: Context): Promise<void> {
    const product: ProductDto = await container.resolve(UpdateProduct).invoke(ctx.body as ProductDto, ctx.params.id);
    ctx.body = { product };
}
