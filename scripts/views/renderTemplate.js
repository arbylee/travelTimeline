import Handlebars from "../vendor/handlebars-v4.0.4.js";
import $ from "../vendor/jquery-2.1.4.min.js";

export default function(templateName, data){
  let source   = $(`#${templateName}__template`).html();
  let template = Handlebars.compile(source);
  let html = template(data);
  $(`#${templateName}__view`).html(html)
}
