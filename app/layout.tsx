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
                <div className="flex flex-col w-full">
                  <Navbar />
                  <div className="grid h-full w-full bg-light-surface dark:bg-dark-background overflow-auto">
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
