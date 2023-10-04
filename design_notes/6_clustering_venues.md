# Clustering venues

Venues are dynamically clustered on the map with a cluster radius depending on the zoom level.

To calculate clusters the [supercluster](https://github.com/mapbox/supercluster) packaged is used.

Clustering mechanism is inspired by this blog post: https://bitsbydenis.medium.com/react-google-maps-marker-clustering-34219f22fed8

Here's a sample app behind this post: https://github.com/deni1688/carsharing-map/blob/master/src/App.tsx

## Misc

### Missing GeoJSON type

https://github.com/mapbox/supercluster#typescript

~~~
npm install @types/supercluster --save-dev
~~~