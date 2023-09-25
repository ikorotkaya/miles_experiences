import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindowF,
  DirectionsRenderer  
} from "@react-google-maps/api";

import carMarker from "images/car-marker.png";
import pinIcon from "images/pin-icon.svg";
import pinActiveIcon from "images/pin-active-icon.svg";

import { GoogleMapsComponentProps  } from "types";
import VenuePopUp from "./VenuePopUp";

import { useStore } from "store";

export default function GoogleMapsComponent({
  userLocation,
  onMarkerDragEnd,
  venues,
}: GoogleMapsComponentProps) {  
  
  // const [center, setCenter] = useState<LatLng>(userLocation);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const [mapHeight, setMapHeight] = useState(0);
  const highlightedVenueId = useStore((state) => state.highlightedVenueId);
  const highlightVenue = useStore((state) => state.setHighlightedVenueId)
  const selectedVenueId = useStore((state) => state.selectedVenueId);
  const selectVenue = useStore((state) => state.setSelectedVenueId);

  const updateMapHeight = () => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    
    if(header && footer) {
      const headerHeight = header.clientHeight;
      const footerHeight = footer.clientHeight;
      const windowHeight = window.innerHeight;
      
      const newMapHeight = windowHeight - headerHeight - footerHeight;

      setMapHeight(newMapHeight);
    }
  };

  useEffect(() => {
    updateMapHeight();
    
    window.addEventListener("resize", updateMapHeight);

    return () => window.removeEventListener("resize", updateMapHeight);
  }, []);

  const containerStyle = {
    width: "100%",
    height: mapHeight + "px",
  };

  const handleGoogleMapsLoad = () => {
    setIsGoogleMapsLoaded(true);
  };

  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  useEffect(() => {
    if (selectedVenueId !== null) {
      const selectedVenue = venues.find((venue) => venue.id === selectedVenueId);
      const destinationCoordinates = selectedVenue?.coordinates;

      if (destinationCoordinates !== undefined) {
        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
          {
            origin: userLocation,
            destination: destinationCoordinates,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      }
    }
  }, [userLocation, selectedVenueId, venues]);

  const routeDistance = directions?.routes[0]?.legs[0]?.distance?.text;
  const routeDuration = directions?.routes[0]?.legs[0]?.duration?.text;

  return (
    <div>
      {/* DESIGN NOTE: 4_add_googlemaps_apy_key.md */}
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY !== undefined
          ? process.env.REACT_APP_GOOGLE_MAPS_API_KEY
          : ""}
        onLoad={handleGoogleMapsLoad}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={12}>
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: "#000000",
                  strokeWeight: 3,
                },
              }}
            />
          )}
          {isGoogleMapsLoaded && (
            <MarkerF
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
                  scaledSize: new window.google.maps.Size(116, 50),
                },
              }}
            />
          )}
          {isGoogleMapsLoaded &&
            venues.map((venue, index) => (
              <MarkerF
                key={index}
                position={venue.coordinates}
                title={venue.name}
                onClick={() => selectVenue(venue.id)}
                onMouseOver={() => highlightVenue(venue.id)}
                onMouseOut={() => highlightVenue(null)}
                options={{
                  icon: {
                    url:
                      highlightedVenueId === venue.id || selectedVenueId === venue.id
                        ? pinActiveIcon
                        : pinIcon,
                    scaledSize: new window.google.maps.Size(32, 48),
                  },
                }}
              >
                {selectedVenueId === venue.id && (
                  <InfoWindowF
                    position={venue.coordinates}
                    onCloseClick={() => selectVenue(null)}
                    options={{ disableAutoPan: true }}
                  >
                    <VenuePopUp venue={venue} routeDistance={routeDistance} routeDuration={routeDuration} />
                  </InfoWindowF>
                )}
              </MarkerF>
            ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
