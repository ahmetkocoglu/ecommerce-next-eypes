import {
  useAddBasketMutation,
  useGetProductQuery,
  useSetFavoriteMutation,
  useSetRatingMutation,
} from "@/services/product";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

const Product = () => {
  const router = useRouter();

  const { data, isLoading, isSuccess, isError } = useGetProductQuery(
    `${router.query.slug}`
  );

  const [setFavorite, result] = useSetFavoriteMutation();
  const [setRating, ratingResult] = useSetRatingMutation();
  const [addBasket] = useAddBasketMutation();

  const handleAddFavorite = () => {
    setFavorite({ productId: data.row.id });
  };

  useEffect(() => {
    if (result.isError) toast.error("lütfen üye olunuz");
    if (result.isSuccess) toast.success("ürün favorilere eklendi");
  }, [result]);

  const handleRating = (rating: number) => {
    console.log(rating);
    setRating({
      productId: data.row.id,
      rating,
    });
  };

  const handleAddBasket = () => {
    addBasket({ productId: data.row.id, quantity: 1 });
    toast.success("ürün sepete eklendi")
  };
  return (
    <main
      className={`flex flex-col items-center justify-between p-0 ${inter.className}`}
    >
      {isLoading ? <h1>sayfa yükleniyor lütfen bekleyiniz...</h1> : ''}
      {isError ? (
        <h1>Geçerli veri bulunamadı</h1>
      ) : (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-0 py-5 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
                width={500}
                height={500}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {isSuccess && data.row.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {[1, 2, 3, 4, 5].map((v: number) => {
                      return (
                        <>
                          <span
                            key={v}
                            role="button"
                            onClick={() => handleRating(v)}
                          >
                            {isSuccess &&
                            data.row.ratings.reduce(
                              (total: number, o: any) =>
                                total + parseInt(o.rating),
                              0
                            ) /
                              data.row.ratings.length <
                              v ? (
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                            ) : (
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                            )}
                          </span>
                        </>
                      );
                    })}
                    <span className="text-gray-600 ml-3">
                      {isSuccess && data.row.ratings.length} Reviews
                    </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">
                  {isSuccess && data.row.description}
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    <span className="mx-2 text-black/50 line-through">
                      {isSuccess && data.row.price.price}
                    </span>
                    <span className="mx-2">
                      {isSuccess && data.row.price.discountPrice}
                    </span>
                  </span>
                  <button
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                    onClick={handleAddBasket}
                  >
                    Add Basket
                  </button>
                  <button
                    className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 
                inline-flex items-center justify-center 
                text-${isSuccess && data.favorite ? "red" : "gray"}-500 ml-4`}
                    onClick={handleAddFavorite}
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Product;
