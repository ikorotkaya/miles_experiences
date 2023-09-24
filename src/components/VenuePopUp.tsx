import { VenuePopUpProps } from "types"
import { rideCost } from "utils/calculateRideCost";

export default function VenuePopUp({ venue, routeDistance, routeDuration}: VenuePopUpProps) {
  return (
    <div className="w-64 font-normal">
      <h2 className="text-xl font-bold mb-2">{venue.name}</h2>
      <img
        className="block w-64 mb-3"
        src={venue.image}
        alt={venue.name}
      />
      <p className="text-sm">{venue.description}.</p>
      <a 
        className="text-sm underline"
        href={`https://denkmaltag.berlin.de/denkmal/?id=${venue.id}`}
        target="_blank"
        title="Read more info about this venue">
          Read more!
      </a>
      { routeDistance !== undefined && 
        <div className="mt-2 flex flex-col items-left">
          <p className="text-xs">Distance: {routeDistance}</p>
          <p className="text-xs">Duration: {routeDuration}</p>
          <p className="text-xs">
            Cost: {rideCost(parseFloat(routeDistance))}€
          </p>
        </div>
      }
    </div>
  );
}