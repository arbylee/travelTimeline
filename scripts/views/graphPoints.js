import $ from "../vendor/jquery-2.1.4.min.js";
import {showSelectedBlurb} from "./tripBlurbs.js";
import {highlightTripMarker} from "./tripGraph.js";

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

export function getFirstGraphPoint() {
  return $(".graph-point__element:first");
}

export function selectTripPoint(element) {
  let graphPoints = getGraphPoints();
  let selectedTripId = element.data("id");
  graphPoints.attr("fill", "white");
  element.attr("fill", "black");
  showSelectedBlurb(selectedTripId);
  highlightTripMarker(selectedTripId);
}
