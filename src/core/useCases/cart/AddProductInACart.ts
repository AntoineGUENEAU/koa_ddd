import "reflect-metadata";
import { injectable } from "inversify";
import { CartDto } from "../../domain/cart/Cart";
import { ProductDto } from "../../domain/product/Product";
import { AbstractCart } from "./AbstractCart";

@injectable()
export class AddProductInACart extends AbstractCart {
    public async invoke(cartId: string, item: ProductDto, quantity: number): Promise<CartDto> {
        const cart = await this._getCart(cartId)
        cart.add(item, quantity)
        return (await this.repository.update(cart)).toDto()
    }
}
