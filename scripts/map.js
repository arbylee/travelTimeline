import trips from "./data.js";
import MARKERS from "./markers.js";

const MAP_OPTIONS = {
  zoomControl: false,
  worldCopyJump: true
}

export default function(){
  L.mapbox.accessToken = 'pk.eyJ1IjoiYXJieWxlZSIsImEiOiJjaWdoZ2xjZWM4M2lmdjhtN3g2NzQxcncyIn0.Ru65y4i-50cxaM7_UA-D_w';
  let map = L.mapbox.map('map', 'arbylee.oa107lhc', MAP_OPTIONS).setView([25, 0], 2);
  trips.forEach(function(trip, index){
    trip.marker = L.marker(trip.coordinates).addTo(map);
    trip.marker.setIcon(L.mapbox.marker.icon({
      'marker-color': MARKERS.defaultColor
    }))
  });

  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();

  return map
}

