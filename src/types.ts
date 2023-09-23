export interface LatLng {
  lat: number;
  lng: number;
}

export interface Venue {
  id: number;
  name: string;
  image: string;
  coordinates: LatLng;
  description: string;
}

export interface GoogleMapsComponentProps {
  userLocation: LatLng;
  venues: Venue[];
  onMarkerDragEnd: (position: LatLng) => void;
}

export type ExperiencesProps = {
  userLocation: LatLng;
  venues: Venue[];
};