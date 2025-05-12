import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PropertyDetails } from './PropertyTypes';
import { getProperties } from './PropertiesMain';
import { API_URL } from '../../constants';

import 'swiper/swiper-bundle.css';
// FreeMode styles are included in the main Swiper CSS
import "./PropertyDetails.css"


import { Autoplay, Navigation} from 'swiper/modules';

export default function PropertyImageSlider({address}: { address: string }) {
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState<PropertyDetails>();

  useEffect(() => {
    getProperties()
      .then((data) => {
        if (data.length > 0) {
            console.log("Fetched properties:", data);
            const foundProperty = data.find((prop:PropertyDetails) => prop.address === address);
            console.log("Found property:", foundProperty);
          setProperty(foundProperty); // Use the first property for the slider
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="slider-loading">Loading images...</div>;
  }

  if (!property || !property.images || property.images.length === 0) {
    return <div className="slider-loading">No images available.</div>;
  }

  return (
    <div className="property-details-slider-container bg-color">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        
        scrollbar={true}
        className="mySwiper2"
      >
        {property.images.map((url, idx) => (
          <SwiperSlide key={`main-${idx}`}>
            <div className="property-image-wrapper">
              <img src={API_URL + url} alt={`Property image ${idx + 1}`} />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>

      </div>
  );
}
