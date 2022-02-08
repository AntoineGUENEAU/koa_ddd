import "reflect-metadata";
import { Cart } from "../../domain/cart/Cart";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";
import { CartRepositoryInterface } from "../../domain/cart/CartRepositoryInterface";

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
