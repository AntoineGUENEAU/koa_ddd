import {Cart} from "./Cart";

export interface CartRepositoryInterface {
    getById(id: string): Promise<Cart>
    create(cart: Cart): Promise<Cart>
    update(cart: Cart): Promise<Cart>
};
