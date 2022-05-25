import type { NextPage } from "next";
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
      <article className="h-screen w-full relative">
        <span className="w-full block absolute top-0 left-0 bg-gradient-to-t to-zinc-900 from-transparent h-[200px] pointer-events-none"></span>
        <h2 className="text-zinc-300 absolute top-[30%] left-0 text-center w-full text-xl pointer-events-none">
          Welcome to my website
        </h2>
        <Mainbanner3d />
        <p className="text-zinc-300 absolute left-0 bottom-[32%] text-center w-full pointer-events-none">
          배우고 경험하고 도전하고 싶은게 너무 많은 개발자 박찬근입니다
        </p>
        <span className="block w-full h-[200px] bg-gradient-to-t to-transparent from-[#28292E] absolute left-0 bottom-0 pointer-events-none"></span>
      </article>
      <article className="min-h-screen bg-[#28292E]"></article>
    </CustomCursorManager>
  );
};

export default Home;
