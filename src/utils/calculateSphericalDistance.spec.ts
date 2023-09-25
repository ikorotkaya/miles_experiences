import { calculateSphericalDistance } from "./calculateSphericalDistance";

describe("calculateSphericalDistance", () => {
  test.only("calculates the distance correctly", () => {
    const coords1 = { lat: 52.5208, lng: 13.4094 }; // Berlin coordinates
    const coords2 = { lat: 52.5163, lng: 13.3777 };  // Paris coordinates

    const expectedDistance = 878.95; // Replace with the actual expected distance

    const distance = calculateSphericalDistance(coords1, coords2);

    expect(distance).toBeCloseTo(expectedDistance, 2); // Adjust the precision as needed
  });
});