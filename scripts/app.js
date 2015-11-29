"use strict";

import trips from "./data.js";
import Handlebars from "./vendor/handlebars-v4.0.4.js";
import $ from "./vendor/jquery-2.1.4.min.js";

var source   = $("#trip-graph-template").html();
var template = Handlebars.compile(source);
var spaceBetween = 100;
var startingX = 50;
var radius = 10;
trips.forEach(function(trip, index){
  trip.x = startingX + (index * spaceBetween);
  trip.radius = radius;
});
var totalTripLength = startingX + spaceBetween * (trips.length-1);
var timeLineStart = startingX + radius;
var html = template({trips: trips, timeLineStart: timeLineStart, totalTripLength: totalTripLength});
$('#trip-graph').html(html)



var source2   = $("#trip-blurb-template").html();
var template2 = Handlebars.compile(source2);
var html = template2({trips: trips, totalTripLength: totalTripLength});
$('#trip-blurbs').html(html)


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
