var source   = $("#trip-graph-template").html();
var template = Handlebars.compile(source);
var trips = [
  {location: 'Chicago', date: 'November 11, 2015', description: "Migas master cleanse butcher, tousled stumptown scenester lomo synth brunch twee ethical craft beer try-hard squid actually. Retro brunch freegan, listicle austin swag actually distillery. Meditation roof party godard put a bird on it. Seitan pour-over church-key, selvage vegan mixtape fixie cold-pressed wolf synth farm-to-table kinfolk kickstarter. Fingerstache iPhone distillery meggings, street art drinking vinegar forage single-origin coffee direct trade echo park. Health goth chia ramps seitan 90's, cornhole hella. Retro viral waistcoat iPhone keffiyeh narwhal."},
  {location: 'Goa', date: 'November 15, 2015', description: "Migas master cleanse butcher, tousled stumptown scenester lomo synth brunch twee ethical craft beer try-hard squid actually. Retro brunch freegan, listicle austin swag actually distillery. Meditation roof party godard put a bird on it. Seitan pour-over church-key, selvage vegan mixtape fixie cold-pressed wolf synth farm-to-table kinfolk kickstarter. Fingerstache iPhone distillery meggings, street art drinking vinegar forage single-origin coffee direct trade echo park. Health goth chia ramps seitan 90's, cornhole hella. Retro viral waistcoat iPhone keffiyeh narwhal."},
  {location: 'Melbourne', date: 'December 31, 2015', description: "Migas master cleanse butcher, tousled stumptown scenester lomo synth brunch twee ethical craft beer try-hard squid actually. Retro brunch freegan, listicle austin swag actually distillery. Meditation roof party godard put a bird on it. Seitan pour-over church-key, selvage vegan mixtape fixie cold-pressed wolf synth farm-to-table kinfolk kickstarter. Fingerstache iPhone distillery meggings, street art drinking vinegar forage single-origin coffee direct trade echo park. Health goth chia ramps seitan 90's, cornhole hella. Retro viral waistcoat iPhone keffiyeh narwhal."}
];

var spaceBetween = 100;
var startingX = 50;
var radius = 40;
_.each(trips, function(trip, index){
  trip.x = startingX + (index * spaceBetween);
  trip.radius = 40;
});
var totalTripLength = startingX + spaceBetween * (trips.length-1);

var html = template({trips: trips, totalTripLength: totalTripLength});
$('#trip-graph').html(html)
