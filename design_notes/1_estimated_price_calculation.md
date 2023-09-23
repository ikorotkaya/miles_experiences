# Estimated price calculation

In the experiences menu, we want to show users the price they'll pay to get to each venue. 

## Problems

There're 2 problems with showing precise prices:

1. We'll need to call Google Directions API for each venue, which is expensive (we pay for each API call).
2. The latency with this approach will also be high, hence slow UX.

## Solution

Since we know both user location (spherical coordinates) and the venue location, let's simply estimate the distance using the spherical distance formula aka ["haversine formula"](https://en.wikipedia.org/wiki/Haversine_formula).