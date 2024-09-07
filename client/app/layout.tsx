import "./globals.css";
import { Jost } from "next/font/google";

import { FeedbackProvider } from "@/store/product-feedback-context";
import { FeedbackQuery } from "@/query/queryclient";

import Footer from "@/layouts/Footer";

const jost = Jost({
  weight: ["100", "200", "300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata = {
  title: "Product Feedback App",
  description: "Product Feedback App developed by Jay Lin",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${jost.className} h-full`}>
      <head />
      <body className="min-h-screen grid grid-rows-[auto,1fr,auto] bg-pfGrayLight leading-loose tracking-wider">
        <FeedbackQuery>
          <FeedbackProvider>
            <main className="w-full max-w-7xl py-24 mx-auto">{children}</main>
            <Footer />
          </FeedbackProvider>
        </FeedbackQuery>
      </body>
    </html>
  );
};

export default RootLayout;
