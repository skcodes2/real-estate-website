
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


import Temp from "../../assets/TempImage.png"



// import required modules
import { Keyboard } from 'swiper/modules';

export default function PropertiesViewSlider() {
  return (
    <>
      <Swiper     
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
       
        modules={[Keyboard  ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Temp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Temp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Temp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Temp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Temp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Temp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Temp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Temp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Temp} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
