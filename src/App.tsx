import Footer from "components/Footer";
import Header from "components/Header";

import { useEffect, useState } from "react";
import GoogleMapsComponent from "components/GoogleMap";
import Experiences from "components/Experiences";

import rawVenues from "data/venues";
import { LatLng, Venue } from "types"; 

export default function App() {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [venues, setVenues] = useState<Venue[]>([]);  

  const getDefaultLocation = (): LatLng => {
    return { lat: 52.521918, lng: 13.413215 };
  };  
  
  useEffect(() => {
    const getUserLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
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
            <Experiences venues={venues} userLocation={userLocation} />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
