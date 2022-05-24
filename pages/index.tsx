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
        <Mainbanner3d />
      </article>
      <article className="min-h-screen"></article>
    </CustomCursorManager>
  );
};

export default Home;
