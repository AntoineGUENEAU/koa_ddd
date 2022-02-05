import {Entity} from "../entity";

export type ProductDto = {
    id: string;
    reference: string;
    name: string;
    price: number;
    updated_at? : Date;
    created_at? : Date;
};

export type ProductProps = {
    id: string;
    reference: string;
    name: string;
    price: number;
    updated_at? : Date;
    created_at? : Date;
};

export class Product extends Entity<ProductProps> {
    constructor(props: ProductProps) {
        super(props, props.id)
    }

    public static create(props: ProductProps): Product {
        return new Product(props)
    }

    public unmarshal(): ProductDto {
        return {
            id: this.id,
            reference: this.reference,
            name: this.name,
            price: this.price,
            updated_at: this.updated_at,
            created_at: this.created_at,
        }
    }

    get id(): string {
        return this._id
    }

    get reference(): string {
        return this.props.reference
    }

    get name(): string {
        return this.props.name
    }

    get price(): number {
        return this.props.price
    }

    get updated_at(): Date {
        return this.props.updated_at
    }

    get created_at(): Date {
        return this.props.created_at
    }
}
