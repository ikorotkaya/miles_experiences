export type LatLng = {
  lat: number;
  lng: number;
}

export type Venue = {
  id: number;
  name: string;
  image: string;
  coordinates: LatLng;
  description: string;
}

export type GoogleMapsComponentProps = {
  userLocation: LatLng;
  venues: Venue[];
  onMarkerDragEnd: (position: LatLng) => void;
}

export type ExperienceListProps = {
  userLocation: LatLng;
  venues: Venue[];
};

export type ExperienceProps = {
  venue: Venue;
  distance: number;
};

export type InvitationButtonProps = {
  setMenuOpen: (open: boolean) => void;
};