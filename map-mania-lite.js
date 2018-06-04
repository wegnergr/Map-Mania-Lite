// Notes relating to what is different in the tutorial compared to here.
// 1- renamed "Map, Map, Map" to "myMapID, gMap, map"
// 2- Modified "bounds-changed" as tutorial tells you to use it, we are using "idle"
var gMap;

// This is the InitMap and is a callback funtion that is initiated as part of the Google Maps API call at the bottom 
// of the map.mania.lite.html file.
function initMap() {
    //Create new map and put it in gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng:10}, zoom: 3});

    // Add a marker for my Home in Plainfield, IL
    var marker = new google.maps.Marker({position:{lat:41.63,lng:-88.21}, map:gMap});


     // 2nd marker with a custom icon, and info window, and a listener. It was the Badlands.
     var marker2 = new google.maps.Marker({position:{lat:43.85,lng:-102.33}, map:gMap});
     marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

     var infoWindow = new google.maps.InfoWindow({content:'The Badlands where I decided to get engaged, after riding a bike 175 miles in 105 degrees, while riding across the USA in 24 days'});
     marker2.addListener('click', function() {
         infoWindow.open(gMap, marker2);
     });


      // 3rd marker with a custom icon, and info window, and a listener. This is where we were married, and honymooned, Lake Tahoe.
      var marker3 = new google.maps.Marker({position:{lat:39.09,lng:-120.03}, map:gMap});
      marker3.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
 
      var infoWindow = new google.maps.InfoWindow({content:'Wedding and Honeymoon, 16 people flew in, Lake Tahoe!'});
      marker3.addListener('click', function() {
          infoWindow.open(gMap, marker3);
      });

      
      // NOTE: several message boards said to use "idle" instead of "bounds_changed" because
      // "bounds_changed" gets called over and over when the drags the map.
      google.maps.event.addListener(gMap, 'idle', function() {
          updateGame()
      });
}

function updateGame() {
    console.log('function UpdateGame()!');
    var zoomlevel = gMap.getZoom()
    var inBounds = false;

    // Check if my home in Plainfield is displayed in the current map.
    if (gMap.getBounds().contains({lat:41.63,lng:-88.21})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomlevel:"+zoomlevel);
}

function initApplication() {
    console.log('Map Mania Lite - is Starting!');
}