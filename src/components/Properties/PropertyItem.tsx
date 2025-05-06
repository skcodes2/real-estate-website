import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyItem.css";
import { PropertyItemProps } from "./PropertyTypes";

const PropertyItem: FC<PropertyItemProps> = ({ imageUrl, address }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/properties/${encodeURIComponent(address)}`);
  };

  return (
    <div className="property-item-container">
      <div className="property-image-wrapper">
        <img src={imageUrl} alt="Property" className="property-image" />
        <div className="overlay">
          <button className="view-button" onClick={handleClick}>
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
