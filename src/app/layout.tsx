import MainHeader from "@/сomponents/layout/header/MainHeader";
import MainFooter from "@/сomponents/layout/footer/MainFooter";
import "./globals.scss";
import { Providers } from "@/сomponents/Providers";
import { Metadata } from "next";
import MobileMenu from "@/сomponents/layout/mobileMenu/MoblieMenu";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "oystr",
  description: "oystr blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#ff5500"
          initialPosition={0.08}
          crawlSpeed={200}
          height={1}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow=""
        />
        <Providers>
          <div className="contentContainer">
            <MainHeader />
            {children}
            <MainFooter />
            <MobileMenu />
          </div>
        </Providers>
      </body>
    </html>
  );
}
