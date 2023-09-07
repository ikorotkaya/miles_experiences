import React, { useState } from "react";
import GoogleMapsComponent from "./GoogleMap";

export default function Main() {
    const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const getUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation not available in this browser.');
    }
  };
  return (
    <main>
      <div className="flex justify-center max-w-screen-lg">
      <button onClick={getUserLocation}>Get My Location</button>
      {userLocation && <GoogleMapsComponent userLocation={userLocation} />}
      </div>
    </main>
  );
}
