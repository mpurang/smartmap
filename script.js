require([
	"esri/Map",
	"esri/views/SceneView",
	"esri/widgets/Search",
	"esri/widgets/Track"
], function(Map, SceneView, Search, Track){
	
// Code to create the map and view will go here
var map = new Map({
	basemap: "topo",
	ground: "world-elevation"
});

var view = new SceneView({
    scale: 123456789,
    container: "viewDiv",  // Reference to the DOM node that will contain the view
    map: map  // References the map object created in step 3
});

// Create an instance of the Search widget
var searchWidget = new Search({
    view: view
});

// Add the search widget to the top right corner of the view
view.ui.add(searchWidget, {
    position: "top-right"
});

// Create an instance of the Track widget and add it to the view's UI
var track = new Track({
    view: view
});

view.ui.add(track, {
    position: "top-left"
});

// The sample will start tracking your location once the view becomes ready
view.when(function() {
track.start();
});

});