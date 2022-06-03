import { useRef } from "react";

export default function Curtains() {
  const Container = useRef(null);

  return (
    <div
      className="Canvas bg-gray-800 w-screen h-screen fixed left-0 top-0 pointer-events-none"
      ref={Container}
    ></div>
  );
}
