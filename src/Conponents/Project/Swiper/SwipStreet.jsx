// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swip.scss";
import { ReactComponent as ExitSwap } from "./close.svg";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

function SwipStreet({setStreet, arrayStreet}) {
  return (
    <div>
      <div
        className="swap_btn"
        onClick={() => {
          setStreet((prev)=>!prev)
        }}
      >
        <ExitSwap />
      </div>
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {arrayStreet.map((arr,index) => {
            return <SwiperSlide key={index} >{arr}</SwiperSlide>;
          })}

        </Swiper>
      </>
    </div>
  );
}

export default  SwipStreet;
