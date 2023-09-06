import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px',
};

const center = {
  lat: 52.5200, // Replace with your desired latitude
  lng: 13.4050, // Replace with your desired longitude
};

const GoogleMapsComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add markers, polygons, or other map elements here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;