import { create } from "zustand";

type StoreState = {
  highlightedVenueId: number | null;
  selectedVenueId: number | null;
  userLocation: { lat: number; lng: number } | null;
  setHighlightedVenueId: (venueId: number | null) => void;
  setSelectedVenueId: (venueId: number | null) => void;
  setUserLocation: (location: { lat: number; lng: number } | null) => void;
}

export const useStore = create<StoreState>((set) => ({
  highlightedVenueId: null,
  selectedVenueId: null,
  userLocation: null,
  setHighlightedVenueId: (venueId) => set({ highlightedVenueId: venueId }),
  setSelectedVenueId: (venueId) => set({ selectedVenueId: venueId }),
  setUserLocation: (location) => set({ userLocation: location }),
}));