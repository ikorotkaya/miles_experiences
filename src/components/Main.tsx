import React, { useEffect, useState } from "react";
import GoogleMapsComponent from "./GoogleMap";
import POIMenu from "./POIMenu";

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

  useEffect(() => {
    getUserLocation();
  }, []);

  const handleMarkerDragEnd = (newPosition: { lat: number; lng: number }) => {
    // Handle the new position of the marker here
    setUserLocation(newPosition);
  };

  return (
    <main className="flex-grow">
      {userLocation && (
        <div className="grid gap-6 grid-cols-3 m-6">
          <div className="col-span-2">
            <GoogleMapsComponent
              userLocation={userLocation}
              onMarkerDragEnd={handleMarkerDragEnd}
            />
          </div>
          <POIMenu userLocation={userLocation} />
        </div>
      )}
    </main>
  );
}
