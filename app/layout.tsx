// app/layout.tsx
import { ReactNode } from "react";
import StoreProvider from "@app/app/StoreProvider";
import { ApolloClientProvider } from "@app/components/provider";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ApolloClientProvider>
          <StoreProvider>{children}</StoreProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
