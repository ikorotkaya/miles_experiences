import { create } from "zustand";

export const useStore = create((set) => (
  {
    highlightedVenueId: null,
    selectedVenueId: null,
    setHiglightedVenueId: (venueId: number) => set({ highlightedVenueId: venueId}),
    setSelectedVenueId: (venueId: number) => set({ selectedVenueId: venueId})
  }
));