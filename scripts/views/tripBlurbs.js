import renderTemplate from "./renderTemplate.js";

export default function(trips){
  let data = {trips: trips};
  renderTemplate("trip-blurbs", data);
}
