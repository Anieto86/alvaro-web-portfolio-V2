import "@fontsource-variable/onest";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { ReactNode } from "react";

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>
      </head>

      <body>
        <Header />
        <div
          className="
        absolute top-0 z-[-2] min-h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
        dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
      "
        >
          {children}
          <Footer />
        </div>
        <link rel="stylesheet" href="/index.css" />
      </body>
    </html>
  );
};
