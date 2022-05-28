import type { NextPage } from "next";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";
import CustomCursorContext from "../components/CustomCursor/context/CustomCursorContext";
import CustomCursorManager from "../components/CustomCursor/context/manager";
import Header from "../components/Header";
import { Mainbanner3d } from "../components/Mainbanner3d";
const Home: NextPage = () => {
  return (
    <CustomCursorManager>
      <CustomCursor />
      <Header />
      <article className="h-screen w-full relative flex flex-col items-center justify-center">
        <span className="w-full block absolute top-0 left-0 bg-gradient-to-t to-zinc-900 from-transparent h-[200px] pointer-events-none"></span>

        <Mainbanner3d />
        <section className="container  mx-auto h-full absolute  pointer-events-none">
          <div className="w-full h-full relative">
            <div className="flex items-center absolute right-0 translate-x-[40%] rotate-90 z-10 bottom-1/4">
              <span className="text-zinc-400 mr-2">Park Chan Geun </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36.214"
                className="stroke-zinc-300"
                height="6.927"
                viewBox="0 0 36.214 6.927"
              >
                <path
                  id="arrow1"
                  data-name="arrow1"
                  d="M1717.5,832.471v34.458l-5.72-6.047"
                  transform="translate(-831.971 1718) rotate(-90)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-width="1"
                  opacity="0.485"
                />
              </svg>
            </div>
            <div className=" absolute left-0 z-20 bottom-1/4 flex flex-col space-y-2">
              <span className="border w-12 h-12 text-white rounded-lg border-zinc-500 flex justify-center items-center">
                <Link href="/" className=" text-zinc-500">
                  asdf
                </Link>
              </span>
              <span className="border w-12 h-12 text-white rounded-lg border-zinc-500 flex justify-center items-center">
                <Link href="/" className=" text-zinc-500">
                  asdf
                </Link>
              </span>
              <span className="border w-12 h-12 text-white rounded-lg border-zinc-500 flex justify-center items-center">
                <Link href="/" className=" text-zinc-500">
                  asdf
                </Link>
              </span>
            </div>
          </div>
        </section>
        <p className="text-zinc-500 absolute left-0 translate-y-28 text-center w-full pointer-events-none">
          배우고 경험하고 도전하고 싶은게 너무 많은 개발자 박찬근입니다
        </p>
        <span className="block w-full h-[200px] bg-gradient-to-t to-transparent from-[#28292E] absolute left-0 bottom-0 pointer-events-none"></span>
      </article>
      <article className="min-h-screen bg-[#image.png28292E]"></article>
    </CustomCursorManager>
  );
};

export default Home;
