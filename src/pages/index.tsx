import Image from "next/image";
import { Inter } from "next/font/google";
import AuthLogin from "@/components/auth/auth-login";
import { MyPage } from "@/layouts/Type";

const inter = Inter({ subsets: ["latin"] });

const Home: MyPage = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Home Page -- Test</h1>
    </main>
  );
}

Home.Layout = 'Base'

export default Home