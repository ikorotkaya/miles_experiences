import { pointsOfInterest } from "../PointsOfInterest";


function haversineDistance (coords1: { lat: number; lng: number }, coords2: { lat: number; lng: number }) {
  var R = 6371.0710; // Radius of the Earth in miles
  var rlat1 = coords1.lat * (Math.PI/180); // Convert degrees to radians
  var rlat2 = coords2.lat * (Math.PI/180); // Convert degrees to radians
  var difflat = rlat2-rlat1; // Radian difference (latitudes)
  var difflon = (coords2.lng-coords1.lng) * (Math.PI/180); // Radian difference (longitudes)

  var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
  return d;
}

const POIMenu: React.FC<{ userLocation: { lat: number; lng: number } | null }> = ({ userLocation }) => {

  if (!userLocation) {
    return null;
  }

  const center = {
    lat: userLocation.lat,
    lng: userLocation.lng,
  };

  const distance1 = (haversineDistance(center, pointsOfInterest[0].coordinates)).toFixed(2)
  const cost1 = (Number(distance1) * 0.99).toFixed(2)

  console.log("Distance Potsdam " + distance1)

  return (
    <div className="flex flex-col bg-black text-white">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold m-4">Points of Interest</h1>
      </div>
      <div className="flex flex-col mx-5">
        {pointsOfInterest.map((poi) => (
          <div key={poi.name} className="flex flex-row mb-3">
            <img className="w-48 h-48 object-cover mr-3" src={poi.image} alt={poi.name}/>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{poi.name}</h2>
              <p className="text-lg">{"Distance: " + distance1}</p>
              <p className="text-lg">{"Cost: " + cost1}</p>
              {/* <p className="text-lg">{poi.description}</p> */}
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default POIMenu;