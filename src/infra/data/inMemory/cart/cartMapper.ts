import {Cart, CartDto, CartLineDto} from "../../../../core/domain/cart/cart";

const getProducts = (products: CartLineDto[]) => {
    return products.map((cartLine) => ({
        item: cartLine.item,
        quantity: cartLine.quantity,
    }))
}

export class CartMapper {
    public static toDomain(raw: CartDto): Cart {
        return Cart.create({
            id: raw.id,
            products: getProducts(raw.items || []),
        })
    }
}
