"use strict";

import trips from "./data.js";
import tripGraph from "./views/tripGraph.js";
import tripBlurbs from "./views/tripBlurbs.js";

tripGraph(trips);
tripBlurbs(trips);


L.mapbox.accessToken = 'pk.eyJ1IjoiYXJieWxlZSIsImEiOiJjaWdoZ2xjZWM4M2lmdjhtN3g2NzQxcncyIn0.Ru65y4i-50cxaM7_UA-D_w';
var mapOptions = {
  zoomControl: false,
  tileLayer: {
    continuousWorld: false,
    noWrap: true
  }
}
var map = L.mapbox.map('map', 'arbylee.oa107lhc', mapOptions).setView([25, 0], 2);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
if (map.tap) map.tap.disable();
