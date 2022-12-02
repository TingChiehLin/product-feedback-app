import "./globals.css";
import { Jost } from "@next/font/google";

const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.className}`}>
      <head />
      <body>{children}</body>
      <footer className="w-full h-20 flex justify-center"></footer>
    </html>
  );
}
