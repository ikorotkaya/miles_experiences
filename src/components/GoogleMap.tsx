import React, { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import carMarker from "../images/car-marker.png"
import pinIcon from "../images/pin-icon.svg"
import pinActiveIcon from "../images/pin-active-icon.svg"

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
  const [hoverVenueId, setHoverVenueId] = useState<any>(null);
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
          {isGoogleMapsLoaded && venues.map((venue, index) => (
            <MarkerF 
              key={index} 
              position={venue.coordinates} 
              title={venue.name}               
              onClick={() => handleMarkerClick(venue.id)}
              onMouseOver={() => setHoverVenueId(venue.id)}
              onMouseOut={() => setHoverVenueId(null)}
              options={{
                icon: {
                  url: hoverVenueId === venue.id || selectedVenueId === venue.id ? pinActiveIcon : pinIcon,
                  scaledSize: new window.google.maps.Size(32, 48)
                }
              }}              
            >
              {selectedVenueId === venue.id && <InfoWindowF position={venue.coordinates} onCloseClick={() => handleMarkerClick(null)} options={{disableAutoPan: true}}>
                <div>
                  <h2 className='text-xl font-bold mb-2'>{venue.name}</h2>
                  <img className='block w-64' src={venue.image} alt={venue.name} />
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