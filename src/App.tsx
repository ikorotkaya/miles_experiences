import { useEffect, useState } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import GoogleMapsComponent from "components/GoogleMap";
import ExperienceList from "components/ExperienceList";
import rawVenues from "data/venues";
import { LatLng, Venue } from "types"; 

import { calculateSphericalDistance } from "utils/calculateSphericalDistance";

import { useStore } from "store";

export default function App() {
  // Design note: 3_parse_venues.md
  const [venues, setVenues] = useState<Venue[]>([]);  

  const getDefaultLocation = (): LatLng => {
    return { lat: 52.521918, lng: 13.413215 };
  };  

  const userLocation = useStore((state) => state.userLocation) as LatLng | null;
  const setUserLocation = useStore((state) => state.setUserLocation);
  
  useEffect(() => {
    const getUserLocation = () => {

      // Design note: 5_limited_berlin_area.md
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userCoordinates = { lat: latitude, lng: longitude };

            const distanceToBerlin = calculateSphericalDistance(userCoordinates, getDefaultLocation());

            if (distanceToBerlin <= 50) {
              setUserLocation(userCoordinates);
              return;
            } else {
              setUserLocation(getDefaultLocation());
            }
          },
          (error) => {
            console.error("Error getting user location:", error);
            setUserLocation(getDefaultLocation());
          }
        );
      } else {
        console.error("Geolocation not available in this browser.");
        setUserLocation(getDefaultLocation());
      }
    };

    getUserLocation();
    setVenues(rawVenues);
  }, []);

  const handleMarkerDragEnd = (newPosition: LatLng) => {
    setUserLocation(newPosition);
  };
  
  return (
    <div className="app w-full h-full fixed top-0 left-0">
      <div className="app__inner h-full grid grid-rows-[100px,1fr,100px] grid-cols-[2fr,1fr] overflow-hidden ">
        <Header />
        {userLocation && (
          <div className="app__map row-start-2 col-start-1 md:col-span-1 col-span-2" id="app__map">
            <GoogleMapsComponent
              userLocation={userLocation}
              onMarkerDragEnd={handleMarkerDragEnd}
              venues={venues}
            />
          </div>
        )}
        {userLocation && (
          <div className="hidden md:block app__experiences row-start-2 col-start-2 overflow-y-scroll overflow-x-hidden">
            <ExperienceList venues={venues} userLocation={userLocation} />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
