import { pointsOfInterest } from "../PointsOfInterest";
import { haversineDistance } from "../utils/haversine";
import { useEffect, useState } from "react";

import { rideCost } from "../utils/calculateRideCost";

const POIMenu: React.FC<{ userLocation: { lat: number; lng: number } | null }> = ({ userLocation }) => {
  const [sortedPOIs, setSortedPOIs] = useState<[string, number][]>([]);

  useEffect(() => {
    // Calculate distances for each POI and store them in an object
    const distances: { [key: string]: number } = {};

    if (userLocation) {
      for (const poi of pointsOfInterest) {
        const distance = haversineDistance(
          userLocation,
          poi.coordinates
        );
        distances[poi.id] = distance;
      }
  
      // Convert the object to an array and sort it by distance in ascending order
      const sortedArray = Object.entries(distances).sort(
        (a, b) => a[1] - b[1]
      );
  
      // Set the sorted POIs in the state
      setSortedPOIs(sortedArray);
    }
  }, [userLocation]);



  return (
    <div className="flex flex-col bg-black">
      <div className="flex justify-center text-white">
        <h1 className="text-6xl font-bold m-8">Experiences</h1>
      </div>
      <div className="flex flex-col mx-5">
        {sortedPOIs.map(([id, distance]) => {
          const poi = pointsOfInterest.find((poi) => poi.id === id);
          if (!poi) {
            return null;
          }
          return (
            <div key={poi.id} className="flex flex-row border-white border-4 hover:text-white hover:bg-black p-4 m-2  bg-white text-black hover:cursor-pointer">
              <img src={poi.image} alt={poi.name} className="w-36 h-36 object-cover" />
              <div className="flex flex-col ml-4 ">
                <h2 className="text-2xl font-bold mb-4">{poi.name}</h2>
                <p className="text-base">Distance: {distance.toFixed(2)} km</p>
                <p className="text-base">Approximate cost: {rideCost(distance)}€</p>
              </div>
            </div>
          );  
        })}
      </div>
    </div>
  );
}

export default POIMenu;