import "./SingleProperty.css";
import { PropertyDetails } from "./PropertyTypes";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";
import useWindowSize from "../../hooks/useWindowSize";

type Props = {
  property: PropertyDetails;
};

export default function SingleProperty({ property }: Props) {
  const {
    address,
    sqft,
    price,
    bedrooms,
    bathrooms,
    displayImageUrl,
    sold
  } = property;

  const navigate = useNavigate();
  const { width } = useWindowSize(); // Custom hook returning width & height

  const navigateToDetails = () => {
    navigate(`/properties/${encodeURIComponent(address)}`);
  };

  const handleImageClick = () => {
    if (width < 400) {
      navigateToDetails();
    }
  };

  return (
    <div className="single-property-container">
      <div className="single-property-image-wrapper" onClick={handleImageClick}>
        <img src={API_URL + displayImageUrl} className="single-property-image" alt="Main" />
        <div className="single-property-overlay">
          <button className="view-button" onClick={navigateToDetails}>
            View Property
          </button>
        </div>
      </div>

      <p className="property-text body-text">{address}</p>
      <p className="property-text body-text">
        {bedrooms} BD | {bathrooms}BA | {sqft} SQ.FT
      </p>
      <p className="property-text body-text">From {Number(price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })}{sold === "On Lease" ? "/month" : ""}</p>
    </div>
  );
}
