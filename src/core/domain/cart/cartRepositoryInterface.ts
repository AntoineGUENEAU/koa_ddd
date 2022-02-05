import {Cart} from "./cart";

export type CartRepositoryInterface = {
    getById(id: string): Promise<Cart>
    create(cart: Cart): Promise<Cart>
    update(cart: Cart): Promise<Cart>
};
