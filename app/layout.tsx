import "./globals.css";
import { Jost } from "@next/font/google";

const jost = Jost({
  weight: ["100", "200", "300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${jost.className}`}>
      <head />
      <body className="min-h-screen relative bg-pfGray_light pt-16 pb-40">
        <main className="w-full max-w-7xl mx-auto">{children}</main>
        <footer className="absolute bottom-0 w-full h-20 flex justify-center items-center bg-pfBlue_dark text-white">
          <div className="text-center text-sm text-gray-200 font-light leading-6 tracking-wide">
            <span>Developed by <a rel="noopener" target="_blank" className="font-bold">Ting Chieh Lin</a></span>
            <br />
            <span>© 2023 JayLinXR All rights reserved.</span>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
