import "reflect-metadata";
import {injectable} from "inversify";
import {Cart} from "../../domain/cart/cart";
import {Product} from "../../domain/product/product";
import {AbstractCart} from "./AbstractCart";

@injectable()
export class AddProductInACart extends AbstractCart {
    public async invoke(cartId: string, item: Product, quantity: number): Promise<Cart> {
        const cart = await this._getCart(cartId)
        cart.add(item, quantity)
        return this.repository.update(cart)
    }
}
