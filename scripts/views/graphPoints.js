import $ from "../vendor/jquery-2.1.4.min.js";
import {showSelectedBlurb} from "./tripBlurbs.js";
import {highlightTripMarker} from "./tripGraph.js";
import getMap from "../map.js"
import MARKERS from '../markers.js'

export default function() {
  let graphPoints = getGraphPoints();
  graphPoints.click((event)=>{
    let selectedGraphPoint = $(event.target);
    selectTripPoint(selectedGraphPoint);
  });
};

export function getGraphPoints() {
  return $(".graph-point__element");
}

export function getLastGraphPoint() {
  return $(".graph-point__element:last");
}

export function getCoordinates(element) {
  let stringCoordinates = $(element).data('coordinates');
  return stringCoordinates.split(",");
}

export function selectTripPoint(element) {
  let graphPoints = getGraphPoints();
  let selectedTripId = element.data("id");
  graphPoints.attr("fill", MARKERS.defaultColor);
  element.attr("fill", MARKERS.highlightColor);
  showSelectedBlurb(selectedTripId);
  highlightTripMarker(selectedTripId);
  getMap().panTo(getCoordinates(element));
}
