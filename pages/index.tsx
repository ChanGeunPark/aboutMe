import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";
import CustomCursorContext from "../components/CustomCursor/context/CustomCursorContext";
import CustomCursorManager from "../components/CustomCursor/context/manager";
import Header from "../components/Header";
import { Mainbanner3d } from "../components/Mainbanner3d";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// Import Swiper styles

import { portfolioData1, portfolioData2 } from "../data/portfolio";

// import required modules
import { useContext, useEffect, useRef, useState } from "react";
import AboutMe from "../components/index/AboutMe";
import MyExperience from "../components/index/MyExperience";
import MyStory from "../components/index/MyStory";
import ContectMe from "../components/index/ContactMe";
import Head from "next/head";

const Home: NextPage = () => {
  const scrollContainer = useRef(null);
  const smoothWrapper = useRef<any>(null);
  const smoothContent = useRef<any>(null);
  gsap.registerPlugin(ScrollTrigger);
  const { setType } = useContext(CustomCursorContext);
  return (
    <div id="smooth-wrapper" ref={smoothWrapper}>
      <div id="smooth-content" ref={smoothContent}>
        <Head>
          <title>Park Chan Geun</title>
          <meta
            property="og:title"
            content="안녕하세요 박찬근입니다"
            key="title"
          />
        </Head>
        <CustomCursorManager>
          <CustomCursor />
          <Header />
          <article className="h-screen w-full relative flex-col items-center justify-center bg-[#28292D] hidden md:flex">
            <span className="w-full block absolute top-0 left-0 bg-gradient-to-t to-zinc-900 from-transparent h-[200px] pointer-events-none"></span>

            <Mainbanner3d />
            <section className="container  mx-auto h-full absolute  pointer-events-none">
              <div className="w-full h-full relative">
                <div className="flex items-center absolute right-0 translate-x-[40%] rotate-90 z-10 bottom-1/4">
                  <span className="text-zinc-400 mr-2">Park Chan Geun</span>
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
                      strokeLinecap="round"
                      strokeWidth="1"
                      opacity="0.485"
                    />
                  </svg>
                </div>
                <div className=" absolute left-0 z-20 bottom-1/4 flex flex-col space-y-2 pointer-events-auto">
                  <span className="border w-12 h-12 text-white rounded-lg border-zinc-500 flex justify-center items-center">
                    <Link href="/" className=" text-zinc-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-zinc-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
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

          <AboutMe />
          <MyExperience />

          <MyStory />

          <article className="py-6">
            <div className="container mx-auto">
              <h2 className="font-bold text-3xl px-3 md:px-0">
                다양한 도전을 하고있습니다.
              </h2>
            </div>
            <section>
              <div className="client-slider mt-12 mb-5">
                <div className="client-slide-track space-x-5">
                  {portfolioData1.map((poartfolio, index) => (
                    <div
                      className="client-slide rounded-lg overflow-hidden"
                      key={index}
                    >
                      <img
                        src={poartfolio.src}
                        className="object-cover w-full h-full"
                        alt="poartfolio img"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="client-slider2 mb-12">
                <div className="client-slide-track space-x-5">
                  {portfolioData2.map((portfolio, index) => (
                    <div
                      className="client-slide rounded-lg overflow-hidden"
                      key={index}
                    >
                      <img
                        src={portfolio.src}
                        className="object-cover w-full h-full"
                        alt="poartfolio img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </article>

          <ContectMe />

          <style>{`
        .about {
          -webkit-text-stroke: 2px #ffeeee;
        }
        .story{
          -webkit-text-stroke: 2px #28292D;
        }
        
        @-webkit-keyframes scroll {
          0% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
          }
      
          100% {
              -webkit-transform: translateX(calc(-350px * 6));
              transform: translateX(calc(-350px * 6));
          }
      }
      
      @keyframes scroll {
          0% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
          }
      
          100% {
              -webkit-transform: translateX(calc(-350px * 6));
              transform: translateX(calc(-350px * 6));
          }
      }
      
      .client-slider {
          overflow: hidden;
          position: relative;
      }
      
      
      
      .client-slider::after {
          right: 0;
          top: 0;
          -webkit-transform: rotateZ(180deg);
          transform: rotateZ(180deg);
      }
      
      .client-slider::before {
          left: 0;
          top: 0;
      }
      
      .client-slider .client-slide-track {
          -webkit-animation: scroll 60s linear infinite;
          animation: scroll 60s linear infinite;
          display: -webkit-box;
          display: flex;
          width: calc(450px * 12);
      }
      
      .client-slider .client-slide-track:hover {
          animation-play-state: paused;
      }
      
      .client-slider .client-slide {
          height: 250px;
          width: 450px;
          border:solid 5px #ddd
      }
      
      
      
      
      
      
      .client-slider2 {
          overflow: hidden;
          position: relative;
      }
      
      
      
      .client-slider2::after {
          right: 0;
          top: 0;
          -webkit-transform: rotateZ(180deg);
          transform: rotateZ(180deg);
      }
      
      .client-slider2::before {
          left: 0;
          top: 0;
      }
      
      .client-slider2 .client-slide-track {
          -webkit-animation: scroll 40s linear infinite;
          animation: scroll 50s linear infinite;
          display: -webkit-box;
          display: flex;
          width: calc(500px * 12);
      }
      
      .client-slider2 .client-slide-track:hover {
          animation-play-state: paused;
      }
      
      
      .client-slider2 .client-slide {
          height: 250px;
          width: 450px;
          border:solid 5px #ddd;
      }


      `}</style>
        </CustomCursorManager>
      </div>
    </div>
  );
};

export default Home;
