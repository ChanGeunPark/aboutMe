import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); //nextjs에선 build했을때 플러그인을 찾을수 없다. 버전 업그레이드 후 export밖으로 빼야한다.

export default function AboutMe() {
  const myFace = useRef(null);
  const aboutMe = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(myFace.current, {
      scrollTrigger: {
        trigger: aboutMe.current,
        toggleActions: "restart none none none",
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
      strokeDashoffset: 0,
    }); //얼굴 라인

    gsap.fromTo(
      aboutMe.current,
      {
        translateX: 50,
        opacity: 0,
        lazy: false,
      },
      {
        opacity: 1,
        translateX: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); // about me

    gsap.fromTo(
      ".aboutSubTitle",
      {
        translateX: 50,
        opacity: 0,
        lazy: false,
      },
      {
        delay: 0.1,
        opacity: 1,
        translateX: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //aboutSubTitle

    gsap.fromTo(
      ".aboutIntro",
      {
        translateX: 50,
        opacity: 0,
        lazy: false,
      },
      {
        delay: 0.2,
        opacity: 1,
        translateX: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //about Intro

    gsap.fromTo(
      ".aboutKeyword span",
      {
        opacity: 0,
        lazy: false,
      },
      {
        stagger: 0.1,
        delay: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //aboutKeyword

    gsap.fromTo(
      ".skillsTitle",
      {
        translateY: -50,
        opacity: 0,
        lazy: false,
      },
      {
        stagger: 0.03,
        delay: 0.4,
        opacity: 1,
        translateY: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //skills

    gsap.fromTo(
      ".skills span",
      {
        translateY: -50,
        opacity: 0,
        lazy: false,
      },
      {
        stagger: 0.03,
        delay: 0.4,
        opacity: 1,
        translateY: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //skills
  }, []);

  return (
    <article className="bg-[#28292D] relative px-3 min-h-screen flex items-center py-20 aboutMeMain">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center">
          {/* 내 얼굴 */}
          <div className="relative -mt-0 sm:-mt-[20%] hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)] duration-300 z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="face w-[400px] md:w-[560px] max-w-full stroke-2 transition-all duration-[4s] ease-in-out"
              viewBox="0 0 564.195 781.168"
              ref={myFace}
            >
              <path
                id="hat"
                data-name="hat"
                d="M215.86,330.682s29.592,101.27,33.538,140.726S244.137,501,232.3,481.625s-30.25-39.808-46.032-55.591-5.261,25.646-1.315,59.841-17.1,46.032-49.978,48S33.706,547.69,17.923,551.636,2.8,552.951,6.744,530.592,43.57,470.751,79.08,429.322s29.592-74.966,23.674-112.449S31.733,209.684,12,180.75,3.456,120.908,30.418,61.724s67.733-82.2,119.025-81.542S254-21.791,290.827-29.024s63.129,11.179,80.157,43.492,5.989,74.876.728,99.207S391.439,145.9,391.439,145.9s7.739,3.266,9.988-8.8-3.451-20.483,19.555-54.066,22.88-81.585,0-120.081S325.9-113.19,334.506-164.909s52.25-61.123,52.25-61.123"
                transform="translate(-1.13 227.01)"
                fill="none"
                stroke="#fee"
                strokeMiterlimit="10"
              />
              <path
                id="face"
                data-name="face"
                d="M434.757,347.092s4.96,5.918,5.11,0-8.4-17.755-5.768-21.7,5.261-3.946,6.576-4.6.658-3.946-1.315-7.234-6.576-7.891-9.206-8.549.658-2.63,1.973-2.63a24.668,24.668,0,0,0,6.576-.658c1.973-.658,5.918-5.918,5.918-7.234s-.658-1.973-3.946-5.918-5.918-7.234-7.891-9.864-2.63-4.6-7.891-4.6-11.837.658-13.81-.658-7.891-9.206-9.206-14.467,0-12.494,1.973-13.152,5.688-1.315,5.474,0-1.528,4.6-1.528,7.234,3.288,11.837,5.261,13.152,6.576,3.288,9.206-.658,4.6-10.522,11.179-11.179,11.179,3.288,14.467,3.288,4.6-2.63,4.6-5.918.658-8.549-3.946-13.152-13.152-12.494-17.1-18.413-13.81-12.494-15.125-15.125-.658-4.6,0-6.576,1.973-9.206.658-9.206-1.973.658-3.288,3.288-3.946,3.946-7.891,6.576-11.179,7.234-12.494,9.864-.658,8.549-3.288,10.522-5.261,2.63-10.522-2.63-16.44-14.467-13.81-14.467S380.176,213.6,384.122,213.6s3.946-1.315,4.6-2.63-1.315-15.125-2.63-17.1-19.07,3.288-21.7,5.261-7.234-12.494-3.946-21.7,11.179-8.549,20.386-6.576,27.619,10.522,29.592,12.494,1.973,1.315,2.63-1.315,1.315-15.125.658-18.413-17.1-28.277-21.7-37.483S369,81.422,368.34,70.9s4.6-13.152,13.152-7.891,10.522,17.1,8.549,29.592-13.81,108.5-53.923,128.889-61.157-7.234-72.994,0-17.1,10.522-17.1,17.1,3.288,13.152,2.63,15.125-3.946-2.63-11.837-5.261-15.125-5.261-11.837-7.891,10.522-6.576,7.891-7.891-7.234,1.973-11.179,1.973-7.234-.658-5.918-9.206,7.891-13.152,9.206-9.864,1.315,9.864,5.918,7.891,4.6-7.234,4.6-19.728-10.522-19.728-21.7-17.1-15.394,3.946-22.493,18.413-7.757,39.456,3.422,54.581,21.7,19.07,36.168,21.7,21.043,8.549,24.331,20.386,9.206,32.222,25.646,40.114,51.95,19.728,90.749,22.358,53.266,1.315,59.184,1.315,8.549,1.973,5.918,6.576-5.261,11.837-20.386,12.494-42.086-3.288-50.635-1.973-10.522,5.261-10.522,9.206,3.946,24.989,10.522,33.538,7.234,11.837,21.7,15.125,35.51,7.234,49.978,12.494,19.728,10.522,40.113,10.522,65.1.658,94.037,27.619,49.32,51.95,55.9,69.706"
                transform="translate(-64.176 174.432)"
                fill="none"
                stroke="#fee"
                strokeMiterlimit="10"
              />
            </svg>
            <span className="w-4 h-4 block rounded-full bg-white absolute top-0 -translate-y-1/2 right-[30%]"></span>
          </div>
        </div>

        <div className="pt-12 text-zinc-300 relative z-10">
          <h1
            className="text-[#FFEEEE] font-extrabold text-5xl md:text-6xl"
            ref={aboutMe}
          >
            <span className="text-[#28292D] about">ABOUT</span>
            <span className="ml-3">ME.</span>
          </h1>
          <h2 className="aboutSubTitle mt-9">
            배우고 경험하고 도전하고 싶은게 너무 많은 웹 개발자 박찬근입니다
          </h2>
          <p className="aboutIntro mt-9 leading-relaxed">
            Design을 전공했습니다. 그러나 Front-end Developer로 일하고 있습니다{" "}
            <br className="hidden md:block" />
            저는 기존에 없었던 새로운 목표에 대한 도전을 즐기며{" "}
            <br className="hidden md:block" />
            이전엔 없었던 창조적인 웹을 만드는데 관심이 많습니다
          </p>

          <div className="aboutKeyword flex space-x-3 mt-9">
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
            <h3 className="text-orange-400 skillsTitle">EXPERIENCED SKILLS+</h3>
            <div className="skills mt-3">
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

      <span className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
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
      <style>{`
      .face{
        stroke-dasharray:2100;
        stroke-dashoffset:2100;
      }
      
      `}</style>
    </article>
  );
}
