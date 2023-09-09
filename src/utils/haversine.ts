export function haversineDistance (coords1: { lat: number; lng: number }, coords2: { lat: number; lng: number }) {
  var R = 6371.0710; // Radius of the Earth in km
  var rlat1 = coords1.lat * (Math.PI/180); // Convert degrees to radians
  var rlat2 = coords2.lat * (Math.PI/180); // Convert degrees to radians
  var difflat = rlat2-rlat1; // Radian difference (latitudes)
  var difflon = (coords2.lng-coords1.lng) * (Math.PI/180); // Radian difference (longitudes)

  var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
  return d;
}