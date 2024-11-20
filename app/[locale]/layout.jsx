import "../../public/assets/css/styles.css";

import AnimatedCursor from "react-animated-cursor";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Footer2 from "@/components/footers/Footer2";
import { ReactQueryClientProvider } from "@/components/others/ReactQueryclientProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LayoutProvider } from "@/components/others/LayoutProvider";

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <ReactQueryClientProvider>
      <html lang={locale} className="no-mobile no-touch ">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="appear-animate body">
          <LayoutProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <AnimatedCursor
                showSystemCursor={true}
                innerSize={8}
                outerSize={30}
                color="180, 83, 9"
                outerAlpha={0}
                innerScale={1}
                outerScale={1.5}
                hasBlendMode={true}
                innerStyle={{
                  backgroundColor: "#d0d0d0",
                }}
                outerStyle={{
                  border: "2px solid #d0d0d0",
                }}
                clickables={[
                  "a",
                  'input[type="text"]',
                  'input[type="email"]',
                  'input[type="number"]',
                  'input[type="submit"]',
                  'input[type="image"]',
                  "label[for]",
                  "select",
                  "textarea",
                  "button",
                  ".link",
                  {
                    target: ".custom",
                    options: {
                      innerSize: 35,
                      outerSize: 35,
                      color: "255, 255, 255",
                      outerAlpha: 0.3,
                      innerScale: 0.7,
                      outerScale: 5,
                    },
                  },
                ]}
              />
              <div className="theme-bold">
                <div className="dark-mode">
                  <div className="page bg-dark-1" id="top">
                    <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
                      <Header1Multipage locale={locale} />
                    </nav>
                    {children}
                    <footer className="footer-1 bg-dark-2 light-content">
                      <Footer2 locale={locale} />
                    </footer>
                  </div>
                </div>
              </div>
            </NextIntlClientProvider>
          </LayoutProvider>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
