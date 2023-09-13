import Footer from "./components/Footer";
import Header from "./components/Header";

import React, { useEffect, useState } from "react";
import GoogleMapsComponent from "./components/GoogleMap";
import Experiences from "./components/Experiences";

import rawVenues from "../src/data/venues";

export default function App() {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [venues, setVenues] = useState<any[]>([]);

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation not available in this browser.");
    }
  };

  useEffect(() => {
    getUserLocation();
    setVenues(rawVenues);
  }, []);

  const handleMarkerDragEnd = (newPosition: { lat: number; lng: number }) => {
    // Handle the new position of the marker here
    setUserLocation(newPosition);
  };
  return (
    <div className="app w-full h-full fixed top-0 left-0">
      <div className="app__inner h-full grid grid-rows-[100px,1fr,100px] grid-cols-[2fr,1fr] overflow-hidden ">
        <Header />
        {userLocation && (
          <div className="app__map row-start-2 col-start-1" id="app__map">
            <GoogleMapsComponent
              userLocation={userLocation}
              onMarkerDragEnd={handleMarkerDragEnd}
              venues={venues}
            />
          </div>
        )}
        {userLocation && (
          <div className="app__experiences row-start-2 col-start-2 overflow-y-scroll overflow-x-hidden">
            <Experiences venues={venues} userLocation={userLocation} />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
