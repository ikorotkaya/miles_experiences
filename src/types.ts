export type LatLng = {
  lat: number;
  lng: number;
}

export type Venue = {
  id: number;
  name: string;
  image: string;
  coordinates: LatLng;
  description: object;
}

export type GoogleMapsComponentProps = {
  userLocation: LatLng;
  venues: Venue[];
  onMarkerDragEnd: (position: LatLng) => void;
  locale: string;
}

export type ExperienceListProps = {
  userLocation: LatLng;
  venues: Venue[];
  locale: string;
};

export type ExperienceProps = {
  venue: Venue;
  distance: number;
  locale: string;
};

export type InvitationButtonProps = {
  setMenuOpen: (open: boolean) => void;
};

export type LanguageSwitcherProps = {
  language: string;
  setLanguage: (language: string) => void;
};

export type VenuePopUpProps = {
  routeDistance: string | undefined;
  venue: Venue;
  routeDuration: string | undefined;
  locale: string;
};

export type LanguageDropDownMenuProps = {
  setMenuOpen: (open: boolean) => void;
};