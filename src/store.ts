import { create } from "zustand";

interface StoreState {
  highlightedVenueId: number | null;
  selectedVenueId: number | null;
  userLocation: { lat: number; lng: number } | null;
}

interface StoreActions {
  setHighlightedVenueId: (venueId: number | null) => void;
  setSelectedVenueId: (venueId: number | null) => void;
  setUserLocation: (location: { lat: number; lng: number } | null) => void;
}

type AppStore = StoreState & StoreActions;

export const useStore = create<AppStore>((set) => ({
  highlightedVenueId: null,
  selectedVenueId: null,
  userLocation: null,
  setHighlightedVenueId: (venueId) => set({ highlightedVenueId: venueId }),
  setSelectedVenueId: (venueId) => set({ selectedVenueId: venueId }),
  setUserLocation: (location) => set({ userLocation: location }),
}));