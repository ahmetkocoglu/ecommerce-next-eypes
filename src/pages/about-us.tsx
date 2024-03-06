import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({ subsets: ["latin"] });

const AboutUs = () => {
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <h1>About Us</h1>
  </main>
  )
}

export default AboutUs