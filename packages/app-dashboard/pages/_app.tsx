import { Box, ChakraProvider } from "@chakra-ui/core";
import type { AppProps } from "next/app";
import React from "react";
import { Navbar } from "@components/navbar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS>
      <Box bg="gray.100" minH="100vh">
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
