import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyItem.css";

type PropertyItemProps = {
  imageUrl: string;
  propertyId?: string;
};

const PropertyItem: FC<PropertyItemProps> = ({ imageUrl, propertyId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (propertyId) {
      navigate(`/properties/${propertyId}`);
    }
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
