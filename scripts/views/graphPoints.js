import $ from "../vendor/jquery-2.1.4.min.js";
import {showSelectedBlurb} from "./tripBlurbs.js";

export default function() {
  let graphPoints = $(".graph-point__element");
  graphPoints.click((event)=>{
    let selectedGraphPoint = $(event.target);
    let selectedTripId = selectedGraphPoint.data("id");
    graphPoints.attr("fill", "white");
    selectedGraphPoint.attr("fill", "black");
    showSelectedBlurb(selectedTripId);
  });
};
