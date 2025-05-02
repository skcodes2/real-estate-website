
import "./PropertiesView.css";
import { useNavigate } from "react-router-dom";
import PropertiesViewSlider from "./PropertiesViewSlider";
import { useEffect } from "react";


export default function PropertiesView() {
const navigate = useNavigate();
    let swiper: any;

    useEffect(() => {
        const swiperElement = document.querySelector('.mySwiper') as HTMLElement;
        swiper = swiperElement?.swiper;
    }, [])
  return (
      <section className="properties-view-container bg-color body-padding">

          <div className="properties-view-header">

              <div className="slider-buttons">
                  <div className="buttons-container">
                      <p className="previous body-text" onClick={() => swiper.slidePrev()}>Previous</p>
                      <div className="slider-buttons-divider"></div>
                      <p className="next body-text" onClick={() => swiper.slideNext()}>Next</p>
                  </div>
              </div>

              <div className="properties-view-title-section">
                  <div className="properties-view-title title-md">Properties Sold</div>
                  <div className="properties-view-divider"></div>
                  <div className="properties-view-subtitle body-text">Celebrating homes matched with their happy owners.</div>
              </div>

          </div>

          <div className="properties-view-slider">
              <PropertiesViewSlider />
          </div>

          <div className="properties-view-button-container">
              <button className="properties-view-button button" onClick={() => navigate("/properties")}>View All Properties</button>
          </div>

    </section>
  )
}
