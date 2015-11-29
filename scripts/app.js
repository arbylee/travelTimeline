"use strict";

import trips from "./data.js";
import tripGraph from "./views/tripGraph.js";
import tripBlurbs from "./views/tripBlurbs.js";
import initMap from "./map.js";

tripGraph(trips);
tripBlurbs(trips);
initMap();

