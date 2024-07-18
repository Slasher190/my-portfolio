"use client";

import { ReactNode } from "react";
import StoreProvider from "@app/app/StoreProvider";
import { ApolloClientProvider } from "@app/components/provider";
import "./globals.css";
import { HelmetProvider } from "react-helmet-async";
// import { useAutoNightMode } from "@app/hooks/useAutoNightMode";
// import useDarkMode from "@app/hooks/useDarkMode";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  // useAutoNightMode();
  // const [colorTheme, toggleTheme] = useDarkMode();
  return (
    <html lang="en">
      <body>
        <HelmetProvider>
          <ApolloClientProvider>
            <StoreProvider>{children}</StoreProvider>
          </ApolloClientProvider>
        </HelmetProvider>
      </body>
    </html>
  );
};

export default RootLayout;
