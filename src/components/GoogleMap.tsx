import React, { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import carMarker from "../images/car-marker.png"

interface GoogleMapsComponentProps {
  userLocation: {
    lat: number;
    lng: number;
  };
  onMarkerDragEnd: (position: { lat: number; lng: number }) => void;
  venues: any[];
}

const GoogleMapsComponent: React.FC<GoogleMapsComponentProps> = ({ userLocation, onMarkerDragEnd, venues }) => {

  const [selectedVenueId, setSelectedVenueId] = useState<any>(null);
  const [center, setCenter] = useState<any>(userLocation);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);

  const containerStyle = {
    width: '100%',
    height: '800px',
  };

  const handleGoogleMapsLoad = () => {
    setIsGoogleMapsLoaded(true);
  };

  const handleMarkerClick = (venueId: any) => {
    setSelectedVenueId(venueId);
    if (venueId) {
      setCenter(venues.find((venue) => venue.id === venueId)?.coordinates);
    }
    console.log(venueId);
  };

  return (
    <div>
      <LoadScript 
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
        onLoad={handleGoogleMapsLoad} >
        <GoogleMap mapContainerStyle={containerStyle} center={{lat: center.lat, lng: center.lng}} zoom={13} >
          {/* Add markers, polygons, or other map elements here */}
          {isGoogleMapsLoaded && <MarkerF
            position={userLocation}
            draggable={true}
            onDragEnd={(e) => {
              if (e.latLng) {
                onMarkerDragEnd({ lat: e.latLng.lat(), lng: e.latLng.lng() });
              }
            }}
            options={{
              icon: {
                url: carMarker,
                scaledSize: new window.google.maps.Size(64, 64)
              }
            }}
          />}
          {venues.map((venue, index) => (
            <MarkerF 
              key={index} 
              position={venue.coordinates} 
              title={venue.name}               
              onClick={() => handleMarkerClick(venue.id)}
            >
              {selectedVenueId === venue.id && <InfoWindowF position={venue.coordinates} onCloseClick={() => handleMarkerClick(null)} options={{disableAutoPan: true}}>
                <div>
                  <h2>{venue.name}</h2>
                  <p>{venue.address}</p>
                </div>
              </InfoWindowF>}
            </MarkerF>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapsComponent;