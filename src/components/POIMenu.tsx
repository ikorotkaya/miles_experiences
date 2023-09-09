import { pointsOfInterest } from "../PointsOfInterest";
import { haversineDistance } from "../utils/haversine";
import { useEffect, useState } from "react";

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
    <div className="flex flex-col bg-black text-white">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold m-6">Points of Interest</h1>
      </div>
      <div className="flex flex-col mx-5">
        {sortedPOIs.map(([id, distance]) => {
          const poi = pointsOfInterest.find((poi) => poi.id === id);
          if (!poi) {
            return null;
          }
          return (
            <div key={poi.id} className="flex flex-col border-2 border-white rounded-lg p-4 m-2">
              <h2 className="text-xl font-bold">{poi.name}</h2>
              {/* <p className="text-sm">{poi.description}</p> */}
              <p className="text-sm">Distance: {distance.toFixed(2)} km</p>
            </div>
          );  
        })}
      </div>
    </div>
  );
}

export default POIMenu;