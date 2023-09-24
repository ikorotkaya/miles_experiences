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
import { rideCost } from "utils/calculateRideCost";
import { GoogleMapsComponentProps  } from "types";
import { useStore } from "store";

const GoogleMapsComponent: React.FC<GoogleMapsComponentProps> = ({
  userLocation,
  onMarkerDragEnd,
  venues,
}) => {  
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

  const handleMarkerClick = (venueId: number | null) => {
    selectVenue(venueId);
  };

  const handleMarkerMouseOver = (venueId: number) => {
    highlightVenue(venueId);
  };

  const handleMarkerMouseOut = () => {    
    highlightVenue(null)
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
                onClick={() => handleMarkerClick(venue.id)}
                onMouseOver={() => handleMarkerMouseOver(venue.id)}
                onMouseOut={() => handleMarkerMouseOut()}
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
                    onCloseClick={() => handleMarkerClick(null)}
                    options={{ disableAutoPan: true }}
                  >
                    <div className="w-64 font-normal">
                      <h2 className="text-xl font-bold mb-2">{venue.name}</h2>
                      <img
                        className="block w-64 mb-3"
                        src={venue.image}
                        alt={venue.name}
                      />
                      <p className="text-sm">{venue.description}.</p>
                      <a 
                        className="text-sm underline"
                        href={`https://denkmaltag.berlin.de/denkmal/?id=${venue.id}`}
                        target="_blank"
                        title="Read more info about this venue">
                          Read more!
                      </a>
                      { routeDistance !== undefined && 
                        <div className="mt-2 flex flex-col items-left">
                          <p className="text-xs">Distance: {routeDistance}</p>
                          <p className="text-xs">Duration: {routeDuration}</p>
                          <p className="text-xs">
                            Cost: {rideCost(parseFloat(routeDistance))}€
                          </p>
                        </div>
                      }
                    </div>
                  </InfoWindowF>
                )}
              </MarkerF>
            ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapsComponent;
