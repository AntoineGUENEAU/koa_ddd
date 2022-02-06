import "reflect-metadata";
import {Cart, CartDto} from "../../domain/cart/cart";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../types";
import {CartRepositoryInterface} from "../../domain/cart/cartRepositoryInterface";

@injectable()
export abstract class AbstractCart {
    @inject(TYPES.CartRepositoryInterface) protected repository: CartRepositoryInterface;

    protected async _getCart(id: string): Promise<Cart> {
        try {
            return await this.repository.getById(id)
        } catch (e) {
            const emptyCart = Cart.create({ id })
            return this.repository.create(emptyCart)
        }
    }
}
