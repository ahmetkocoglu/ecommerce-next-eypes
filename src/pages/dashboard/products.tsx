import { useGetProductsQuery } from '@/services/product';
import { ProductType } from '@/types/productType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Products = () => {
    const {data, isSuccess, isError} = useGetProductsQuery("/product");
 
    return (
        <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                />
              </label>
            </th>
            <th>Product Name</th>
            <th>barcode</th>
            <th>stockCode</th>
            <th>description</th>
            <th>Tax</th>
            <th>Price</th>
            <th>discountPrice</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isSuccess && data.list.map((k: ProductType, index: number) => {
            return (
              <tr key={index}>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          alt="ecommerce"
                          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                          src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <div>
                      {k.title}
                    </div>
                  </div>
                </td>
                <td>{k.barcode}</td>
                <td>{k.stockCode}</td>
                <td>{k.description}</td>
                <td>{k.tax}</td>
                <td>{k.price.price}</td>
                <td>{k.price.discountPrice}</td>
                <th>
                  <Link href={`/dashboard/product/${k.seo}`}>detail</Link>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
  )
}

export default Products