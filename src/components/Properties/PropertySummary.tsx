import { useParams } from "react-router-dom";
import useProperty from "../../hooks/useProperty";
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import "./PropertySummary.css";

export default function PropertySummary() {
    const { address } = useParams<{ address: string }>();
    const { loading, property } = useProperty(address);

    if (loading) {
        return <div className="slider-loading">Loading images...</div>;
    }

    if (!property || !property.images || property.images.length === 0) {
        return <div className="slider-loading">No images available.</div>;
    }

  return (
    <section className="property-summary-container bg-color">
          <div className="property-summary-content">
              <div className="sold body-text" style={{ fontSize: "1.5rem" }}>{property.sold}</div>
              <p className="summary-address body-text" style={{ fontSize: "1.5rem" }}>{property.address}</p>
              <p className="summary-price body-text" style={{ fontSize: "1.5rem" }}>
                  From {property.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                  })}
              </p>
              <div className="summary-divider"></div>
              <p className="summary-description-title title-sm">Property Description</p>
              <p className="summary-description body-text">{property.description}</p>
          </div>

          <div className="summary-icon-divider"></div>

          <div className="property-summary-icons-container">
              <div className="summary-icons">
                  <div className="summary-icon">
                      <BedIcon className="summary-icon-svg" fontSize="inherit" sx={{ color: 'var(--text-color)' }} />
                      <p className="summary-icon-text body-text">{property.bedrooms} Bedrooms</p>
                  </div>
                  <div className="summary-icon">
                      <ShowerIcon className="summary-icon-svg" fontSize="inherit" sx={{ color: 'var(--text-color)' }} />
                      <p className="summary-icon-text body-text">{property.bathrooms} Bathrooms</p>
                  </div>
                  <div className="summary-icon">
                      <ShuffleOnIcon className="summary-icon-svg" fontSize="inherit" sx={{ color: 'var(--text-color)' }} />
                      <p className="summary-icon-text body-text">{property.sqft} SQ.FT</p>
                  </div>
              </div>
          </div>
    </section>
  );
}
