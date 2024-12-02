import "@fontsource-variable/onest";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center  font-oneStyle">
      <Header />
      <div
        className="
        absolute top-0 min-h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
        dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      >
        {children}
        <Footer />
      </div>
    </div>
  );
};
