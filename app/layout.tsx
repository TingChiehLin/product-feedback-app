import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({
  weight: ["100", "200", "300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${jost.className}`}>
      <head />
      <body className="min-h-screen grid grid-rows-[auto,1fr,auto] bg-pfGrayLight leading-loose tracking-wider">
        <main className="w-full max-w-7xl py-24 mx-auto">{children}</main>
        <footer className="w-full py-5 flex self-end justify-center items-center
                         bg-pfBlueDark"
        >
          <div className="text-center text-sm text-slate-300 font-light flex flex-col gap-y-1">
            <span>Developed by 
              <a rel="noopener noreferrer" href="https://github.com/TingChiehLin/product-feedback-app" 
                 target="_blank" className="cursor-pointer font-bold text-slate-200">&nbsp;Ting Chieh Lin
              </a>
            </span>
            <span>© 2024 JayLinXR All rights reserved.</span>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
