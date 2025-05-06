import "./SingleProperty.css";
import { PropertyDetails } from "./PropertyTypes";

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
    displayImageUrl
  } = property;

  return (
    <div className="single-property-container ">

      <div className="single-property-image-container">
        <img src={displayImageUrl} className="single-property-image" alt="Main" />
      </div>
      <div className="single-property-text-container"></div>
      <p className="property-text body-text">{address}</p>
      <p className="property-text body-text">{bedrooms} BD | {bathrooms}BA | {sqft} SQ.FT</p>
      <p className="property-text body-text">From ${price}</p>
      
    </div>
  );
}
