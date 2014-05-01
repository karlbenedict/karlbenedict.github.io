% The Google Maps API and OpenLayers Javascript Framework: a NMGIC Workshop
% **Karl Benedict**
  Director, Earth Data Analysis Center
  Associate Professor, College of University Libraries & Learning Sciences
  *University of New Mexico*
  kbene@unm.edu
% May 1, 2014

# Overview #

### Presentation Copy Links ###
  
* HTML Version: [http://karlbenedict.com/presentations/2014-04-NMGIC](http://karlbenedict.com/presentations/2014-04-NMGIC)
* PDF Version: [http://karlbenedict.com/presentations/2014-04-NMGIC/presentation.md.pdf](http://karlbenedict.com/presentations/2014-04-NMGIC/presentation.md.pdf)


# Google Maps API #

## Introduction ##

### Outline ###

* What is an API
* The Google Maps API
	* Version
	* Reference Information
	* Key Components
	* Examples

### What is an API ###

* API Stands for Application Programming Interface

> An Application Programming Interface (API) is a particular set of rules and specifications that a software program can follow to access and make use of the services and resources provided by another particular software program that implements that API. It serves as an interface between different software programs and facilitates their interaction, similar to the way the user interface facilitates interaction between humans and computers. -- From Wikipedia: [http://en.wikipedia.org/wiki/Api](http://en.wikipedia.org/wiki/Api)

* The Google Maps API provides an interface for interacting with Google’s mapping services from external web applications


### Google Maps API Version ###

* The version of the Google Maps API used in this session is v3 of the Javascript API
	* Freely usable for free applications
	* Subject to Google’s [Terms of Service](https://developers.google.com/maps/terms?hl=en)
	* No longer requires a Google API key, but one is [recommended for tracking usage](http://tinyurl.com/d52lcm2) 

* Key capabilities in v3
	* Interactive maps based on Google’s mapping engine (contrast w. static maps API)
	* Optimized for desktop and mobile platforms and applications


### Reference Information ###


Google Maps API Family
:	[http://code.google.com/apis/maps/](http://code.google.com/apis/maps/)

Javascript API Home Page
:	[http://code.google.com/apis/maps/documentation/javascript/](http://code.google.com/apis/maps/documentation/javascript/)

Javascript Basics Entry Page
:	[http://code.google.com/apis/maps/documentation/javascript/basics.html](http://code.google.com/apis/maps/documentation/javascript/basics.html)

Javascript API v3 Tutorial Page
:	[http://code.google.com/apis/maps/documentation/javascript/tutorial.html](http://code.google.com/apis/maps/documentation/javascript/tutorial.html)



### Key Components ###

Map [object options](http://tinyurl.com/mlsj3ar) 

Types (required)
:	ROADMAP

:	SATELLITE

:	HYBRID

:	TERRAIN

Latitude and Longitude (required)
:	specification of where the map should initially be centered

Zoom Level (required)
:	0=global, higher values increasingly local. Limited by map type



### Controls ###

* Available Controls (enabled through map options) [default controls](http://tinyurl.com/nryup5j)
	* Zoom Control
	* Pan Control
	* Scale Control
	* MapType Control
	* Street View Control
* Different control styles may be defined
* Controls may be positioned [positioning options](http://tinyurl.com/p3hc5gk)
* Custom controls may be defined and attached to fixed location in the map



### Overlays ### 

Overlay Types [documentation](http://code.google.com/apis/maps/documentation/javascript/overlays.html)


Marker
:	points depicted by specified or defined icons at locations within the map

Polyline
:	linear features defined by multiple points with a defined style for the line

Polygon
:	closed features defined by multiple points. Supports multi-polygons, and donuts. Line and fill styles may be specified.

(Ground) Overlay Maps
:	Image-based map layers that replace or overlay Google layers - registered to the map coordinates

Info Windows
:	floating content windows for displaying content defined as HTML, a DOM element, or text string

Layers
:	Grouped display content assigned to a specific layer: KmlLayer, FusionTablesLayer, TrafficLayer, BicyclingLayer

Custom Overlays
:	definition of programmatically controlled layers


### Services ###

* Geocoding Service
	* Forward and reverse geocoding: 
		* address to LatLon
		* LatLon to Nearest Address
	* May be biased to current viewport, region
* Directions
	* Based upon an origin, destination, and a variety of additional options
	* Available directions and rendered route
* Elevation
	* Delivery of elevation data for locations or paths
* Streetview
	* Integration of Google Streetview within a DOM element
* Maximum Zoom
	* Provides information about the maximum available zoom level


### Events ###

* Events provide the ability to attach custom behaviors to events in the interface. For example:
	* Changing items in the interface as the user zooms in on a map
	* Displaying additional information outside the map when the user clicks a location in the map
	* Synchronizing the behavior of multiple maps as the user interacts with one map
* Requires higher-level Javascript that we will cover here




## Examples ##


### Simple - Roadmap ###

![Simple Google `ROADMAP` Map](images/google_01.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps01.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps01.html)

~~~~~~~~~~ {#roadmap .html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
			html { height: 100% }
			body { height: 100%; 
				margin: 0px; 
				padding: 0px; 
				background-color: black; 
				color: #CCCCCC;
				text-align: center}
			#map_canvas { width:90%; 
				height:80%; 
				margin-left:auto; 
				margin-right: auto }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
			function initialize() {
			var classroom = new google.maps.LatLng(35.084280,-106.624073)
			var myOptions = {
				zoom: 8,
				center: classroom,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(
				document.getElementById("map_canvas"),
				myOptions);
			}
		</script>
	</head>

	<body onload="initialize()">
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>
	</body>
</html>
~~~~~~~~~~



### Simple - Satellite ###

![Simple Google `SATELLITE` Map](images/google_02.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps02.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps02.html)

~~~~~~~~~~ {#satellite .html .numberLines}
<!DOCTYPE html>

<html>
	<head>
		<style type="text/css">
			html { height: 100% }
			body { height: 100%; 
				margin: 0px; 
				padding: 0px; 
				background-color: black; 
				color: #CCCCCC;
				text-align: center}
			#map_canvas { width:90%; 
				height:80%; 
				margin-left: auto; 
				margin-right: auto }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
			function initialize() {
				var classroom = new google.maps.LatLng(35.084280,-106.624073)
				var myOptions = {
					zoom: 8,
					center: classroom,
					mapTypeId: google.maps.MapTypeId.SATELLITE
				};
				var map = new google.maps.Map(
					document.getElementById("map_canvas"), 
					myOptions);
			}
		</script>
	</head>
	
	<body onload="initialize()">
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>
	</body>
</html>
~~~~~~~~~~





### Simple - Hybrid ###

![Simple Google `HYBRID` Map](images/google_03.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps03.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps03.html)

~~~~~~~~~~ {#hybrid .html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
		  html { height: 100% }
		  body { height: 100%; 
			margin: 0px; 
			padding: 0px; 
			background-color: black; 
			color: #CCCCCC;
			text-align: center}
		  #map_canvas { width:90%; 
			height:80%; 
			margin-left: auto; 
			margin-right: auto }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
		  function initialize() {
			var classroom = new google.maps.LatLng(35.084280,-106.624073)
			var myOptions = {
			  zoom: 8,
			  center: classroom,
			  mapTypeId: google.maps.MapTypeId.HYBRID
			};
			var map = new google.maps.Map(
				document.getElementById("map_canvas"),
				myOptions);
		  }
		</script>
	</head>
	
	<body onload="initialize()">
	  <h1>Sample Map</h1>
	  <div id="map_canvas"></div>
	</body>

</html>
~~~~~~~~~~





### Simple - Terrain ###

![Simple Google `TERRAIN` Map](images/google_04.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps04.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps04.html)

~~~~~~~~~~ {#terrain .html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
		  html { height: 100% }
		  body { height: 100%; 
			margin: 0px; 
			padding: 0px; 
			background-color: black; 
			color: #CCCCCC;
			text-align: center}
		  #map_canvas { width:90%; 
			height:80%; 
			margin-left: auto; 
			margin-right: auto }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
		  function initialize() {
			var classroom = new google.maps.LatLng(35.084280,-106.624073)
			var myOptions = {
			  zoom: 8,
			  center: classroom,
			  mapTypeId: google.maps.MapTypeId.TERRAIN
			};
			var map = new google.maps.Map(
				document.getElementById("map_canvas"),
				myOptions);
		  }
		</script>
	</head>
	
	<body onload="initialize()">
	  <h1>Sample Map</h1>
	  <div id="map_canvas"></div>
	</body>

</html>
~~~~~~~~~~



### Simple - Hybrid - Zoomed ###

![Simple Google `HTBRID` zoomed Map](images/google_05.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps05.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps05.html)


~~~~~~~~~~ {#hybridZoomed .html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
		  html { height: 100% }
		  body { height: 100%; 
			margin: 0px; 
			padding: 0px; 
			background-color: black; 
			color: #CCCCCC;
			text-align: center}
		  #map_canvas { width:90%; 
			height:80%; 
			margin-left: auto; 
			margin-right: auto }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
		  function initialize() {
			var classroom = new google.maps.LatLng(35.084280,-106.624073)
			var myOptions = {
			  zoom: 18,
			  center: classroom,
			  mapTypeId: google.maps.MapTypeId.HYBRID
			};
			var map = new google.maps.Map(
				document.getElementById("map_canvas"),
				myOptions);
		  }
		</script>
	</head>
	
	<body onload="initialize()">
	  <h1>Sample Map</h1>
	  <div id="map_canvas"></div>
	</body>

</html>
~~~~~~~~~~




### Simple - Zoomed - Modified Controls ###

![Simple Google `HYBRID` zoomed Map with modified controls](images/google_06.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps06.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps06.html)


~~~~~~~~~~ {#hybridZoomedControls .html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
		  html { height: 100% }
		  body { height: 100%; 
			margin: 0px; 
			padding: 0px; 
			background-color: black; 
			color: #CCCCCC;
			text-align: center}
		  #map_canvas { width:90%; 
			height:80%; 
			margin-left: auto; 
			margin-right: auto }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
		  function initialize() {
			var classroom = new google.maps.LatLng(35.084280,-106.624073)
			var myOptions = {
			  zoom: 18,
			  center: classroom,
			  mapTypeId: google.maps.MapTypeId.HYBRID,
			  zoomControl: true,
			  zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
			  mapTypeControl: true,
			  mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
			  streetViewControl: false
			};
			var map = new google.maps.Map(
				document.getElementById("map_canvas"),
				myOptions);
		  }
		</script>
	</head>

	<body onload="initialize()">
	  <h1>Sample Map</h1>
	  <div id="map_canvas"></div>
	</body>

</html>
~~~~~~~~~~



### Markers ###

![Simple Google `HYBRID` zoomed Map with markers](images/google_07.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps07.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps07.html)


~~~~~~~~~~ {#markers .html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
		  html { height: 100% }
		  body { height: 100%; 
			margin: 0px; 
			padding: 0px; 
			background-color: black; 
			color: #CCCCCC;
			text-align: center}
		  #map_canvas { width:90%; 
			height:80%; 
			margin-left: auto; 
			margin-right: auto }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
		  function initialize() {
			var classroom = new google.maps.LatLng(35.084280,-106.624073)
			var office = new google.maps.LatLng(35.084506,-106.624899)
			var myOptions = {
			  zoom: 18,
			  center: classroom,
			  mapTypeId: google.maps.MapTypeId.HYBRID
			  };
			var map = new google.maps.Map(
			  document.getElementById("map_canvas"), 
			  myOptions);
			
			var classroomMarker = new google.maps.Marker({
			  position: classroom,
			  title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
			  });
			classroomMarker.setMap(map);
			
			var officeMarker = new google.maps.Marker({
			  position: office,
			  title:"Office, Bandelier West, Room 107"
			  });
			officeMarker.setMap(map); 
		  }
		</script>
	</head>
	
	<body onload="initialize()">
	  <h1>Sample Map</h1>
	  <div id="map_canvas"></div>
	</body>

</html>
~~~~~~~~~~





### Polyline ###

![Simple Google `HYBRID` zoomed Map with markers and a polyline](images/google_08.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps08.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps08.html)


~~~~~~~~~~ {#polyline .html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
		  html { height: 100% }
		  body { height: 100%; 
			margin: 0px; 
			padding: 0px; 
			background-color: black; 
			color: #CCCCCC;
			text-align: center}
		  #map_canvas { width:90%; 
			height:80%; 
			margin-left: 
			auto; 
			margin-right: auto }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
		  function initialize() {
			var classroom = new google.maps.LatLng(35.084280,-106.624073)
			var office = new google.maps.LatLng(35.084506,-106.624899)
			var myOptions = {
			  zoom: 18,
			  center: classroom,
			  mapTypeId: google.maps.MapTypeId.HYBRID
			  };
			var map = new google.maps.Map(
			  document.getElementById("map_canvas"), 
			  myOptions);
		
			var classroomMarker = new google.maps.Marker({
			  position: classroom,
			  title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
			  });
			classroomMarker.setMap(map);
		
			var officeMarker = new google.maps.Marker({
			  position: office,
			  title:"Office, Bandelier West, Room 107"
			  });
			officeMarker.setMap(map); 
		
			var officeVisitCoordinates = [
			  office,
			  new google.maps.LatLng(35.084445,-106.624327),
			  new google.maps.LatLng(35.084309,-106.624308),
			  classroom
			  ];
			var officePath = new google.maps.Polyline({
			  path: officeVisitCoordinates,
			  strokeColor: "#FF0000",
			  strokeOpacity: 1.0,
			  strokeWeight: 2
			});
			officePath.setMap(map)
		  }
		</script>
	</head>

	<body onload="initialize()">
	  <h1>Sample Map</h1>
	  <div id="map_canvas"></div>
	</body>

</html>
~~~~~~~~~~





### Polygon ###

![Simple Google `HYBRID` zoomed Map with markers and a polygon](images/google_09.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps09.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps09.html)


~~~~~~~~~~ {#polygon .html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
		  html { height: 100% }
		  body { height: 100%; 
			margin: 0px; 
			padding: 0px; 
			background-color: black; 
			color: #CCCCCC;
			text-align: center}
		  #map_canvas { width:90%; 
			height:80%; 
			margin-left: auto; 
			margin-right: auto }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
		  function initialize() {
			var classroom = new google.maps.LatLng(35.084280,-106.624073)
			var office = new google.maps.LatLng(35.084506,-106.624899)
			var myOptions = {
			  zoom: 18,
			  center: classroom,
			  mapTypeId: google.maps.MapTypeId.HYBRID
			  };
			var map = new google.maps.Map(
			  document.getElementById("map_canvas"), 
			  myOptions);
			var classroomMarker = new google.maps.Marker({
			  position: classroom,
			  title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
			  });
			classroomMarker.setMap(map);
			var officeMarker = new google.maps.Marker({
			  position: office,
			  title:"Office, Bandelier West, Room 107"
			  });
			officeMarker.setMap(map); 
			var buildingCoordinates = [
			  new google.maps.LatLng(35.084498,-106.624921),
			  new google.maps.LatLng(35.084558,-106.624911),
			  new google.maps.LatLng(35.084566,-106.624970),
			  new google.maps.LatLng(35.084609,-106.624966),
			  new google.maps.LatLng(35.084544,-106.624383),
			  new google.maps.LatLng(35.084438,-106.624317),
			  new google.maps.LatLng(35.084384,-106.623922),
			  new google.maps.LatLng(35.084164,-106.623970),
			  new google.maps.LatLng(35.084214,-106.624324),
			  new google.maps.LatLng(35.084214,-106.624324),
			  new google.maps.LatLng(35.084391,-106.624284)
			  ];
			var bldgPoly = new google.maps.Polygon({
			  paths: buildingCoordinates,
			  strokeColor: "#FF0000",
			  strokeOpacity: 0.8,
			  strokeWeight: 2,
			  fillColor: "#FF0000",
			  fillOpacity: 0.35
			});
			bldgPoly.setMap(map)
		  }
		</script>
	</head>
	
	<body onload="initialize()">
	  <h1>Sample Map</h1>
	  <div id="map_canvas"></div>
	</body>

</html>
~~~~~~~~~~





### Adding an Info Window ###

![Simple Google `HYBRID` zoomed Map with markers, a polygon and an Info Window](images/google_10.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps10.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps10.html)


~~~~~~~~~~ {#infoWindow .html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
		  html { height: 100% }
		  body { height: 100%; 
			margin: 0px; 
			padding: 0px; 
			background-color: black; 
			color: #CCCCCC;
			text-align: center}
		  #map_canvas { width:90%; 
			height:80%; 
			margin-left: auto; 
			margin-right: auto }
		  .infoBox { color:black }
		</style>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false">
		</script>
		<script type="text/javascript">
		  function initialize() {
			var classroom = new google.maps.LatLng(35.084280,-106.624073)
			var office = new google.maps.LatLng(35.084506,-106.624899)
			var myOptions = {
			  zoom: 18,
			  center: classroom,
			  mapTypeId: google.maps.MapTypeId.HYBRID
			  };
			var map = new google.maps.Map(
			  document.getElementById("map_canvas"), 
			  myOptions);
			var classroomMarker = new google.maps.Marker({
			  position: classroom,
			  title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
			  });
			classroomMarker.setMap(map);
			var officeMarker = new google.maps.Marker({
			  position: office,
			  title:"Office, Bandelier West, Room 107"
			  });
			officeMarker.setMap(map); 
			var buildingCoordinates = [
			  new google.maps.LatLng(35.084498,-106.624921),
			  new google.maps.LatLng(35.084558,-106.624911),
			  new google.maps.LatLng(35.084566,-106.624970),
			  new google.maps.LatLng(35.084609,-106.624966),
			  new google.maps.LatLng(35.084544,-106.624383),
			  new google.maps.LatLng(35.084438,-106.624317),
			  new google.maps.LatLng(35.084384,-106.623922),
			  new google.maps.LatLng(35.084164,-106.623970),
			  new google.maps.LatLng(35.084214,-106.624324),
			  new google.maps.LatLng(35.084214,-106.624324),
			  new google.maps.LatLng(35.084391,-106.624284)
			  ];
			var bldgPoly = new google.maps.Polygon({
			  paths: buildingCoordinates,
			  strokeColor: "#FF0000",
			  strokeOpacity: 0.8,
			  strokeWeight: 2,
			  fillColor: "#FF0000",
			  fillOpacity: 0.35
			});
			bldgPoly.setMap(map);
			var classInfoContent = '<div class="infoBox">' +
			  '<p>This is the location for the Geography 485L/585L class</p>' +
			  '</div>'
			var classInfoWindow = new google.maps.InfoWindow({
			  content: classInfoContent
			  });
			google.maps.event.addListener(classroomMarker, 'click', function() {
			  classInfoWindow.open(map,classroomMarker);
			  });
		  }
		</script>
	</head>
	
	<body onload="initialize()">
	  <h1>Sample Map</h1>
	  <div id="map_canvas"></div>
	</body>

</html>
~~~~~~~~~~



### *Getting Started with Styled Maps* - Video ###

[Styled Maps Documentation](https://developers.google.com/maps/documentation/javascript/styling) | [Styled Maps Wizard](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html) | [YouTube Introductory Video](http://youtu.be/0hhiEjf7_NA)

![Google Maps Styled Maps Wizard](./images/styledMapsWizard.png)\  


### Map Example: Simple - Styled ###

![Styled Google `ROADMAP` with POIs emphasized](images/google_11.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps_styled.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/gmaps_styled.html)

~~~~~~~~~~ {#styledMap .html .numberLines}
<!DOCTYPE html>
<html>
<head>
<style type="text/css">
  html { height: 100% }
  body { height: 100%; 
	margin: 0px; 
	padding: 0px; 
	background-color: black; 
	color: #CCCCCC;
	text-align: center}
  #map_canvas { width:90%; 
	height:80%; 
	margin-left: 
	auto; 
	margin-right: auto }
</style>
<script type="text/javascript"
	src="http://maps.google.com/maps/api/js?v=3.2&sensor=false">
</script>
<script type="text/javascript">
  function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var myOptions = {
	  zoom: 8,
	  center: classroom,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  styles: [
			  {
				featureType: "water",
				stylers: [
				  { visibility: "on" },
				  { hue: "#0008ff" }
				]
			  },{
				featureType: "road.highway",
				stylers: [
				  { hue: "#ff1a00" }
				]
			  },{
				featureType: "road.arterial",
				stylers: [
				  { hue: "#ffa200" },
				  { visibility: "simplified" }
				]
			  },{
				featureType: "road.local",
				stylers: [
				  { visibility: "off" }
				]
			  },{
				featureType: "administrative",
				stylers: [
				  { visibility: "simplified" }
				]
			  },{
				featureType: "poi",
				stylers: [
				  { visibility: "on" },
				  { hue: "#00ffff" }
				]
			  },{
				featureType: "poi",
				stylers: [
				  { visibility: "on" }
				]
			  }
			]
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),
		myOptions);
  }
</script>
</head>

<body onload="initialize()">
  <h1>Sample Map - Styled (POIs Emphasized)</h1>
  <div id="map_canvas"></div>
</body>

</html>
~~~~~~~~~~





### *Google I/O 2011: Managing and visualizing your geospatial data with Fusion Tables* - Video ###

[Fusion Tables Introduction Video](http://youtu.be/Z2o0mtnF1Bg) - Some particularly relevant sections: [Introduction (0:00 - 10:30)](http://youtu.be/Z2o0mtnF1Bg) | [Google Maps API Integration (21:40 - 34:42)](http://youtu.be/Z2o0mtnF1Bg?t=21m40s) | [Summary and Links (52:00 - 52:40)](http://youtu.be/Z2o0mtnF1Bg?t=52m)

[Fusion Tables Documentation/Help](http://tinyurl.com/nxlgcwq)

![Google Fusion Tables Introduction Video](./images/fusionTablesVideo.png)\ 

### Bringing It All Together ###

![NAWRS Mapper](images/nawrs.jpg)\ 

[http://karlbenedict.com/nawrs/](http://karlbenedict.com/nawrs/)

Fusion Tables: [Merged document info](http://tinyurl.com/npx2q6g), [State bounding boxes](http://tinyurl.com/qyy4kew), [HUC bounding boxes](http://tinyurl.com/or5xuxc)

~~~~~~~~~~ {#complexMap .html .numberLines}
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="styles.css">

<script type="text/javascript" 
	src="http://maps.google.com/maps/api/js?v=3.2&sensor=false"></script>
<script type="text/javascript" 
	src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script type="text/javascript" src="http://www.google.com/jsapi"></script>
<script type="text/javascript" charset="utf-8" src="./core.js"></script>

<!-- DataTables and DataTables CSS -->
<link rel="stylesheet" type="text/css" 
  href="http://kkb-projects.s3.amazonaws.com/nawrs/js/DataTables-1.9.4/
  media/css/jquery.dataTables.css">
<link rel="stylesheet" type="text/css" 
  href="http://kkb-projects.s3.amazonaws.com/nawrs/js/DataTables-1.9.4/extras/TableTools/
  media/css/TableTools.css">
<script type="text/javascript" charset="utf8" 
  src="http://kkb-projects.s3.amazonaws.com/nawrs/js/DataTables-1.9.4/media/js/
  jquery.dataTables.min.js"></script>
<script type="text/javascript" charset="utf8" 
  src="http://kkb-projects.s3.amazonaws.com/nawrs/js/DataTables-1.9.4/extras/TableTools/media/js/
  TableTools.min.js"></script>

</head>

<body onload="initialize()">
  <h1>NAWRS Mapper</h1>
  <div id="docsReservations">Reservations with Documents</div>
  <div id="docsReservationsPopUp"><ul id="docsReservationsList"></ul></div>
  <div id="docsStates">States with Documents</div>
  <div id="docsStatesPopUp"><ul id="docsStatesList"></ul></div>
  <div id="docsHucs">Hydrologic Regions with Documents</div>
  <div id="docsHucsPopUp"><ul id="docsHucsList"></ul></div>
  <div id="docsType">Documents by Type</div>
  <div id="docsTypePopUp"><ul id="docsTypeList"></ul></div>
  <div id="map_canvas"></div>
  <div id="docListHandle">Document List</div>
  <div id="docList">
  	<table id="docListTable">
  </table>
  </div>
  
</body>

</html>
~~~~~~~~~~



# OpenLayers Javascript Framework#


### Outline ###

* Capabilities

* OpenLayers = Javascript (by example)


### OpenLayers Capabilities ###

* Support for Multiple basemaps: _Google_, _Yahoo_, _Bing_, _OpenStreetMap_
* Model for interaction with multiple map server platforms: _ArcGIS_ (REST & cache), _ArcIMS_, _KaMap_, _MapServer_
* Support for key OGC standards: _WMS_, _WMTS_, _WFS_, _GML_, _KML_, _SLD_
* Multiple control types: _Navigation_, _Pan_, _Zoom_, _Overview_, _Scale_, _Feature Creation & Editing_, _Graticle_, _Layer Switcher_
* Custom styled features with associated attributes: _Curve_, _LinearRing_, _LineString_, _MultiLineString_, _MultiPoint_, _MultiPolygon_, _Point_, _Polygon_, _Rectangle_
* Support for many formats for data read and write: _ArcXML_, _ATOM_, _GeoRSS_, _GPX_, _KML_, _WKT_, any many others
* Open Source, enabling modification and integration into other systems (e.g. [GeoExt](http://geoext.org/))


### Distinguishing Characteristics Between OpenLayers and Google Maps ###

* Greater emphasis on client-side processing - Client access and rendering of data files that Google's servers otherwise take care of (pros & cons to this approach)
* Integrated support for OGC services and their products
* Support for different projections (adds complexity)
* API more rich in options ==> more complexity


### Resources ###

[OpenLayers Home Page](http://openlayers.org/)

[Application Programming Interface (API) Reference](http://dev.openlayers.org/apidocs/files/OpenLayers-js.html)

[Examples](http://openlayers.org/dev/examples/)

### Demonstrations and Examples ###

![Basic OpenLayers map using OpenStreetMap basemap](images/OpenLayers_01.jpg)\ 


* [Basic Mapper](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers01_osm.html) (with OpenStreetMaps [OSM] base map)

~~~~~~~~~~ {#OpenLayers_01_demo .html .numberLines}
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <script type="text/javascript" src="http://openlayers.org/api/OpenLayers.js"></script>
    <script type="text/javascript">        
        // define global variables
        var lon = -106.5;
        var lat = 36;
        var zoom = 3;
        var map;
        var layer;

        // =============== Initialization function ===================
        function init(){
            map = new OpenLayers.Map( 'map' );
            
			// =========== OSM Map ====================
            layer = new OpenLayers.Layer.OSM( "Open Street Map");
            map.addLayer(layer);
			
			map.setCenter(
                new OpenLayers.LonLat(lon, lat).transform(
                    new OpenLayers.Projection("EPSG:4326"),
                    map.getProjectionObject()
                ), zoom
            );                
        }
        // =============== End of Initialization Function ============
        
	</script>
	<style type="text/css">
		#map {width:90%; height:500px}
	</style>
  </head>
  <body onload="init()">
    <h1>Basic OpenLayers Map</h1>
    <p>Shows the basic use of OpenLayers with the 
    <a href="http://www.openstreetmap.org/">OpenStreetmap</a> basemap</p>	
	<!-- Map DIV -->
	<div id="map"></div>	
  </body>
</html>
~~~~~~~~~~


### Demonstration and Examples - Online Resources ###
* [Mapper](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers02_proprietary.html) with a variety of base maps (Google, Bing, Yahoo, OSM)
* Basic Mapper with Controls: [No Controls](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers03_none.html), [Layer Switcher](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers03_layerSwitcher.html), [Control Array](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers03_controlArray.html), [Overlay Map](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers03_Overlay.html), [Scale Information](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers03_Scale.html)
* Positioning Controls with the `moveTo` function: [two controls moved](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers04_MovedControls.html)



### Map Object Options ###

Map Object Options [API Reference](http://dev.openlayers.org/releases/OpenLayers-2.13/doc/apidocs/files/OpenLayers/Map-js.html)

Two methods for constructing a new `OpenLayers.Map` object

~~~~~~~~~~  {#OpenLayers_02_Map_options .html .numberLines}
	// create a map with default options in an element with the id "map1"
	var map = new OpenLayers.Map("map1");
	
	// create a map with non-default options in an element with id "map2"
	var options = {
		maxExtent: new OpenLayers.Bounds(-200000, -200000, 200000, 200000),
		maxResolution: 156543,
		units: 'm',
		projection: "EPSG:41001"
	};
	var map = new OpenLayers.Map("map2", options);
	
	// map with non-default options - same as above but with a single argument
	var map = new OpenLayers.Map({
		div: "map_id",
		maxExtent: new OpenLayers.Bounds(-200000, -200000, 200000, 200000),
		maxResolution: 156543,
		units: 'm',
		projection: "EPSG:41001"
	});
~~~~~~~~~~	


Excerpts from the API documentation

`allOverlays`
:	{Boolean} Allow the map to function with “overlays” only.  Defaults to false.  If true, the lowest layer in the draw order will act as the base layer.  In addition, if set to true, all layers will have isBaseLayer set to false when they are added to the map.

`div`
:	{DOMElement|String} The element that contains the map (or an id for that element).  If the OpenLayers.Map constructor is called with two arguments, this should be provided as the first argument.  Alternatively, the map constructor can be called with the options object as the only argument.  In this case (one argument), a div property may or may not be provided.  If the div property is not provided, the map can be rendered to a container later using the render method.

`layers`
:	{Array(OpenLayers.Layer)} Ordered list of layers in the map

`tileSize`
:	{OpenLayers.Size} Set in the map options to override the default tile size for this map.

`projection`
:	{String} Set in the map options to override the default projection string this map - also set `maxExtent`, `maxResolution`, and `units` if appropriate.  Default is "EPSG:4326".

`units`
:	{String} The map units.  Defaults to 'degrees'.  Possible values are 'degrees' (or 'dd'), 'm', 'ft', 'km', 'mi', 'inches'.

`resolutions`
:	{Array(Float)} A list of map resolutions (map units per pixel) in descending order.  If this is not set in the layer constructor, it will be set based on other resolution related properties (maxExtent, maxResolution, maxScale, etc.).

`maxResolution`
:	{Float} Default max is 360 deg / 256 px, which corresponds to zoom level 0 on gmaps.  Specify a different value in the map options if you are not using a geographic projection and displaying the whole world.

`minResolution`
:	{Float}

`maxScale`
:	{Float}

`minScale`
:	{Float}

`maxExtent`
:	{OpenLayers.Bounds} The maximum extent for the map.  Defaults to the whole world in decimal degrees (-180, -90, 180, 90).  Specify a different extent in the map options if you are not using a geographic projection and displaying the whole world.

`minExtent`
:	{OpenLayers.Bounds}

`restrictedExtent`
:	{OpenLayers.Bounds} Limit map navigation to this extent where possible.  If a non-null restrictedExtent is set, panning will be restricted to the given bounds.  In addition, zooming to a resolution that displays more than the restricted extent will center the map on the restricted extent.  If you wish to limit the zoom level or resolution, use maxResolution.

`numZoomLevels`
:	{Integer} Number of zoom levels for the map.  Defaults to 16.  Set a different value in the map options if needed.


### Layer Object Options ###

Layer Object Options [API Reference](http://dev.openlayers.org/releases/OpenLayers-2.13/doc/apidocs/files/OpenLayers/Layer-js.html)

Common Pattern of Layer Object Creation (varies some depending upon the specific layer type)

~~~~~~~~~~  {#OpenLayers_02_Layer_options .html .numberLines}
	new OpenLayers.Layer.*** (
		'layer name',
		'layer URL',
		{server-related options}, 
		{OpenLayers Layer Object options}
	)
~~~~~~~~~~  

`id`
:	{String}

`name`
:	{String}

`isBaseLayer`
:	{Boolean} Whether or not the layer is a base layer.  This should be set individually by all subclasses.  Default is false

`displayInLayerSwitcher`
:	{Boolean} Display the layer’s name in the layer switcher.  Default is true.

`visibility`
:	{Boolean} The layer should be displayed in the map.  Default is true.

`attribution`
:	{String} Attribution string, displayed when an OpenLayers.Control.Attribution has been added to the map.

`projection`
:	{OpenLayers.Projection} or {String} Set in the layer options to override the default projection string this layer - also set maxExtent, maxResolution, and units if appropriate.  Can be either a string or an OpenLayers.Projection object when created -- will be converted to an object when setMap is called if a string is passed.

`units`
:	{String} The layer map units.  Defaults to 'degrees'.  Possible values are 'degrees'’ (or 'dd'), 'm', 'ft', 'km', 'mi', 'inches'.

`scales`
:	{Array} An array of map scales in descending order.  The values in the array correspond to the map scale denominator.  Note that these values only make sense if the display (monitor) resolution of the client is correctly guessed by whomever is configuring the application.  In addition, the units property must also be set.  Use resolutions instead wherever possible.


`resolutions`
:	{Array} A list of map resolutions (map units per pixel) in descending order.  If this is not set in the layer constructor, it will be set based on other resolution related properties (maxExtent, maxResolution, maxScale, etc.).

`maxExtent`
:	{OpenLayers.Bounds} The center of these bounds will not stray outside of the viewport extent during panning.  In addition, if displayOutsideMaxExtent is set to false, data will not be requested that falls completely outside of these bounds.

`minExtent`
:	{OpenLayers.Bounds}

`maxResolution`
:	{Float} Default max is 360 deg / 256 px, which corresponds to zoom level 0 on gmaps.  Specify a different value in the layer options if you are not using a geographic projection and displaying the whole world.

`minResolution`
:	{Float}

`numZoomLevels`
:	{Integer}

`minScale`
:	{Float}

`maxScale`
:	{Float}

`displayOutsideMaxExtent`
:	{Boolean} Request map tiles that are completely outside of the max extent for this layer.  Defaults to false.

`transitionEffect`
:	{String} The transition effect to use when the map is panned or zoomed.

There are currently two supported values

:	`null` No transition effect (the default).

:	`resize` Existing tiles are resized on zoom to provide a visual effect of the zoom having taken place immediately.  As the new tiles become available, they are drawn over top of the resized tiles.


### Additional Map and Layer Object Functions & Events ###

Both Map and Layer Objects have a number of associated functions as well

* Retrieving object properties programmatically with `Get` functions.
* Modifying existing object properties with `Set` functions
* Map destruction, and reconfiguration
* Linkage of object events with Javascript functions


### WMS Layer Configuration ###

Some key issues to be aware of when using the [WMS Layer Class](http://dev.openlayers.org/releases/OpenLayers-2.13/doc/apidocs/files/OpenLayers/Layer/WMS-js.html):

* The _projection_ of the map object must be supported by the included WMS service (review the WMS GetCapabilities response to see what projections are supported by the service)
* The _layers_ parameter/property must be provided as part of the server-related property list (the layer names also come from the GetCapabilities response)
* Other WMS parameters may be provided as well to "adjust" the request automatically generated by OpenLayers

Sample WMS Layer Object Creation

![OpenLayers map with multiple OGC WMS layers](images/OpenLayers_02.jpg)\ 


[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers10_wms01.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers10_wms01.html)

~~~~~~~~~~  {#OpenLayers_02_WmsLayer_options .html .numberLines}
    countiesLayer = new OpenLayers.Layer.WMS( 
        "US Counties", 
        "http://webservices.nationalatlas.gov/wms?",
        {layers: "counties", version: '1.3.0', transparent: 'TRUE'},
        {isBaseLayer: false, visibility: false, opacity: .8}
    );
    map.addLayer(countiesLayer);
~~~~~~~~~~



### Vector Layer Configuration ###

Vector layers support

* External Data in a Variety of supported [formats](http://dev.openlayers.org/releases/OpenLayers-2.13/doc/apidocs/files/OpenLayers/Format-js.html) for both _reading_ and _writing_ (just a sample): ArcXML.Features, GeoJSON, GeoRSS, GPX, JSON, KML, WFS, WKT
* Directly encoded [geometries][OpenLayers.Geometry API Link]: Collection, Curve, LinearRing, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon, Rectangle 
* User created features, including support for interactive editing of features
* [Styling](http://dev.openlayers.org/releases/OpenLayers-2.13/doc/apidocs/files/OpenLayers/Feature/Vector-js.html#OpenLayers.Feature.Vector.style) of Vector features


Vector Layer Objects are Typically Defined using three OpenLayers classes

`Protocol`
:	Connection protocol for requesting the data that would be provided from an external source

`Format`
:	The OpenLayers supported format of the vector data object

`Strategy`
:	A specification of how OpenLayers should request the data from the server, and also handle the data within the client (browser). 


![OpenLayers map with multiple OGC WMS layers, vector overlays and KML layers](images/OpenLayers_03.jpg)\ 

[http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers11_vectorData_KML.html](http://karlbenedict.com/presentations/2014-04-NMGIC/examples/openLayers11_vectorData_KML.html)

Sample Point Feature Object creation


~~~~~~~~~~  {#OpenLayers_02_VectorLayer_options01 .html .numberLines}
	var Coord_classroom = new OpenLayers.Geometry.Point(-106.624073,35.084280);
	var Point_classroom = new OpenLayers.Feature.Vector(Coord_classroom);
	Layers["localFeatures"].addFeatures([Point_classroom])
~~~~~~~~~~

Sample KML Layer Object creation 

~~~~~~~~~~  {#OpenLayers_02_KMLayer_options01 .html .numberLines}
	Layers.counties = new OpenLayers.Layer.Vector("KML - Counties", {
     	projection: map.displayProjection,
		strategies: [new OpenLayers.Strategy.Fixed()],
		protocol: new OpenLayers.Protocol.HTTP({
			url: "NMCounties.kml",
			format: new OpenLayers.Format.KML({
				extractAttributes: true
			})
		})
	});
	map.addLayer(Layers.counties)
~~~~~~~~~~
		
# Questions? #

### License Information ###

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="height:30px; border-width:0" src="http://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">NMGIC Spring 2014 - Google Maps & OpenLayers Workshop</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://karlbenedict.com/presentations/2014-04-NMGIC/index.html" property="cc:attributionName" rel="cc:attributionURL">Karl Benedict</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50555934-1', 'karlbenedict.com');
  ga('send', 'pageview');

</script>