"use strict";

import index from '../index.html';

import Chicago from '../img/Chicago.jpg';
import Cincinnati from '../img/Cincinnati.jpg';
import Goa from '../img/Goa.jpg';
import Jasper from '../img/Jasper.jpg';
import MelbourneAvo from '../img/MelbourneAvo.jpg';
import MelbourneBridge from '../img/MelbourneBridge.jpg';
import MelbourneStar from '../img/MelbourneStar.jpg';
import PeachreeCity from '../img/PeachtreeCity.jpg';

import appLess from '../styles/app.less';
import mapboxCss from '../styles/app.less';

import trips from "./data.js";
import tripGraph from "./views/tripGraph.js";
import tripBlurbs from "./views/tripBlurbs.js";
import initMap from "./map.js";
import {selectTripPoint} from "./views/graphPoints.js";
import {getLastGraphPoint} from "./views/graphPoints.js";

tripGraph(trips);
tripBlurbs(trips);

initMap().on('ready', function(){
  selectTripPoint(getLastGraphPoint());
})
