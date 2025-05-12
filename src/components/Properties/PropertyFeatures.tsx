import bg from "../../assets/featuresbg.png";
import useProperty from "../../hooks/useProperty";
import { useParams } from "react-router-dom";
import "./PropertyFeatures.css";
import useGeocode from "../../hooks/useGeocode";
import MapComponent from "../Map"

export default function PropertyFeatures() {
  const { address } = useParams<{ address: string }>();
  const { loading, property } = useProperty(address);
  const { coordinates } = useGeocode(property?.address || "");

  if (loading || !property) return null;

  return (
    <section
      className="property-features-container bg-image"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <p className="features-title title-md">Features and Amenities</p>

      <div className="inex-container">
        <div className="interior">
          <p className="interior-title title-md">Interior</p>
          <div className="inex-divider"></div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Total Bedrooms</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.bedrooms}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Total Bathrooms</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.bathrooms}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Total Floor Area</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.sqft} sqft</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Laundry Room</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.laundry}</span>
          </div>

          <div className="interior-row appliances-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Appliances</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.appliances}</span>
          </div>
        </div>
        <div className="exterior">
          <p className="interior-title title-md" style={{ color: "white" }}>Exterior</p>
          <div className="inex-divider"></div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Stories</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.stories}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Parking</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.parking ? property.parking : "No Parking Available"}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Pool</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.pool ? "Pool Included" : "Pool Not Included"}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Cooling</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.cooling}</span>
          </div>

          <div className="interior-row appliances-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Heating</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.heating}</span>
          </div>
        </div>
      </div>

      <div className="features-aditional-info-container">

      <div className="additinal-info-content">

          <p className="interior-title title-md" style={{ color: "white" }}>Additional Features</p>
          <div className="inex-divider"></div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Status</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.sold}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Property Type</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.prpertyType}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm" style={{ color: "white" }}>Year Built</span>
            <span className="value-text body-text" style={{ color: "white" }}>{property.yearBuilt}</span>
          </div>
      </div>

      <div className="features-map">
        
        {coordinates && <MapComponent latitude={coordinates?.lat || 0} longitude={coordinates?.lng || 0}  />}
      </div>

      </div>
    </section>
  );
}
