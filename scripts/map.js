import trips from "./data.js";
import MARKERS from "./markers.js";

const MAP_OPTIONS = {
  zoomControl: false,
  worldCopyJump: true
}

var map;
var L = window.L;

export default function(){
  if(map){
    return map;
  }

  L.mapbox.accessToken = 'pk.eyJ1IjoiYXJieWxlZSIsImEiOiJjaWdoZ2xjZWM4M2lmdjhtN3g2NzQxcncyIn0.Ru65y4i-50cxaM7_UA-D_w';
  map = L.mapbox.map('map', 'arbylee.oa107lhc', MAP_OPTIONS).setView([25, 0], 3);
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

