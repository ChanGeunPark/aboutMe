import { useContext } from "react";
import { useSwiper } from "swiper/react";
import CustomCursorContext from "./CustomCursor/context/CustomCursorContext";

interface ButtonProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function SwiperButtonPrev({ children, ...rest }: ButtonProps) {
  const { setType } = useContext(CustomCursorContext);
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper.slidePrev();
      }}
      {...rest}
      onMouseOver={() => {
        setType("link");
      }}
      onMouseLeave={() => {
        setType("default");
      }}
    >
      {children}
    </button>
  );
}
