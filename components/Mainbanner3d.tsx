import dynamic from "next/dynamic";

export function Mainbanner3d() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
  });

  return (
    <div className="relative z-10 w-full h-full">
      <Spline scene="https://prod.spline.design/73zmUT7vg1qRaESL/scene.splinecode" />
    </div>
  );
}
