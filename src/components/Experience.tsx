import React from "react";
import { useStore } from "store";
import { rideCost } from "utils/calculateRideCost";

import { ExperienceProps } from "types";

import { useTranslation } from "react-i18next";

export default function Experience({ venue, distance, locale }: ExperienceProps) {
  const highlightedVenueId = useStore((state) => state.highlightedVenueId);
  const highlightVenue = useStore((state) => state.setHighlightedVenueId);
  const selectVenue = useStore((state) => state.setSelectedVenueId);

  const { t } = useTranslation();

  const venueDescription = (venue.description as {[key: string]: string})[locale];

  return (
    <div
      key={venue.id}
      className={`flex flex-row border-white border-4 p-4 m-2 ${highlightedVenueId === venue.id ? "cursor-pointer text-white bg-black" : "bg-white text-black"}`}
      onClick={() => selectVenue(venue.id)}
      onMouseOver={() => highlightVenue(venue.id)}
      onMouseOut={() => highlightVenue(null)}
    >
      <div className="w-36 h-36 relative bg-slate-100 shrink-0">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-full block object-cover absolute top-0 left-0"
          loading="lazy"                
        />
      </div>
      <div className="flex flex-col ml-4 ">
        <h2 className="text-l font-bold mb-4">{venue.name}</h2>
        <p className="text-sm mb-3">{venueDescription}</p>

        <p className="text-xs">
          {/* DESIGN NOTE: 1_estimated_price_calculation.md */}
          {t("approxDist")} {distance.toFixed(2)} km
        </p>
        <p className="text-xs">
          {t("approxCost")} {rideCost(distance)}€
        </p>
      </div>
    </div>
  )
}