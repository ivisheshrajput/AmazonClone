import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
//for redux store persist
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className="bg-gray-300">
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </div>
      </PersistGate>
    </Provider>
  );
}
