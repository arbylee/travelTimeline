import renderTemplate from "./renderTemplate.js";
import $ from "../vendor/jquery-2.1.4.min.js";
import trips from "../data.js";
import MARKERS from '../markers.js'

export default function(trips){
  let data = {trips: trips};
  renderTemplate("trip-blurbs", data);
}

export function showSelectedBlurb(tripId){
    $('.blurb__element').removeClass('-active');
    $(`.blurb__element[data-id="${tripId}"]`).addClass('-active');
    trips.forEach(function(trip, index){
      if(trip.id == tripId) {
        trip.marker.setIcon(L.mapbox.marker.icon({
          'marker-color': MARKERS.highlightColor
        }))
      } else {
        trip.marker.setIcon(L.mapbox.marker.icon({
          'marker-color': MARKERS.defaultColor
        }))
      }
    });
    let trip = trips.find(x => x.id === tripId)
    trip.marker
};

