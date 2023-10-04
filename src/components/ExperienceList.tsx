import { useEffect, useState } from "react";

import { calculateSphericalDistance } from "utils/calculateSphericalDistance";
import { ExperienceListProps } from "types";
import Experience from "./Experience";

export default function ExperienceList({
  userLocation,
  venues,
}: ExperienceListProps) {
  const [sortedPOIs, setSortedPOIs] = useState<[string, number][]>([]);

  useEffect(() => {
    // Calculate distances for each POI and store them in an object
    const distances: { [key: string]: number } = {};

    if (userLocation !== undefined) {
      for (const venue of venues) {
        const distance = calculateSphericalDistance(
          userLocation,
          venue.coordinates
        );
        distances[venue.id] = distance;
      }

      // Convert the object to an array and sort it by distance in ascending order
      const sortedArray = Object.entries(distances).sort((a, b) => a[1] - b[1]);

      setSortedPOIs(sortedArray);
    }
  }, [userLocation, venues]);

  return (
    <div className="w-full flex flex-col bg-black">
      <div className="flex justify-center text-white">
        <h1 className="text-4xl font-bold m-10">ExperienceList</h1>
      </div>
      <div className="flex flex-col mx-2">
        {sortedPOIs.map(([id, distance]) => {
          const venue = venues.find((venue) => venue.id === Number(id));

          if (venue === undefined) {
            return null;
          }

          return <Experience distance={distance} key={venue.id} venue={venue} />;
        })}
      </div>
    </div>
  );
}
