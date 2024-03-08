import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ToastContainer } from "react-toastify";
import { Layouts } from "@/layouts/Layouts";
import BaseLayout from "@/layouts/BaseLayout";
import { MyAppProps } from "@/layouts/Type";

export default function App({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] || BaseLayout;

  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
