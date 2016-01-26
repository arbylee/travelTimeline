"use strict";

import trips from "./data.js";
import tripGraph from "./views/tripGraph.js";
import tripBlurbs from "./views/tripBlurbs.js";
import initMap from "./map.js";
import {selectTripPoint} from "./views/graphPoints.js";
import {getFirstGraphPoint} from "./views/graphPoints.js";

tripGraph(trips);
tripBlurbs(trips);

initMap().on('ready', function(){
  selectTripPoint(getFirstGraphPoint());
})
