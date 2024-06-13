// app/layout.tsx
import { ReactNode } from "react";
import StoreProvider from "@app/app/StoreProvider";
import { ApolloClientProvider } from "@app/components/provider";
import "./globals.css";
import Sidebar from "@app/components/Sidebar/Sidebar";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ApolloClientProvider>
          <StoreProvider>
            <div className="flex w-[100vw] bg-white">
              <Sidebar />
              {children}
            </div>
          </StoreProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
