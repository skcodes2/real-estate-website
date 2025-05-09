import "./GuideMain.css"
import guide1 from "../../assets/guide1.png"
import guide2 from "../../assets/guide2.png"
import { useLanguage } from "../../hooks/useLanguage";
import { guideTranslations } from "../../constants";
export default function GuideMain() {
    const { language } = useLanguage();
    const translations = guideTranslations[language];
  return (
    <section className="guide-content-container bg-color">

        <div className="seller">
            
            <div className="seller-image-container">
                <img src={guide1} alt="Seller" className="seller-image" />
            </div>
              <div className="guide-content-title title-md">{translations.guideSellerTitle}</div>
            <p className="seller-text body-text">
                  {translations.guideSellerText}
            </p>
        </div>
        <div className="buyer">
              <div className="guide-content-title title-md">{translations.guideBuyerTitle}</div>
            <p className="buyer-text body-text">
                  {translations.guideBuyerText}
            </p>
            <div className="buyer-image-container">
                <img src={guide2} alt="Buyer" className="buyer-image" />
            </div>
            
        </div>

    </section>
  )
}
