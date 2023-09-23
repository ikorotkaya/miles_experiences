import { haversineDistance } from "utils/haversine";
import { useEffect, useState } from "react";

import { rideCost } from "utils/calculateRideCost";

import { ExperiencesProps } from "types";
import { useStore } from "store";

const Experiences: React.FC<ExperiencesProps> = ({ userLocation, venues }) => {
  const [sortedPOIs, setSortedPOIs] = useState<[string, number][]>([]);
  const highlightedVenueId = useStore((state) => state.highlightedVenueId);
  const highlightVenue = useStore((state) => state.setHighlightedVenueId);
  const selectVenue = useStore((state) => state.setSelectedVenueId);

  useEffect(() => {
    // Calculate distances for each POI and store them in an object
    const distances: { [key: string]: number } = {};

    if (userLocation !== undefined) {
      for (const venue of venues) {
        const distance = haversineDistance(userLocation, venue.coordinates);
        distances[venue.id] = distance;
      }

      // Convert the object to an array and sort it by distance in ascending order
      const sortedArray = Object.entries(distances).sort((a, b) => a[1] - b[1]);

      setSortedPOIs(sortedArray);
    }
  }, [userLocation, venues]);

  const handleVenueClick = (venueId: number) => {
    selectVenue(venueId);
  };

  const handleVenueMouseOver = (venueId: number) => {    
    highlightVenue(venueId);
  };

  const handleVenueMouseOut = () => {    
    highlightVenue(null);
  };

  return (
    <div className="w-full flex flex-col bg-black">
      <div className="flex justify-center text-white">
        <h1 className="text-4xl font-bold m-10">Experiences</h1>        
      </div>
      <div className="flex flex-col mx-2">
        {sortedPOIs.map(([id, distance]) => {
          const venue = venues.find((venue) => venue.id === Number(id));
          
          if (venue === undefined) {
            return null;
          }

          return (
            <div
              key={venue.id}
              className={`flex flex-row border-white border-4 p-4 m-2  ${highlightedVenueId === venue.id ? "cursor-pointer text-white bg-black" : "bg-white text-black"}`}
              onClick={() => handleVenueClick(venue.id)}
              onMouseOver={() => handleVenueMouseOver(venue.id)}
              onMouseOut={() => handleVenueMouseOut()}
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-36 h-36 object-cover"
                loading="lazy"
              />
              <div className="flex flex-col ml-4 ">
                <h2 className="text-l font-bold mb-4">{venue.name}</h2>
                <p className="text-xs mb-3">{venue.description}</p>

                <p className="text-xs">
                  Approx. distance: {distance.toFixed(2)} km
                </p>
                <p className="text-xs">
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
