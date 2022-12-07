import "./globals.css";
import { Jost } from "@next/font/google";
import Link from "next/link";

import { Tag } from "../components/Tag";
import { Process } from "../components/Process";
import { Header } from "../components/Header";

const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gradientBG = {
    width: "255px",
    height: "137px",
    background:
      "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
    borderRadius: "10px",
  };

  return (
    <html lang="en" className={`${jost.className} relative`}>
      <head />
      <body className="h-screen pb-[5rem] bg-bgColor">
        <div id="continer" className="w-full max-w-7xl mx-auto mt-28">
          <aside>
            <figure
              id="broder-title"
              style={gradientBG}
              className="text-white relative"
            >
              <div className="absolute bottom-6 left-6">
                <figcaption className="font-bold text-xl">
                  Frontend Mentor
                </figcaption>
                <figcaption className="font-medium text-sm">
                  Feedback Board
                </figcaption>
              </div>
            </figure>
            <div
              id="broder-tag"
              className="bg-white w-64 h-full px-6 py-6 my-6 rounded-[10px] flex justify-start flex-wrap gap-x-2 gap-y-[14px]"
            >
              <Tag text={"All"} />
              <Tag text={"UI"} />
              <Tag text={"UX"} />
              <Tag text={"Enhancement"} />
              <Tag text={"Bug"} />
              <Tag text={"Feature"} />
            </div>
            <div
              id="roadmap-process"
              className="w-64  px-6 py-6 bg-white rounded-[10px]"
            >
              <div className="flex justify-between items-center mb-6">
                <h1 className="font-bold text-lg text-pfBlue_dark">Roadmap</h1>
                <Link
                  href="/roadmap"
                  className="text-sm text-pfBlue_normal hover:text-[#8397F8] hover:underline cursor-pointer"
                >
                  View
                </Link>
              </div>
              <Process title={"Planned"} number={2} />
              <Process title={"In-Progress"} number={3} />
              <Process title={"Live"} number={1} />
            </div>
          </aside>
          <div>
            <header>
              <nav>
                <div>icon</div>
                <div>
                  <h1>{6} Suggestions</h1>
                </div>
                <ul>Sort by:Dropdown Menu</ul>
              </nav>
              <button>+ Add Feedback</button>
            </header>
            <main className="">{children}</main>
          </div>
        </div>
        <footer className="absolute bottom-0 w-full h-20 flex justify-center items-center bg-pfBlue_dark text-white">
          <div className="text-center">
            <span>Developed by Ting Chieh Lin</span>
            <br />
            <span>© 2023 JayLinXR All rights reserved.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
