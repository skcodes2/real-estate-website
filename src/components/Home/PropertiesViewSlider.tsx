import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import { PropertyDetails } from "../Properties/PropertyTypes";
import { getProperties } from "../Properties/PropertiesMain";
import PropertyItem from "../Properties/PropertyItem";
import { API_URL } from "../../constants";

import { Keyboard } from "swiper/modules";

interface PropertiesViewSliderProps {
  onSwiperInit: (swiperInstance: any) => void;
}

export default function PropertiesViewSlider({ onSwiperInit }: PropertiesViewSliderProps) {
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProperties()
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="slider-loading">Loading featured properties...</div>;
  }

  if (properties.length === 0) {
    return <div className="slider-loading">No properties available.</div>;
  }

  return (
    <Swiper
      onSwiper={onSwiperInit}
      centeredSlides={false}
      slidesPerGroupSkip={1}
      grabCursor={true}
      keyboard={{ enabled: true }}
      breakpoints={{
        769: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }}
      scrollbar={true}
      modules={[Keyboard]}
      className="mySwiper"
    >
      {properties.map((property) => (
        <SwiperSlide key={property.address}>
          <PropertyItem
            imageUrl={API_URL + property.displayImageUrl}
            address={property.address}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
