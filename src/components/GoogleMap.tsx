import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

import { pointsOfInterest } from '../PointsOfInterest'

function haversineDistance (coords1: { lat: number; lng: number }, coords2: { lat: number; lng: number }) {
  var R = 6371.0710; // Radius of the Earth in miles
  var rlat1 = coords1.lat * (Math.PI/180); // Convert degrees to radians
  var rlat2 = coords2.lat * (Math.PI/180); // Convert degrees to radians
  var difflat = rlat2-rlat1; // Radian difference (latitudes)
  var difflon = (coords2.lng-coords1.lng) * (Math.PI/180); // Radian difference (longitudes)

  var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
  return d;
}

interface GoogleMapsComponentProps {
  userLocation: {
    lat: number;
    lng: number;
  };
  onMarkerDragEnd: (position: { lat: number; lng: number }) => void;
}

const GoogleMapsComponent: React.FC<GoogleMapsComponentProps> = ({ userLocation, onMarkerDragEnd }) => {
  const containerStyle = {
    width: '100%',
    height: '800px',
  };

  const center = {
    lat: userLocation.lat,
    lng: userLocation.lng,
  };

  const distance1 = haversineDistance(center, pointsOfInterest[0].coordinates)
  const distance2 = haversineDistance(center, pointsOfInterest[1].coordinates)
  const distance3 = haversineDistance(center, pointsOfInterest[2].coordinates)

  console.log("Distance Potsdam " + distance1)
  console.log("Distance Spandau " + distance2)
  console.log("Distance Tor " + distance3)
  
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} >
        {/* Add markers, polygons, or other map elements here */}
        <MarkerF
          position={center}
          draggable={true}
          onDragEnd={(e) => {
            if (e.latLng) {
              onMarkerDragEnd({ lat: e.latLng.lat(), lng: e.latLng.lng() });
            }
          }}
        />
          {/* Map over pointsOfInterest and render markers for each POI */}
          {pointsOfInterest.map((poi, index) => (
          <MarkerF key={index} position={poi.coordinates} title={poi.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;