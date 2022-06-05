import { useContext } from "react";
import { useSwiper } from "swiper/react";
import CustomCursorContext from "./CustomCursor/context/CustomCursorContext";

interface ButtonProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function SwiperButtonNext({ children, ...rest }: ButtonProps) {
  const { setType } = useContext(CustomCursorContext);
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper.slideNext();
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
