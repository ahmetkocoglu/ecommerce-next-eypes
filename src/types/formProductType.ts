import { PriceType } from "./priceType"

export type FormProductType = {
    id: number
    title: string
    seo: string     //slug
    description: string
    barcode: string
    stockCode: string
    tax: string
    confirm: boolean
    salePrice: number
    discountPrice: number
    discountRate: number
}