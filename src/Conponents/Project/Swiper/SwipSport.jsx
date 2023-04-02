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

function SwipSport({ setSport, arraySport, }) {
  return (
    <div>
      <div
        className="swap_btn"
        onClick={() => {
          setSport((prev)=>!prev)
      
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
          {arraySport.map((arr) => {
            return <SwiperSlide> {arr}</SwiperSlide>;
          })}

        </Swiper>
      </>
    </div>
  );
}

export default  SwipSport;
