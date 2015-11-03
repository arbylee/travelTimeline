var source   = $("#test").html();
var template = Handlebars.compile(source);
var html = template({content: "asdf", trips: [{x: '50'}, {x: '100'}, {x: '150'}]})
$('#placeholder').html(html)
