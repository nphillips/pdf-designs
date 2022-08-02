import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimusProvider } from "@animus-ui/components";
import { compatTheme } from "@animus-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimusProvider theme={compatTheme}>
      <Component {...pageProps} />
    </AnimusProvider>
  );
}

export default MyApp;
