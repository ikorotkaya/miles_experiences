import React, { useEffect, useState } from "react";
import GoogleMapsComponent from "./GoogleMap";
import Experiences from "./Experiences";  

import rawVenues from "../data/venues";

export default function Main() {
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
    <main className="row-span-2 col-span-1">
      {userLocation && (
        <div className="grid gap-4 grid-cols-[2fr,1fr] m-4">
          <div className="col-span-1">
            <GoogleMapsComponent
              userLocation={userLocation}
              onMarkerDragEnd={handleMarkerDragEnd}
              venues={venues}
            />
          </div>
          <div className="">
            <Experiences venues={venues} userLocation={userLocation} />
          </div>
        </div>
      )}
    </main>
  );
}
