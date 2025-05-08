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
            <span className="topic-text title-sm">Total Bedrooms</span>
            <span className="value-text body-text">{property.bedrooms}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm">Total Bathrooms</span>
            <span className="value-text body-text">{property.bathrooms}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm">Total Floor Area</span>
            <span className="value-text body-text">{property.sqft} sqft</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm">Laundry Room</span>
            <span className="value-text body-text">{property.laundry}</span>
          </div>

          <div className="interior-row appliances-row">
            <span className="topic-text title-sm">Appliances</span>
            <span className="value-text body-text">{property.appliances}</span>
          </div>
        </div>
        <div className="exterior">
        <p className="interior-title title-md">Exterior</p>
          <div className="inex-divider"></div>

          <div className="interior-row">
            <span className="topic-text title-sm">Stories</span>
            <span className="value-text body-text">{property.stories}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm">Parking</span>
            <span className="value-text body-text">{property.parking}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm">Pool</span>
            <span className="value-text body-text">{property.pool ? "Pool Included" : "Pool Not Included"   }</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm">Cooling</span>
            <span className="value-text body-text">{property.cooling}</span>
          </div>

          <div className="interior-row appliances-row">
            <span className="topic-text title-sm">Heating</span>
            <span className="value-text body-text">{property.heating}</span>
          </div>
        </div>
      </div>

      <div className="features-aditional-info-container">

      <div className="additinal-info-content">

          <p className="interior-title title-md">Additional Features</p>
          <div className="inex-divider"></div>

          <div className="interior-row">
            <span className="topic-text title-sm">Status</span>
            <span className="value-text body-text">{property.sold}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm">Property Type</span>
            <span className="value-text body-text">{property.prpertyType}</span>
          </div>

          <div className="interior-row">
            <span className="topic-text title-sm">Year Built</span>
            <span className="value-text body-text">{property.yearBuilt  }</span>
          </div>
      </div>

      <div className="features-map">
        
        {coordinates && <MapComponent latitude={coordinates?.lat || 0} longitude={coordinates?.lng || 0}  />}
      </div>

      </div>
    </section>
  );
}
