import {CartRepositoryInterface} from "../../../../core/domain/cart/cartRepositoryInterface";
import {inject, injectable} from "inversify";
import {Cart, CartDto} from "../../../../core/domain/cart/cart";
import {MemoryData} from "../memory-data";
import {TYPES} from "../../../../types";
import {CartMapper} from "./cartMapper";
import {ResourceNotFound} from "../../../../errors/errorsNotFound";

@injectable()
export class CartRepository implements CartRepositoryInterface {
    @inject(TYPES.Database) private _database: MemoryData

    async getById(id: string): Promise<Cart> {
        const cart = await this._database.cart.getById<CartDto>(id)
        if (!cart) {
            throw new ResourceNotFound('Cart', { id })
        }
        return CartMapper.toDomain(cart)
    }
    async create(cart: Cart): Promise<Cart> {
        const dtoCart = cart.toDto()
        const inserted = await this._database.cart.insert<CartDto>(dtoCart)
        return CartMapper.toDomain(inserted)
    }

    async update(cart: Cart): Promise<Cart> {
        const dtoCart = cart.toDto()
        const updated = await this._database.cart.update<CartDto>(
            cart.id,
            dtoCart,
        )
        return CartMapper.toDomain(updated)
    }
}
