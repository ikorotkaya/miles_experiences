# Miles Experiences

Explore Berlin's iconic and hidden gems with Miles Experiences. Calculate travel costs and journey times to your chosen destination. 🚗

![Miles Experiences App](https://raw.githubusercontent.com/ikorotkaya/miles_experiences/main/misc/allow_location.gif)

![GitHub License MIT](https://img.shields.io/github/license/sqlhabit/sql_schema_visualizer?color=%2347A3F3)

## How to use

🚀 *Ensure location access:* Activate Location Access in your web browser to discover experiences around you. Alternatively, start your journey from Alexanderplatz, which is set as the default user location.

![Block Location](https://raw.githubusercontent.com/ikorotkaya/miles_experiences/main/misc/block_location.gif)

🎡 *Search for nearby attractions:* Conveniently find nearby attractions, sorted by distance, on the right side of the app.

🔛 *Customise your adventure:* Personalise your adventure by dragging the location marker or the Miles car. Prices, routes and experiences are updated based on your new location.

🧐 *Check venue details:* Click on a experience card on the right or a marker on the map to get more information about the attraction. This includes a brief description, exact times and prices, and a link to the official website [Berlin Monument Authority](https://www.berlin.de/landesdenkmalamt/) for more information.

🏁 *See route visualisation:* By clicking on a location on the right-hand side of the list, you can view the route to the destination on the map.

## How it works

⏳ *Real-Time Calculation:* These details are calculated in real-time using the Google Directions API. This ensures that users receive accurate pricing information based on their current location and the selected venue which you can find in Info Window popup.

📍 *Limited Location Availability:* Please note that the application is currently available only for Berlin. If you are located within Berlin, you can enjoy all the features the app has to offer. However, if you are located more than 50 kilometers away from Berlin or if you choose not to share your location, the app will use Alexanderplatz as the default location.

🔑 *Important Note:* To ensure that you have access to accurate pricing details, please make sure you have correctly configured your Google Maps API key. Detailed instructions on how to obtain and configure your API key can be found in the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Google Maps API
- Google Directions API
- HTML
- Zustand (state management)

## Development

To get started with development, follow these steps:

1. Install dependencies:
```sh
npm install
```
2. Start the development server:

```sh
npm run start
```

You can access the application at [localhost:3000](http://localhost:3000/)

## Testing

Tests are written with the [React Testing Library](https://testing-library.com/docs/react-testing-library/example-intro). To run all the tests, use the following command

```sh
npm run test
```

## Credits

All locations and images are from the https://denkmaltag.berlin.de/, all image rights are owned by [Landesdenkmal­amt, Berlin](https://www.berlin.de/landesdenkmalamt/).

The style of the app was inspired by [Miles Mobility GmbH](https://miles-mobility.com/en-de). 🎨

## Contributions

Contributions to the Miles Experiences app are welcome! If you have any suggestions, bug reports, or feature requests, feel free to submit an issue or a pull request. 👋🏼

## Licence

This project is released under the MIT Licence. Feel free to use, modify, and redistribute the code under the terms of the licence.
