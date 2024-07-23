"use client";

import { ReactNode, useState } from "react";
import "../globals.css";
import Sidebar from "@app/components/Sidebar/Sidebar";
import Navbar from "@app/components/Navbar/Navbar";
import { useAutoNightMode } from "@app/hooks/useAutoNightMode";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useAutoNightMode();
  const [mobile, setMobile] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="flex w-[100vw] h-[100vh] overflow-hidden bg-light-background dark:bg-dark-surface">
          <Sidebar setMobile={setMobile} mobile={mobile} />
          <div className="flex flex-col w-full">
            <Navbar setMobile={setMobile} mobile={mobile} />
            <div className="grid h-full w-full bg-light-background dark:bg-dark-surface overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
