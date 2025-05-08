import { useEffect, useState } from 'react';

interface Coordinates {
  lat: number;
  lng: number;
}

export default function useGeocode(address: string) {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address) return;

    const fetchCoordinates = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'YourAppName/1.0 (youremail@example.com)' // required by Nominatim's policy
          }
        });

        const data = await response.json();
        if (data.length > 0) {
          setCoordinates({
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon)
          });
        } else {
          setError('No results found');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch coordinates');
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [address]);

  return { coordinates, loading, error };
}
