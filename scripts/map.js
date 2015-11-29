const MAP_OPTIONS = {
  zoomControl: false,
  tileLayer: {
    continuousWorld: false,
    noWrap: true
  }
}

export default function(){
  L.mapbox.accessToken = 'pk.eyJ1IjoiYXJieWxlZSIsImEiOiJjaWdoZ2xjZWM4M2lmdjhtN3g2NzQxcncyIn0.Ru65y4i-50cxaM7_UA-D_w';
  let map = L.mapbox.map('map', 'arbylee.oa107lhc', MAP_OPTIONS).setView([25, 0], 2);

  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  if (map.tap) map.tap.disable();
}

