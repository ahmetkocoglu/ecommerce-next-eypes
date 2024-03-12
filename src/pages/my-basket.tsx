import React, { useState } from "react";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { MovementType } from "@/types/movementType";
import Image from "next/image";
import { useRemoveBasketMutation } from "@/services/product";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

const MyBasket = () => {
  // ** Selector **
  const { basket } = useSelector((state: RootState) => state.basketState);

  const [removeBasket, result] = useRemoveBasketMutation();

  // ** State **
  const [selected, setSelected] = useState<number[]>([]);

  const handleChangeChecked = (item: any) => {
    const _selected = selected.find((k: number) => k === parseInt(item.id));
    if (_selected) {
      setSelected(selected.filter((k: number) => k !== parseInt(item.id)));
    } else {
      setSelected([...selected, item.id]);
    }
  };

  const handleChangeAllChecked = () => {
    if (selected.length > 0) {
      setSelected([]);
    } else {
      basket.map((item: MovementType) => {
        selected.push(item.id);
      });
      setSelected([...selected]);
    }
  };

  const handleRowDelete = (item: MovementType) => {
    removeBasket({ movements: [item.id] });
    toast.success("ürün sepetten silindi");
  };

  const handleSelectedDelete = () => {
    removeBasket({ movements: selected }); // [11,12,13]
    toast.success("seçili ürünler sepetten silindi");
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleChangeAllChecked()}
                    className="checkbox"
                    checked={selected.length === basket.length ? true : false}
                  />
                </label>
              </th>
              <th>Product Name</th>
              <th>Discount Price</th>
              <th>Quantity</th>
              <th>Tax</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {basket?.map((k: MovementType) => {
              return (
                <tr key={k.id}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        checked={
                          selected.find((l: number) => l === k.id)
                            ? true
                            : false
                        }
                        onChange={() => handleChangeChecked(k)}
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
                        {k.id}-{k.product.title}
                      </div>
                    </div>
                  </td>
                  <td>{k.discountPrice}</td>
                  <td>{k.quantity}</td>
                  <td>{k.tax}</td>
                  <td>{k.total}</td>
                  <th>
                    <button
                      onClick={() => handleRowDelete(k)}
                      className="btn btn-ghost btn-xs"
                    >
                      delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          <thead>
            <tr>
              <td>
                {selected.length > 0 ? (
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={handleSelectedDelete}
                  >
                    selected
                    <br />
                    delete
                  </button>
                ) : (
                  ""
                )}
              </td>
              <td colSpan={6}></td>
            </tr>
          </thead>
        </table>
      </div>
    </main>
  );
};

export default MyBasket;
