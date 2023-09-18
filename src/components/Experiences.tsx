import { haversineDistance } from "../utils/haversine";
import { useEffect, useState } from "react";

import { rideCost } from "../utils/calculateRideCost";

type ExperiencesProps = {
  userLocation: {
    lat: number;
    lng: number;
  } | null;
  venues: any[];
};

const Experiences: React.FC<ExperiencesProps> = ({ userLocation, venues }) => {
  const [sortedPOIs, setSortedPOIs] = useState<[string, number][]>([]);

  useEffect(() => {
    // Calculate distances for each POI and store them in an object
    const distances: { [key: string]: number } = {};

    if (userLocation) {
      for (const venue of venues) {
        const distance = haversineDistance(userLocation, venue.coordinates);
        distances[venue.id] = distance;
      }

      // Convert the object to an array and sort it by distance in ascending order
      const sortedArray = Object.entries(distances).sort((a, b) => a[1] - b[1]);

      // Set the sorted POIs in the state
      setSortedPOIs(sortedArray);
    }
  }, [userLocation, venues]);

  return (
    <div className="w-full flex flex-col bg-black">
      <div className="flex justify-center text-white">
        <h1 className="text-4xl font-bold m-10">Experiences</h1>
      </div>
      <div className="flex flex-col mx-2">
        {sortedPOIs.map(([id, distance]) => {
          const venue = venues.find((venue) => venue.id === id);
          if (!venue) {
            return null;
          }
          return (
            <div
              key={venue.id}
              className="flex flex-row border-white border-4 hover:text-white hover:bg-black p-4 m-2  bg-white text-black"
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-36 h-36 object-cover"
                loading="lazy"
              />
              <div className="flex flex-col ml-4 ">
                <h2 className="text-m font-bold mb-4">{venue.name}</h2>
                <p className="text-sm">
                  Approx. distance: {distance.toFixed(2)} km
                </p>
                <p className="text-sm">
                  Approximate cost: {rideCost(distance)}€
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
