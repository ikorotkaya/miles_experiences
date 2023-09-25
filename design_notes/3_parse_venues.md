# Parse venues

We have chosen to include venues from the "Tag des offenen Denkmals" event organized by the Landesdenkmalamt Berlin. This event offers a unique opportunity to explore places that are typically not accessible to the public.

1. A list of these venues can be obtained from the website console, as shown in the screenshot below:
![Parse venues screenshot](https://raw.githubusercontent.com/ikorotkaya/miles_experiences/main/design_notes/images/venues.png)

2. Each venue in the list is identified by a unique id and contains information such as title, latitude (lat), and longitude (lng) coordinates.

3. To obtain venue images, you can use the venue id and retrieve them from the website by appending the id to the URL, for example: 
https://denkmaltag.berlin.de/denkmal/?id=${venue.id}. 
Image links for each venue are also provided in the venue list.

4. The final list of venues is stored in the file [venues.json](../src/data/venues.ts). This list contains comprehensive information about each venue, including image links and short descriptions generated by the ChatGPT-3.5 model. 

5. To generate short descriptions for these venues, you can simply copy the venue names and paste them into ChatGPT, providing a prompt like "Create venue descriptions, each no longer than 100 characters."

6. You can get more information about venues by clicking on the link in the venue pop-up for each venue when you click on the venue marker on the map:
![Read more info button](https://raw.githubusercontent.com/ikorotkaya/miles_experiences/main/design_notes/images/read_more_info.png)

All venues and images were taken from the https://denkmaltag.berlin.de/, all rights to these images belong to [Landesdenkmal­amt, Berlin](https://www.berlin.de/landesdenkmalamt/).