import {Product, ProductDto} from "../product/Product";
import {Entity} from "../Entity";

export interface CartLine {
    item: Product
    quantity: number
}

export interface CartLineDto {
    item: ProductDto
    quantity: number
}

export interface CartDto {
    id: string
    items: CartLineDto[]
    totalPrice: number
}

export interface CartProps {
    id?: string
    products?: CartLineDto[]
}

export class Cart extends Entity<CartProps>{

    private _products: CartLine[]

    constructor({ id, ...data }: CartProps) {
        super(data, id)
    }

    public static create(props: CartProps): Cart {
        const cart: Cart = new Cart(props)
        cart.products = cart.props.products || []
        return cart
    }

    public toDto(): CartDto {
        return {
            id: this.id,
            items: this.products.map((product) => ({
                item: product.item.toDto(),
                quantity: product.quantity,
            })),
            totalPrice: this.totalPrice,
        }
    }

    get products(): CartLine[] {
        return this._products
    }

    set products(products: CartLineDto[]) {
        this._products = products.map((p) => ({
            item: p.item instanceof Product ? p.item : Product.create(p.item),
            quantity: p.quantity,
        }))
    }

    get id(): string {
        return this._id
    }

    get totalPrice(): number {
        return this.products.reduce((carry, line) => {
            return carry + line.item.price
        }, 0)
    }

    public add(item: ProductDto, quantity: number): void {
        this.products = [...this.products, { item, quantity }]
    }
}
