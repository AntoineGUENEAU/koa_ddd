import {Product, ProductDto} from "../product/product";
import {Entity} from "../entity";

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

    public unmarshal(): CartDto {
        return {
            id: this.id,
            items: this.products.map((product) => ({
                item: product.item.unmarshal(),
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

    get countItems(): number {
        return this._products.length
    }

    get totalPrice(): number {
        return this.products.reduce((carry, line) => {
            return carry + line.item.price
        }, 0)
    }

    public add(item: Product, quantity: number): void {
        this.products = [...this.products, { item, quantity }]
    }
}