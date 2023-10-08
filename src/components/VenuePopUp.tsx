import { VenuePopUpProps } from "types";
import { rideCost } from "utils/calculateRideCost";

import { useTranslation } from "react-i18next";

export default function VenuePopUp({
  venue,
  routeDistance,
  routeDuration,
  locale,
}: VenuePopUpProps) {
  const { t } = useTranslation();

  const venueDescription = (venue.description as { [key: string]: string })[
    locale
  ];

  return (
    <div className="w-64 font-normal">
      <h2 className="text-xl font-bold mb-2">{venue.name}</h2>
      <img className="block w-64 mb-3" src={venue.image} alt={venue.name} />
      <p className="text-sm">{venueDescription}.</p>
      {/* Design note: 2_accurate_price_calculation.md */}
      {routeDistance !== undefined && (
        <div className="mt-2 flex flex-col items-left">
          <p className="text-xs">
            {t("distance")} {routeDistance}
          </p>
          <p className="text-xs">
            {t("duration")} {routeDuration}
          </p>
          <p className="text-xs">
            {t("cost")} {rideCost(parseFloat(routeDistance))}€
          </p>
        </div>
      )}
    </div>
  );
}
