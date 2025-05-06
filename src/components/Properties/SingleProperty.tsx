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
      <img src={displayImageUrl} alt="Main" />
      <p className="property-text body-text">{address}</p>
      <p className="body-text">{bedrooms} BD | {bathrooms}BA | {sqft} SQ.FT</p>   
      <p className="body-text">From ${price}</p>
      
    </div>
  );
}
