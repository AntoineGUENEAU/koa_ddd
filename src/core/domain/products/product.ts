export type ProductDto = {
    id?: string,
    reference?: string
    name?: string
    price?: number
}

export type Product = {
    id: string,
    reference: string
    name: string
    price: number
    updated_at: Date
    created_at: Date
}
