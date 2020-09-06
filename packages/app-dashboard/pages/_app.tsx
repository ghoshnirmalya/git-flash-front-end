import { ChakraProvider } from "@chakra-ui/core";
import type { AppProps } from "next/app";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
