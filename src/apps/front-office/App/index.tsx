import { MantineProvider } from "@mantine/core";
import React from "react";

export type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}
