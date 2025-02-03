import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const CardSlide = ({ children, preview }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={10}
        slidesPerView={preview}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        {children}
      </Swiper>
    </>
  );
};

export default CardSlide;
