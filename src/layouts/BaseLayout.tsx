import React from "react";
import {Inter} from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({subsets: ['latin']})

interface Props {
  children: React.ReactNode;
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      <Header/>
      <div className="w-full">
        <div className="m-10">
          {children}
        </div>
      </div>
      <Footer/>
    </div>
    // <>
    //   <div>Header</div>
    //   {children}
    //   <div>Footer</div>
    // </>
  );
};

export default BaseLayout;
