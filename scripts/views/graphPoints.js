import $ from "../vendor/jquery-2.1.4.min.js";
import {showSelectedBlurb} from "./tripBlurbs.js";

export default function() {
  $(".graph-point__element").click((event)=>{
    let selectedTripId = $(event.target).data("id");
    showSelectedBlurb(selectedTripId);
  });
};
