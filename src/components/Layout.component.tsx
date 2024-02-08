import { ReactNode } from "react";
import { Header } from "./Header.component";
import { Footer } from "./Footer.component";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
