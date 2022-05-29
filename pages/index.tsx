import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";
import CustomCursorContext from "../components/CustomCursor/context/CustomCursorContext";
import CustomCursorManager from "../components/CustomCursor/context/manager";
import Header from "../components/Header";
import { Mainbanner3d } from "../components/Mainbanner3d";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Grid, Pagination, Navigation, EffectCreative } from "swiper";

const Home: NextPage = () => {
  return (
    <CustomCursorManager>
      <CustomCursor />
      <Header />
      <article className="h-screen w-full relative flex flex-col items-center justify-center bg-[#28292D]">
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

      <article className="bg-[#28292D] relative px-3">
        <section className="container mx-auto grid grid-cols-2 gap-12">
          <div className="flex justify-center">
            {/* 내 얼굴 */}
            <div className="relative  -translate-y-[20%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="564.195"
                height="781.168"
                viewBox="0 0 564.195 781.168"
              >
                <path
                  id="hat"
                  data-name="hat"
                  d="M215.86,330.682s29.592,101.27,33.538,140.726S244.137,501,232.3,481.625s-30.25-39.808-46.032-55.591-5.261,25.646-1.315,59.841-17.1,46.032-49.978,48S33.706,547.69,17.923,551.636,2.8,552.951,6.744,530.592,43.57,470.751,79.08,429.322s29.592-74.966,23.674-112.449S31.733,209.684,12,180.75,3.456,120.908,30.418,61.724s67.733-82.2,119.025-81.542S254-21.791,290.827-29.024s63.129,11.179,80.157,43.492,5.989,74.876.728,99.207S391.439,145.9,391.439,145.9s7.739,3.266,9.988-8.8-3.451-20.483,19.555-54.066,22.88-81.585,0-120.081S325.9-113.19,334.506-164.909s52.25-61.123,52.25-61.123"
                  transform="translate(-1.13 227.01)"
                  fill="none"
                  stroke="#fee"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <path
                  id="face"
                  data-name="face"
                  d="M434.757,347.092s4.96,5.918,5.11,0-8.4-17.755-5.768-21.7,5.261-3.946,6.576-4.6.658-3.946-1.315-7.234-6.576-7.891-9.206-8.549.658-2.63,1.973-2.63a24.668,24.668,0,0,0,6.576-.658c1.973-.658,5.918-5.918,5.918-7.234s-.658-1.973-3.946-5.918-5.918-7.234-7.891-9.864-2.63-4.6-7.891-4.6-11.837.658-13.81-.658-7.891-9.206-9.206-14.467,0-12.494,1.973-13.152,5.688-1.315,5.474,0-1.528,4.6-1.528,7.234,3.288,11.837,5.261,13.152,6.576,3.288,9.206-.658,4.6-10.522,11.179-11.179,11.179,3.288,14.467,3.288,4.6-2.63,4.6-5.918.658-8.549-3.946-13.152-13.152-12.494-17.1-18.413-13.81-12.494-15.125-15.125-.658-4.6,0-6.576,1.973-9.206.658-9.206-1.973.658-3.288,3.288-3.946,3.946-7.891,6.576-11.179,7.234-12.494,9.864-.658,8.549-3.288,10.522-5.261,2.63-10.522-2.63-16.44-14.467-13.81-14.467S380.176,213.6,384.122,213.6s3.946-1.315,4.6-2.63-1.315-15.125-2.63-17.1-19.07,3.288-21.7,5.261-7.234-12.494-3.946-21.7,11.179-8.549,20.386-6.576,27.619,10.522,29.592,12.494,1.973,1.315,2.63-1.315,1.315-15.125.658-18.413-17.1-28.277-21.7-37.483S369,81.422,368.34,70.9s4.6-13.152,13.152-7.891,10.522,17.1,8.549,29.592-13.81,108.5-53.923,128.889-61.157-7.234-72.994,0-17.1,10.522-17.1,17.1,3.288,13.152,2.63,15.125-3.946-2.63-11.837-5.261-15.125-5.261-11.837-7.891,10.522-6.576,7.891-7.891-7.234,1.973-11.179,1.973-7.234-.658-5.918-9.206,7.891-13.152,9.206-9.864,1.315,9.864,5.918,7.891,4.6-7.234,4.6-19.728-10.522-19.728-21.7-17.1-15.394,3.946-22.493,18.413-7.757,39.456,3.422,54.581,21.7,19.07,36.168,21.7,21.043,8.549,24.331,20.386,9.206,32.222,25.646,40.114,51.95,19.728,90.749,22.358,53.266,1.315,59.184,1.315,8.549,1.973,5.918,6.576-5.261,11.837-20.386,12.494-42.086-3.288-50.635-1.973-10.522,5.261-10.522,9.206,3.946,24.989,10.522,33.538,7.234,11.837,21.7,15.125,35.51,7.234,49.978,12.494,19.728,10.522,40.113,10.522,65.1.658,94.037,27.619,49.32,51.95,55.9,69.706"
                  transform="translate(-64.176 174.432)"
                  fill="none"
                  stroke="#fee"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </svg>
              <span className="w-4 h-4 block rounded-full bg-white absolute top-0 -translate-y-1/2 right-[30%]"></span>
            </div>
          </div>

          <div className="pt-12 text-zinc-300">
            <h1 className="text-[#FFEEEE] font-extrabold text-6xl">
              <span className="text-[#28292D] about">ABOUT</span>
              <span className="ml-3">ME.</span>
            </h1>
            <h2 className="mt-9">
              배우고 경험하고 도전하고 싶은게 너무 많은 웹 개발자 박찬근입니다
            </h2>
            <p className="mt-9 leading-relaxed">
              저는 기존에 없었던 새로운 목표에 대한 도전을 즐기며 <br />
              이전엔 없었던 창조적인 웹을 만드는데 관심이 많습니다
            </p>

            <div className="flex space-x-3 mt-9">
              <span className="inline-block px-6 py-2 border border-zinc-300 rounded-full">
                배움
              </span>
              <span className="inline-block px-6 py-2 border border-zinc-300 rounded-full">
                경험
              </span>
              <span className="inline-block px-6 py-2 border border-zinc-300 rounded-full">
                도전
              </span>
            </div>
            <div className="mt-9">
              <h3 className="text-orange-400">EXPERIENCED SKILLS+</h3>
              <div className="mt-3">
                <span className="mr-2">
                  <Image
                    src={`https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/6f11ac01-c930-4ab0-a172-6b92514fc000/avatar`}
                    layout="fixed"
                    alt="react"
                    height={40}
                    width={40}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/5ceef42d-4f59-4e5f-7af9-16d65a22da00/avatar"
                    layout="fixed"
                    alt="nextjs"
                    height={40}
                    width={85}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/c8547cf7-cd89-4574-9dac-d608ff96f500/avatar"
                    layout="fixed"
                    alt="html"
                    height={40}
                    width={40}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/72c59945-9fe2-4f6e-1f3e-00b0af410b00/avatar"
                    layout="fixed"
                    alt="css"
                    height={40}
                    width={40}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/8f1fbfd1-2a05-48e9-4dd4-769f5a92ed00/avatar"
                    layout="fixed"
                    alt="js"
                    height={40}
                    width={40}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/5453bc06-ad48-406e-fecb-da733cb94d00/avatar"
                    layout="fixed"
                    alt="typescript"
                    height={40}
                    width={40}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/0b6506ed-5ae0-4452-8c85-9a9dfa39ea00/avatar"
                    layout="fixed"
                    alt="php"
                    height={40}
                    width={59}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/ecfac755-b728-4816-c328-626ddfad8800/avatar"
                    layout="fixed"
                    alt="nodejs"
                    height={40}
                    width={85}
                  />
                </span>
                <br className="hidden lg:block" />
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/bb76075f-76aa-41a4-40fb-db8e6ba56400/avatar"
                    layout="fixed"
                    alt="planetscale"
                    height={40}
                    width={157}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/ac67a633-0e33-49bb-1aaf-a808a9154700/avatar"
                    layout="fixed"
                    alt="presma"
                    height={40}
                    width={34}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/7c6e844b-24ea-4e9e-959a-8f96ff2d0000/avatar"
                    layout="fixed"
                    alt="cloudeflare"
                    height={40}
                    width={100}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/97275b14-e5cd-4bbc-706b-37b12e630000/avatar"
                    layout="fixed"
                    alt="spline"
                    height={40}
                    width={40}
                  />
                </span>
                <br className="hidden lg:block" />
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/045fb8c5-eb7a-465e-cea1-ac31899c4f00/avatar"
                    layout="fixed"
                    alt="photoshap"
                    height={40}
                    width={40}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/3f5df5cb-98db-4a68-f92e-ebef779b0600/avatar"
                    layout="fixed"
                    alt="illustrator"
                    height={40}
                    width={40}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/277caaae-6852-4b81-8cc5-2fcc750d9000/avatar"
                    layout="fixed"
                    alt="adobeXD"
                    height={40}
                    width={40}
                  />
                </span>
                <span className="mr-2">
                  <Image
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/e8b3e80c-af62-4071-dd68-948d4c392000/avatar"
                    layout="fixed"
                    alt="figma"
                    height={40}
                    width={40}
                  />
                </span>
              </div>
            </div>
          </div>
        </section>

        <span className="absolute right-0 top-1/2 -translate-y-1/2">
          <img
            src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/2df8ffb4-eb06-4938-b481-5d40a7db5600/public"
            alt="background"
          />
          {/* background object */}
        </span>
        <span className="absolute left-0 top-0 -translate-x-[20px]">
          <img
            src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/4a10e52f-302c-4f7b-6ac2-b4ecd8a1e400/public"
            alt="background"
          />
          {/* background object dotted*/}
        </span>
      </article>

      <article className="min-h-screen py-12 bg-[#28292D] relative px-3">
        <section className="container mx-auto flex">
          <div className="w-[200px]">
            <div className="flex items-start">
              <h1 className="text-white font-extrabold text-7xl">1.5</h1>
              <span className="font-extrabold text-3xl text-white ml-2">+</span>
            </div>
            <p className="text-zinc-400 mt-2 leading-relaxed">
              Years <br />
              Experience
              <br />
              Working
            </p>
          </div>
          {/* left layout */}
          <div className="w-[calc(100%-200px)]">
            <div className="text-[#FFEEEE] font-extrabold text-6xl relative flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-[#28292D] about">MY</span>
                <span className="ml-3">EXPERIENCE</span>

                <span className="inline-block w-3 h-3 bg-white self-end rounded-full -translate-x-4 -translate-y-2"></span>
              </div>

              <div className="text-white font-normal text-sm flex items-center space-x-2">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58.433"
                    height="11.87"
                    viewBox="0 0 58.433 11.87"
                    className="-translate-y-1/2 stroke-zinc-500"
                  >
                    <path
                      id="leftBtn"
                      data-name="leftBtn"
                      d="M1612.48,2023h57.226l-11.016,11.016"
                      transform="translate(1670.913 2034.37) rotate(180)"
                      fill="none"
                      strokeWidth="1"
                    />
                  </svg>
                </button>
                <span className="text-lg text-zinc-400"> 1 / 3</span>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58.433"
                    height="11.87"
                    viewBox="0 0 58.433 11.87"
                    className="translate-y-1/2 stroke-zinc-500"
                  >
                    <path
                      id="rightBtn"
                      data-name="rightBtn"
                      d="M1612.48,2023h57.226l-11.016,11.016"
                      transform="translate(-1612.48 -2022.5)"
                      fill="none"
                      strokeWidth="1"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-16">
              <>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                      opacity: 0,
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  //navigation={true}
                  modules={[EffectCreative]}
                  className="myExperience"
                >
                  <SwiperSlide>
                    <div className="w-full  grid grid-cols-6 gap-6 rounded pb-9 border-b border-zinc-500">
                      <div className="h-[240px] relative overflow-hidden rounded-lg col-span-2">
                        <Image
                          src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/9319b3ef-9485-4d58-6d46-bb91f2b69000/public"
                          layout="fill"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="col-span-4 flex flex-col h-full relative">
                        <div className="flex justify-between w-full">
                          <h2 className="text-white font-semibold text-xl">
                            dodory 다육이 쇼핑몰 <br /> 개인프로젝트
                          </h2>
                          <span className="text-zinc-400">2022.05</span>
                        </div>
                        <p className="mt-6 text-zinc-400 leading-relaxed">
                          어머니의 취미인 다육이 사업을 돕기위해 Next.js를
                          활용한 다육이 쇼핑몰을 기획, 디자인, <br />
                          개발까지 진행하고 있습니다. 3d를 활용하여 더욱
                          사용자랑 소통하고 재미를 줄 수 있도록 <br />
                          현재까지도 개발을 진행중에 있습니다.
                          {/* 내용 */}
                        </p>
                        <div className="text-white space-x-9 mt-10 absolute left-0 bottom-0">
                          <Link href="/">VIEW SITE +</Link>
                          <Link href="/">GITHUB +</Link>
                        </div>
                      </div>
                    </div>

                    <div className="w-full grid grid-cols-6 gap-6 rounded pt-9 pb-3">
                      <div className="h-[240px] relative overflow-hidden rounded-lg col-span-2">
                        <Image
                          src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/cc4ebe9e-a270-4af0-2e59-e17521917c00/public"
                          layout="fill"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="col-span-4 flex flex-col h-full relative">
                        <div className="flex justify-between w-full">
                          <h2 className="text-white font-semibold text-xl">
                            Eudedu 사이트 리뉴얼
                          </h2>
                          <span className="text-zinc-400">2022.05</span>
                        </div>
                        <p className="mt-6 text-zinc-400 leading-relaxed">
                          Eduedu 회사의 사이트 리뉴얼. 기존의 정형화된 틀을
                          벗어나 인터렉티브한 배너와 <br />
                          레이아웃으로 지루함 없이 에듀에듀의 플랫폼을
                          설명해주고 있다. 기존의 교육 위주의 <br />
                          사이트에서 조금더 확장성 있는 플랫폼을 설명해주려고
                          기획했다.
                          {/* 내용 */}
                        </p>
                        <div className="text-white space-x-9 mt-10 absolute left-0 bottom-0">
                          <Link href="/">VIEW SITE +</Link>
                          <Link href="/">GITHUB +</Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full grid grid-cols-6 gap-6 rounded pb-9 border-b border-zinc-500">
                      <div className="h-[240px] relative overflow-hidden rounded-lg col-span-2">
                        <Image
                          src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/9319b3ef-9485-4d58-6d46-bb91f2b69000/public"
                          layout="fill"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="col-span-4 flex flex-col h-full relative">
                        <div className="flex justify-between w-full">
                          <h2 className="text-white font-semibold text-xl">
                            dodory 다육이 쇼핑몰 <br /> 개인프로젝트
                          </h2>
                          <span className="text-zinc-400">2022.05</span>
                        </div>
                        <p className="mt-6 text-zinc-400 leading-relaxed">
                          어머니의 취미인 다육이 사업을 돕기위해 Next.js를
                          활용한 다육이 쇼핑몰을 기획, 디자인, <br />
                          개발까지 진행하고 있습니다. 3d를 활용하여 더욱
                          사용자랑 소통하고 재미를 줄 수 있도록 <br />
                          현재까지도 개발을 진행중에 있습니다.
                          {/* 내용 */}
                        </p>
                        <div className="text-white space-x-9 mt-10 absolute left-0 bottom-0">
                          <Link href="/">VIEW SITE +</Link>
                          <Link href="/">GITHUB +</Link>
                        </div>
                      </div>
                    </div>

                    <div className="w-full grid grid-cols-6 gap-6 rounded pt-9 pb-3">
                      <div className="h-[240px] relative overflow-hidden rounded-lg col-span-2">
                        <Image
                          src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/cc4ebe9e-a270-4af0-2e59-e17521917c00/public"
                          layout="fill"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="col-span-4 flex flex-col h-full relative">
                        <div className="flex justify-between w-full">
                          <h2 className="text-white font-semibold text-xl">
                            Eudedu 사이트 리뉴얼
                          </h2>
                          <span className="text-zinc-400">2022.05</span>
                        </div>
                        <p className="mt-6 text-zinc-400 leading-relaxed">
                          Eduedu 회사의 사이트 리뉴얼. 기존의 정형화된 틀을
                          벗어나 인터렉티브한 배너와 <br />
                          레이아웃으로 지루함 없이 에듀에듀의 플랫폼을
                          설명해주고 있다. 기존의 교육 위주의 <br />
                          사이트에서 조금더 확장성 있는 플랫폼을 설명해주려고
                          기획했다.
                          {/* 내용 */}
                        </p>
                        <div className="text-white space-x-9 mt-10 absolute left-0 bottom-0">
                          <Link href="/">VIEW SITE +</Link>
                          <Link href="/">GITHUB +</Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </>
            </div>
          </div>
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1347.532"
          height="1047.281"
          viewBox="0 0 1347.532 1047.281"
          className="absolute opacity-5 right-0 top-1/2 -translate-y-1/2 translate-x-[25%]"
        >
          <path
            id="bgObject3"
            data-name="bgObject3"
            d="M1347.207,109.851C1341.788,55,1288.283,23.379,1239.642,8.787c-47.425-13.377-96.067-10.945-142.276,3.648-69.313,24.32-119.17,81.474-148.5,146a420.8,420.8,0,0,0-18.525,46.3,436.567,436.567,0,0,0-12.846,47.125c-8.608,24.459-28.094,41.483-51.335,51.928a259.166,259.166,0,0,1-39.938,12.583,255.771,255.771,0,0,1-41.933,5.889,298.371,298.371,0,0,1-44.028-1.423c-69.716-9.252-134.165-33.573-202.263-53.029C493.152,254.12,441.661,244.715,397.77,257.7a117.854,117.854,0,0,0-40.83,21.112c-20.807,15.746-34.184,37.635-40.264,61.955-16.214,67.9,4.729,139.168-18.1,202.559a146.594,146.594,0,0,1-19.6,37c-23.1,31.617-55.937,52.289-91.2,64.45-38.3,14.592-83.3,28.88-119.475,51.681a175.847,175.847,0,0,0-32.67,25.969C-23.812,784.613-1.923,884.327,50.366,945.129c109.442,125.251,324.679,139.843,437.317,18.587A219,219,0,0,0,510.734,932.8a221.278,221.278,0,0,0,17.531-35.1c27.969-70.529,43.777-155.651,112.746-198.311A286.974,286.974,0,0,1,685.09,676.07a232.74,232.74,0,0,1,47.468-14.276,431.233,431.233,0,0,1,63.007-7.145c103.752-4.308,201.849,25.575,304.019,32.6a248.433,248.433,0,0,0,57.159-2.7c57.058-9.462,110.867-39.786,129.108-98.156,8.512-29.185,4.864-62.017-15.809-85.122-43.777-46.209-98.5-86.338-113.132-151a74.218,74.218,0,0,1,5.587-40.267c5.784-13.284,15.548-26.469,30.225-39.373,14.63-15.473,31.879-30.209,49.78-44.319,35.8-28.221,86.4-43.074,99.936-77.958,5.5-15.142,5.471-27.388,4.769-38.508"
            transform="translate(0 0.001)"
            fill="#fff"
          />
        </svg>
        {/* background Image */}
        <img
          className="absolute left-0 top-1/3 -translate-x-1/4"
          src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/80a7f813-299c-44ee-73ca-b2fc4e69ca00/public"
          alt="background"
        />
      </article>

      <article className="min-h-screen flex items-center overflow-hidden relative py-16 px-3">
        <div className="container mx-auto">
          <div className="flex items-center text-7xl font-extrabold relative">
            <span className="story text-white">MY</span>
            <span className="ml-3">STORY</span>

            <span className="dote inline-block w-4 h-4 bg-black self-end mb-2 rounded-full relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 138.608 212.389"
                className="absolute bottom-1 -right-10 h-[270px]"
              >
                <path
                  id="패스_79"
                  data-name="패스 79"
                  d="M159.06,2983.652s-3.679,56.382,58.666,86.806,85.423,68.8,75.582,97.641-39.9,26.806-39.9,26.806"
                  transform="translate(-157.999 -2983.587)"
                  fill="none"
                  stroke="#28292d"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </div>
          <section className="grid grid-cols-12 mt-16">
            <div className="col-span-3 relative h-[445px] overflow-hidden rounded-lg">
              <Image
                src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/b6e2c402-6868-42c3-bbc0-47bd09ad2f00/public"
                layout="fill"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-9 pl-28">
              <h2 className="font-bold text-3xl">개발을 시작하기 까지.</h2>
              <p className="mt-9 text-zinc-500 text-lg leading-[2.3]">
                어릴때부터 두손을 움직여 음악을 연주하고 그림을 그리고 만들기를
                좋아하던 한 아이는 선생님의 조언으로 전문적인 그림세계에 입문!
                그렇게 시작된 디자인과의 인연! 대학, 기획, 디자인, 전시. 다양한
                곳에서 경험을 하다가{" "}
                <span className="font-bold text-2xl text-black">문뜩!</span> 든
                생각. 이 무한한 상상을 항상 보고 있는 미디어에 표출할 수 없을까?
                그렇게 시작된{" "}
                <span className="font-bold text-xl text-black">개</span>.{" "}
                <span className="font-bold text-xl text-black">알</span>.{" "}
                <span className="font-bold text-xl text-black">못</span>. 의
                개발자의 세계. 모르는게 있으면{" "}
                <span className="text-xl text-indigo-600 font-bold">
                  배우고
                </span>
                ,{" "}
                <span className="text-xl text-indigo-600 font-bold">
                  찾아보고
                </span>
                ,{" "}
                <span className="text-xl text-indigo-600 font-bold">
                  뒤져보고
                </span>
                . 그렇게 공부한{" "}
                <span className="text-xl text-black font-bold underline underline-offset-2">
                  브랜딩, 디자인, 퍼블리싱, 프론트엔드개발
                </span>{" "}
                까지. 하지만 난 배우고 도전해보고 싶은게 너무 많다!
              </p>
            </div>
          </section>
        </div>
        <img
          src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/86bffd7b-d5c3-47dd-b6a6-dc8b65f94e00/public"
          className="absolute right-0 top-0 -z-10"
          alt="배경 오브젝트"
        />
        <span className="inline-block absolute left-0 bottom-0 text-[9em] font-extrabold text-zinc-50 -translate-x-9 translate-y-8 -z-10">
          STORY DESIGN PUBLISHING DEVELOPE BRENDING
        </span>
      </article>

      <article className="py-6 ">
        <div className="container mx-auto">
          <h2 className="font-bold text-3xl">다양한 도전을 하고있습니다.</h2>
        </div>
        <section>
          <div className="client-slider mt-12 mb-5">
            <div className="client-slide-track space-x-5">
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio1.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio2.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio3.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio4.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio5.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio6.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio1.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio2.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio3.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio4.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio5.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio6.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
            </div>
          </div>

          <div className="client-slider2 mb-12">
            <div className="client-slide-track space-x-5">
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio7.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio8.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio9.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio10.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio11.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio12.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio7.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio8.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio9.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio10.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio11.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
              <div className="client-slide rounded-lg overflow-hidden">
                <img
                  src="https://www.eduedu.kr/theme/edu/img/portfolio12.png"
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
            </div>
          </div>
        </section>
      </article>

      <article className="w-full min-h-screen flex items-center py-12 bg-[url(https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/23ef26ea-3e50-494e-d24f-8ce7a6adf000/public)] bg-cover px-3 relative">
        <div className="container mx-auto">
          <section>
            <div className="flex items-center text-7xl font-extrabold relative text-white">
              <span className="about text-transparent">Contact</span>
              <span className="ml-3">Me</span>
            </div>
            <p className="mt-12 text-zinc-200 leading-relaxed">
              항상 소중한 의견을 듣고 배우겠습니다. <br />
              어떤 말씀이건 귀담아 듣겠습니다.
            </p>
            <button
              type="button"
              className="mt-12 text-white bg-indigo-500 px-6 py-3 rounded-md hover:bg-indigo-600 transition-colors"
            >
              하실 말씀이 있으신가요?
            </button>
          </section>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 text-zinc-300">
          <span>010-8668-8918</span> / <span>design795@naver.com</span>
        </div>
      </article>

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
  );
};

export default Home;
