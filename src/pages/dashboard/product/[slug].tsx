import { useGetProductQuery } from "@/services/product";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductType } from "@/types/productType";

const Product = () => {
  const router = useRouter();

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductQuery(`${router.query.slug}`);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      barcode: "",
      stockCode: "",
      tax: "",
    } as ProductType,
    validationSchema: Yup.object({
      title: Yup.string().required("lütfen title giriniz"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    console.log();
  }, [isSuccess, isLoading]);

  return (
    <main className={`flex mx-10 my-5 flex-col`}>
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            Product Name
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="text"
              autoComplete="title"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            Product description
          </label>
          <div className="mt-2">
            <input
              id="description"
              name="description"
              type="text"
              autoComplete="description"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div>{formik.errors.description}</div>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="barcode"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            Product barcode
          </label>
          <div className="mt-2">
            <input
              id="barcode"
              name="barcode"
              type="text"
              autoComplete="barcode"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.barcode}
            />
            {formik.touched.barcode && formik.errors.barcode ? (
              <div>{formik.errors.barcode}</div>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="stockCode"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            Product stockCode
          </label>
          <div className="mt-2">
            <input
              id="stockCode"
              name="stockCode"
              type="text"
              autoComplete="stockCode"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stockCode}
            />
            {formik.touched.stockCode && formik.errors.stockCode ? (
              <div>{formik.errors.stockCode}</div>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="tax"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            Product tax
          </label>
          <div className="mt-2">
            <input
              id="tax"
              name="tax"
              type="text"
              autoComplete="tax"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tax}
            />
            {formik.touched.tax && formik.errors.tax ? (
              <div>{formik.errors.tax}</div>
            ) : null}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default Product;
