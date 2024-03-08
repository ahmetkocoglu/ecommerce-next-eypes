import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <h1>Contact</h1>
    </main>
  )
}

export default Contact