import React from 'react'
import { Inter } from "next/font/google";
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const inter = Inter({ subsets: ["latin"] });

const MyBasket = () => {  
    // ** Selector **
    const basket: any = useSelector((state: RootState) => state.basketState);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        {JSON.stringify(basket)}
        My Basket
    </main>
  )
}

export default MyBasket