import dynamic from "next/dynamic";

export function Mainbanner3d() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
  });

  return (
    <Spline scene="https://prod.spline.design/73zmUT7vg1qRaESL/scene.splinecode" />
  );
}
