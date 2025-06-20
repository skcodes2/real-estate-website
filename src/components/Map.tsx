import { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useWindowSize from '../hooks/useWindowSize'; // adjust path as needed

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default marker icon issues
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Props type
interface MapComponentProps {
  latitude: number;
  longitude: number;
}

const MapComponent: FC<MapComponentProps> = ({ latitude, longitude }) => {
  const { width } = useWindowSize();
  const mapHeight = width < 400 ? '40dvh' : '50dvh';

  const position: LatLngExpression = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={10}

      scrollWheelZoom={true}
      style={{ height: mapHeight, width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>This property is located here.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
