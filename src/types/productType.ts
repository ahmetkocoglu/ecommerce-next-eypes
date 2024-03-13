import { PriceType } from "./priceType"

export type ProductType = {
    id: number
    title: string
    seo: string     //slug
    description: string
    barcode: string
    stockCode: string
    tax: string
    price: PriceType
}