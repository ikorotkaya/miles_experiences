import React, { useState } from "react";
import GoogleMapsComponent from "./GoogleMap";

export default function Main() {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

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

  const handleMarkerDragEnd = (newPosition: { lat: number; lng: number }) => {
    // Handle the new position of the marker here
    setUserLocation(newPosition);
  };

  return (
    <main className="h-full">
      <div className="flex items-center justify-center">
        <button
          className="w-64 text-2xl bg-black text-white border-black border-2 p-6 m-6  hover:bg-white hover:text-black ease-in-out duration-150  "
          onClick={getUserLocation}
        >
          Get My Location
        </button>
      </div>
      {userLocation && (
        <GoogleMapsComponent
          userLocation={userLocation}
          onMarkerDragEnd={handleMarkerDragEnd}
        />
      )}
  </main>
  );
}
