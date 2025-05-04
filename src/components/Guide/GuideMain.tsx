import "./GuideMain.css"
import guide1 from "../../assets/guide1.png"
import guide2 from "../../assets/guide2.png"
export default function GuideMain() {
  return (
    <section className="guide-content-container bg-color">

        <div className="seller">
            
            <div className="seller-image-container">
                <img src={guide1} alt="Seller" className="seller-image" />
            </div>
            <div className="guide-content-title title-md">For Seller</div>
            <p className="seller-text body-text">
            Selling your home is a major financial and emotional decision, and having an experienced guide can help you 
            get the best results. I’ll work with you to prepare your home, position it in the market, and negotiate the 
            strongest possible offer to make your selling journey smooth, strategic, and rewarding.
            </p>
        </div>
        <div className="buyer">
            <div className="guide-content-title title-md">For Buyer</div>
            <p className="buyer-text body-text">
            Buying a home is one of the biggest decisions you’ll ever make, and having the right 
            guidance can make all the difference. I’ll work closely with you through every step — 
            from setting a clear budget and finding the right property to negotiating the best deal
            and making sure your journey to homeownership is smooth and successful.
            </p>
            <div className="buyer-image-container">
                <img src={guide2} alt="Buyer" className="buyer-image" />
            </div>
            
        </div>

    </section>
  )
}
