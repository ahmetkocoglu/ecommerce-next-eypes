import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import React from 'react'

const inter = Inter({ subsets: ["latin"] });

const Product = () => {
    const router = useRouter()
    
    return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <h1>Product</h1>
    <div>{router.query.slug}</div>
  </main>
  )
}

export default Product