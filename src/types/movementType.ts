import { ProductType } from "./productType"

export type MovementType = {
    id: number
    discountPrice: number
    quantity: number
    tax: number
    total: number
    description: string
    product: ProductType
}
