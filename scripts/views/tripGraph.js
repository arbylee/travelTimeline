import renderTemplate from "./renderTemplate.js";
import initGraphPoints from "./graphPoints.js";

const SPACE_BETWEEN_POINTS = 100;
const STARTING_X = 50;
const RADIUS = 10;
const TIMELINE_START = STARTING_X + RADIUS;

export default function(trips){
  trips.forEach(function(trip, index){
    trip.x = STARTING_X + (index * SPACE_BETWEEN_POINTS);
    trip.radius = RADIUS;
  });
  let totalTripLength = STARTING_X + SPACE_BETWEEN_POINTS * (trips.length-1);
  let data = {
    trips: trips,
    timeLineStart: TIMELINE_START,
    totalTripLength: totalTripLength
  };
  renderTemplate("trip-graph", data);
  initGraphPoints();
}
