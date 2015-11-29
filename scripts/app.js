"use strict";

import trips from "./data.js";
import Handlebars from "./vendor/handlebars-v4.0.4.js";
import $ from "./vendor/jquery-2.1.4.min.js";
import _ from "./vendor/lodash.js";

var source   = $("#trip-graph-template").html();
var template = Handlebars.compile(source);
var spaceBetween = 100;
var startingX = 50;
var radius = 10;
_.each(trips, function(trip, index){
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
