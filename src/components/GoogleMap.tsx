import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


interface GoogleMapsComponentProps {
  userLocation: {
    lat: number;
    lng: number;
  };
}

const GoogleMapsComponent: React.FC<GoogleMapsComponentProps> = ({ userLocation }) => {
  const containerStyle = {
    width: '100%',
    height: '800px',
  };

  const center = {
    lat: userLocation.lat,
    lng: userLocation.lng,
  };
  
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* Add markers, polygons, or other map elements here */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;