// src/components/Properties/useProperty.ts
import { useEffect, useState } from "react";
import { PropertyDetails } from "../components/Properties/PropertyTypes";
import { getProperties } from "../components/Properties/PropertiesMain";


export default function useProperty(address?: string) {
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState<PropertyDetails | undefined>();

  useEffect(() => {
    if (!address) return;

    getProperties()
      .then((data:PropertyDetails[]) => {
        const found = data.find((prop: PropertyDetails) => prop.address === address);
        setProperty(found);
      })
      .catch((err) => {
        console.error("Error fetching property:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [address]);

  return { loading, property };
}
