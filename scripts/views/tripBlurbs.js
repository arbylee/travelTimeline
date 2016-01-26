import renderTemplate from "./renderTemplate.js";
import $ from "../vendor/jquery-2.1.4.min.js";

export default function(trips){
  let data = {trips: trips};
  renderTemplate("trip-blurbs", data);
}

export function showSelectedBlurb(tripId){
  $('.blurb__element').removeClass('-active');
  $(`.blurb__element[data-id="${tripId}"]`).addClass('-active');
};

