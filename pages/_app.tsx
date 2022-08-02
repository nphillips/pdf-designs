import type { AppProps } from "next/app";
import { AnimusProvider as Provider } from "@animus-ui/components";
import { compatTheme } from "@animus-ui/core";
import { ReactElement } from "react";

declare module "@animus-ui/components" {
  export interface AnimusProviderProps {
    children?: ReactElement;
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider theme={compatTheme}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
