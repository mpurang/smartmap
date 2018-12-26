require([
  "esri/Map",
  "esri/views/SceneView"
], function(Map, SceneView){
  var map = new Map({
    basemap: "streets",
    ground: "world-elevation"
  });
  var view = new SceneView({
    container: "viewDiv",     // Reference to the scene div created in step 5
    map: map,                 // Reference to the map object created before the scene
    scale: 50000000,          // Sets the initial scale to 1:50,000,000
    center: [-101.17, 21.78]  // Sets the center point of view with lon/lat
  });
});