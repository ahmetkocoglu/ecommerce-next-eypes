import { useGetCategoriesQuery } from "@/services/category";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();

  const { data: category, isSuccess } = useGetCategoriesQuery(
    `category/${router.query.slug}`
  );

  return (
    <>
      <div className="mx-10 my-5">
        <h1 className="text-center">
          {isSuccess && category.row.category.title}
        </h1>
        <p className="text-center">
          {isSuccess && category.row.category.description}
        </p>
        <hr />
        {isSuccess &&
          category.row.products.map((item: any, index: number) => {
            return (
              <div key={index}>
                <Link href={`/product/${item.seo}`}>{item.title}</Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Category;
