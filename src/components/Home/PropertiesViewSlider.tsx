
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


import Temp from "../../assets/TempImage.png"



// import required modules
import { Keyboard } from 'swiper/modules';
import PropertyItem from '../Properties/PropertyItem';

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
                slidesPerView: 3,
                slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
       
        modules={[Keyboard  ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PropertyItem imageUrl={Temp} propertyId="1" />
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
