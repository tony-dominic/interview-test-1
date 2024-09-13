import { FC } from "react";
import { LayoutFooter, LayoutHeader } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="flex h-screen flex-col justify-between overflow-x-hidden">
      <LayoutHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
