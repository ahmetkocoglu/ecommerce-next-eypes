import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Layouts } from "@/layouts/Layouts";
import BaseLayout from "@/layouts/BaseLayout";
import { MyAppProps } from "@/layouts/Type";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] || BaseLayout;

  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </Provider>
    </>
  );
}
