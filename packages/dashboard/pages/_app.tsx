import { ChakraProvider } from "@chakra-ui/core";
import type { AppProps } from "next/app";
import React from "react";
import dynamic from "next/dynamic";

const Layout = dynamic(
  import(/* webpackChunkName: "Layout" */ "components/layouts")
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
