# Accurate price estimation 

In order to provide users with accurate pricing information, we rely on the Google Directions API for each venue. This allows us to calculate the travel time and distance for trips to specific venues. We can then use our [calculateRideCost()](../src/utils/calculateRideCost.ts) function to estimate the cost of the journey.

To access this accurate pricing information, simply click on the venue marker on the map. When you do, a pop-up window will appear. This pop-up contains valuable information, including

- The price: The exact cost of the journey.
- Estimated time: How long the journey is expected to take.
- Distance: The exact distance to the venue.

These details are all calculated in real time using the Google Directions API. 

To ensure the accuracy of these calculations, please ensure that you have set up and [configured your Google Maps API key](../design_notes/4_add_googlemaps_apy_key.md) correctly as per our project documentation.