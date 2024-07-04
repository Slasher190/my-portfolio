"use client";

import { ReactNode } from "react";
import StoreProvider from "@app/app/StoreProvider";
import { ApolloClientProvider } from "@app/components/provider";
import "./globals.css";
import Sidebar from "@app/components/Sidebar/Sidebar";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@app/components/Navbar/Navbar";
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
            <StoreProvider>
              <div className="flex w-[100vw] h-[100vh] overflow-hidden bg-white">
                <Sidebar />
                <div className="flex h-full flex-col w-full">
                  <Navbar />
                  <div className="max-h-full w-full min-h-full bg-[#1e2142] overflow-auto ">
                    {children}
                  </div>
                </div>
              </div>
            </StoreProvider>
          </ApolloClientProvider>
        </HelmetProvider>
      </body>
    </html>
  );
};

export default RootLayout;
