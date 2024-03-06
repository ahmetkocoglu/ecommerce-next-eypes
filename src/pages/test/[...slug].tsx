import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import React from 'react'

const inter = Inter({ subsets: ["latin"] });

const Test = () => {
  const router = useRouter()
 
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <h1>Test</h1>
    <p>{JSON.stringify(router.query)}</p>
  </main>
  )
}

export default Test