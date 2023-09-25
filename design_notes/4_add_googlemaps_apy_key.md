# Add a restricted Goggle Maps APY key to the project

To add a restricted Google Maps API key to your project, follow these steps:

1. Create a new project in the Google Cloud Platform Console.

2. Enable the Google Maps JavaScript API and Google Maps Directions API for your project. You can see a list of products to enable [here](https://console.cloud.google.com/google/maps-apis/api-list?project=your-project-id).

3. Create a new API key within your project.

4. Restrict the API key by selecting "HTTP referers (web sites)" from the list of Application restrictions. This step ensures that only specified web domains can use the API key.

5. Add the API key to your project and store it in a file named `.env.local`. Make sure to include this file in your `.gitignore` to keep your API key secure. Name the key `REACT_APP_GOOGLE_MAPS_API_KEY` within the `.env.local` file.

6. In your `GoogleMapsComponent`, access the API key using `process.env.REACT_APP_GOOGLE_MAPS_API_KEY` from the `.env.local` file within the `LoadScript` component.

Please refer to the [official Google Maps documentation](https://developers.google.com/maps/documentation/javascript/get-api-key) for detailed instructions on creating and using an API key in your project.

Ensure that you keep your API key confidential and do not expose it publicly in your code or repositories.

Using an API key is essential for several reasons:

- Authentication: An API key acts as a unique identifier for your project, ensuring that only authorized applications can access the Google Maps APIs associated with your key.

- Rate Limiting: Google Maps APIs often have rate limits to prevent abuse or overuse. By using an API key, you can track and manage your project's usage within these limits.

- Security: Restricting the API key to specific domains or web applications enhances security by preventing unauthorized access. This way, your API key is only usable by trusted sources.

- Usage Tracking: With an API key, you can monitor your project's usage of Google Maps APIs and keep track of any associated costs.