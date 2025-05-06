import "./PropertiesMain.css";
import SingleProperty from "./SingleProperty";
import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { PropertyDetails } from "./PropertyTypes";

export function getProperties() {
    return fetch(`${API_URL}/api/properties`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching properties:", error);
            throw error;
        });
}

export default function PropertiesMain() {
    const [properties, setProperties] = useState<PropertyDetails[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProperties()
            .then((data) => {
                setProperties(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching properties:", error);
                setLoading(false);
            }); 
  }, []);

  return (
    <section className="properties-main-container bg-color">
      {loading ? (
        <div className="loading-message body-text">Loading properties...</div>
      ) : properties.length === 0 ? (
        <div className="no-properties-message body-text">No properties available.</div>
      ) : (
        properties.map((property) => (
          <SingleProperty key={property.address} property={property} />
        ))
      )}
    </section>
  );
}
