import { create } from "zustand";

export const useStore = create((set) => (
  {
    highlightedVenueId: null,
    setHiglightedVenueId: (venueId: number) => set({ highlightedVenueId: venueId})
  }
));