import "./PropertiesView.css";
import { useNavigate } from "react-router-dom";
import PropertiesViewSlider from "./PropertiesViewSlider";
import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { homeTranslations } from "../../constants";
export default function PropertiesView() {
    const navigate = useNavigate();
    const [swiper, setSwiper] = useState<any>(null);
    const { language } = useLanguage();
    const translations = homeTranslations[language];

  return (
      <section className="properties-view-container bg-color body-padding">
          <div className="properties-view-header">
              <div className="slider-buttons">
                  <div className="buttons-container">
                      <p
                          className={`previous body-text ${!swiper ? "disabled" : ""}`}
                          onClick={() => swiper?.slidePrev()}
                      >
                          {translations.propertiesViewPrevious}
                      </p>
                      <div className="slider-buttons-divider"></div>
                      <p
                          className={`next body-text ${!swiper ? "disabled" : ""}`}
                          onClick={() => swiper?.slideNext()}
                      >
                          {translations.propertiesViewNext}
                      </p>
                  </div>
              </div>

              <div className="properties-view-title-section">
                  <div className="properties-view-title title-md">{translations.propertiesViewTitle}</div>
                  <div className="properties-view-divider"></div>
                  <div className="properties-view-subtitle body-text">
                      {translations.propertiesViewSubtitle}
                  </div>
              </div>
          </div>

          <div className="properties-view-slider">
              <PropertiesViewSlider onSwiperInit={setSwiper} />
          </div>

          <div className="properties-view-button-container">
              <button
                  className="properties-view-button button"
                  onClick={() => navigate("/properties")}
              >
                  {translations.propertiesViewButton}
              </button>
          </div>
    </section>
  );
}
