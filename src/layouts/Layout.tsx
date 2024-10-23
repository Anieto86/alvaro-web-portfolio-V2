import '@fontsource-variable/onest';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { ReactNode } from 'react';

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
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Header />
        {children}
        <Footer />

        <style>{`
          :root {
            color-scheme: light dark;
          }

          html {
            font-family: 'Onest Variable', system-ui, sans-serif;
            scroll-behavior: smooth;
          }

          body {
            color: rgba(17, 17, 17, 0.9);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            overscroll-behavior: none;
          }

          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }
          }

          @media (prefers-color-scheme: dark) {
            body {
              color: rgba(255, 255, 255, 0.9);
            }
          }

          #header-nav {
            animation: blur linear both 0.5s;
            animation-timeline: scroll();
            animation-range: 0 500px;
          }

          @keyframes blur {
            to {
              backdrop-filter: blur(20px);
              border-width: 1px;
              border-color: rgba(0, 0, 0);
              padding: 0.25rem 0.75rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              background-color: rgb(229, 229, 229);
              border-radius: 9999px;
            }
          }

          @media (prefers-color-scheme: dark) {
            @keyframes blur {
              from {
                border: 0px;
              }
              to {
                box-shadow: 0px 5px 50px -5px rgba(0, 0, 0, 0.1),
                  0px 0px 0 1px rgba(0, 0, 0, 0.3);
                background: rgba(0, 0, 0, 0.3);
                backdrop-filter: blur(20px);
                border-width: 1px;
                border-color: rgba(0, 0, 0);
                padding-left: 0.75rem;
                padding-right: 0.75rem;
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                background-color: rgba(0, 0, 0, 0.3);
                border-radius: 9999px;
              }
            }
          }
        `}</style>
      </body>
    </html>
  );
};
