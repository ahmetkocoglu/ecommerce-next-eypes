import { useGetProductQuery, useSetProductMutation } from "@/services/product";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductType } from "@/types/productType";
import { FormProductType } from "@/types/formProductType";

interface Props {
  slug: string;
}

const ProductDetail = ({ slug }: Props) => {
  const [setProduct, result] = useSetProductMutation();

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductQuery(`${slug}`);

  const formik = useFormik({
    initialValues: {
      id: 0,
      title: "",
      description: "",
      barcode: "",
      stockCode: "",
      tax: "",
      confirm: false,
      salePrice: 0,
      discountPrice: 0,
      discountRate: 0,
    } as FormProductType,
    validationSchema: Yup.object({
      title: Yup.string().required("lütfen title giriniz"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setProduct(values)
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.setValues({
        id: product.row?.id ?? 0,
        title: product.row?.title ?? "",
        description: product.row?.description ?? "",
        barcode: product.row?.barcode ?? "",
        stockCode: product.row?.stockCode ?? "",
        tax: product.row?.tax ?? "",
        confirm: product.row?.confirm ?? "",
        salePrice: product.row?.price?.price ?? "",
        discountPrice: product.row?.price?.discountPrice ?? "",
        discountRate: product.row?.price?.discountRate ?? "",
      } as FormProductType);
    }
  }, [product]);

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
              type="number"
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
          <label
            htmlFor="salePrice"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            Sale Price
          </label>
          <div className="mt-2">
            <input
              id="salePrice"
              name="salePrice"
              type="number"
              autoComplete="salePrice"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.salePrice}
            />
            {formik.touched.salePrice && formik.errors.salePrice ? (
              <div>{formik.errors.salePrice}</div>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="discountPrice"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            Discount Price
          </label>
          <div className="mt-2">
            <input
              id="discountPrice"
              name="discountPrice"
              type="number"
              autoComplete="discountPrice"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.discountPrice}
            />
            {formik.touched.discountPrice && formik.errors.discountPrice ? (
              <div>{formik.errors.discountPrice}</div>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="discountRate"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            Discount Rate
          </label>
          <div className="mt-2">
            <input
              id="discountRate"
              name="discountRate"
              type="number"
              autoComplete="discountRate"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.discountRate}
            />
            {formik.touched.discountRate && formik.errors.discountRate ? (
              <div>{formik.errors.discountRate}</div>
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

export default ProductDetail;
