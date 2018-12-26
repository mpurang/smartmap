require([
	"esri/Map",
	"esri/views/SceneView",
	"esri/widgets/Search",
], function(Map, SceneView, Search){
	
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

});