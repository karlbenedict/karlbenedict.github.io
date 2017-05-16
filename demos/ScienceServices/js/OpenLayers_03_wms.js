// OpenLayers_03_wms.js

var projection = ol.proj.get('EPSG:4326');

///////////////////////////////////////////////////////////////////////////////
// define layer objects

var neoBMNGbasemap = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: 'http://mapper.internetmapping.net:8081/geoserver/wms?',
      params: {
        LAYERS: 'cascaded_wms:BlueMarbleNG-TB',
        FORMAT: 'image/png8',
        TRANSPARENT: 'TRUE'
      },
      attributions: [
        new ol.Attribution({
          html: 'Data provided by the <a href="https://neo.sci.gsfc.nasa.gov">NASA Earth Observations (NEO) WMS</a>.'
        })
        ]
    })
})

var neoBMNG = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
            url: 'http://mapper.internetmapping.net:8081/geoserver/wms?',
              params: {
                LAYERS: 'cascaded_wms:BlueMarbleNG-TB',
                FORMAT: 'image/png8',
                TRANSPARENT: 'TRUE'
              },
              attributions: [
                new ol.Attribution({
                  html: 'Data provided by the <a href="https://neo.sci.gsfc.nasa.gov">NASA Earth Observations (NEO) WMS</a>.'
                })
	            ]
	        })
	   }) 
    ]
});


var neoFires1m = new ol.layer.Group({
    layers: [neoBMNGbasemap,
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
            url: 'http://mapper.internetmapping.net:8081/geoserver/wms?',
              params: {
                LAYERS: 'cascaded_wms:MOD14A1_M_FIRE',
                FORMAT: 'image/png8',
                TRANSPARENT: 'TRUE'
              },
              attributions: [
                new ol.Attribution({
                  html: 'Data provided by the <a href="https://neo.sci.gsfc.nasa.gov">NASA Earth Observations (NEO) WMS</a>.'
                })
	            ]
	        })
	   }) 
    ]
});

var neoAOD1m = new ol.layer.Group({
    layers: [neoBMNGbasemap,
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
            url: 'http://mapper.internetmapping.net:8081/geoserver/wms?',
              params: {
                LAYERS: 'cascaded_wms:MODAL2_M_AER_OD',
                FORMAT: 'image/png8',
                TRANSPARENT: 'TRUE'
              },
              attributions: [
                new ol.Attribution({
                  html: 'Data provided by the <a href="https://neo.sci.gsfc.nasa.gov">NASA Earth Observations (NEO) WMS</a>.'
                })
	            ]
	        })
	   }) 
    ]
});

var neoSST = new ol.layer.Group({
    layers: [neoBMNGbasemap,
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
            url: 'http://mapper.internetmapping.net:8081/geoserver/wms?',
              params: {
                LAYERS: 'cascaded_wms:AVHRR_CLIM_M',
                FORMAT: 'image/png8',
                TRANSPARENT: 'TRUE'
              },
              attributions: [
                new ol.Attribution({
                  html: 'Data provided by the <a href="https://neo.sci.gsfc.nasa.gov">NASA Earth Observations (NEO) WMS</a>.'
                })
	            ]
	        })
	   }) 
    ]
});

var nwsBaseReflectivity = new ol.layer.Group({
    layers: [neoBMNGbasemap,
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
            url: 'http://mapper.internetmapping.net:8081/geoserver/wms?',
              params: {
                LAYERS: 'cascaded_wms:nws_mrms_base_refl',
                FORMAT: 'image/png8',
                TRANSPARENT: 'TRUE'
              },
              attributions: [
                new ol.Attribution({
                  html: 'Data provided by the <a href="https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/radar_base_reflectivity/MapServer/WMSServer?request=GetCapabilities&service=WMS">National Weather Service Base Reflectivity WMS</a>.'
                })
	            ]
	        })
	   }) 
    ]
});



///////////////////////////////////////////////////////////////////////////////
// create our base map objects 
var myMap = new ol.Map({
	target: 'map',
	view: new ol.View({
		center: ol.proj.fromLonLat([-98.58,39.83]), // the approximate geographic center of the continental US
		center: [-98.58,39.83], // the approximate geographic center of the continental US
		zoom: 3,
		projection: projection
		})
	});



///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// define the function that sets the basemap type for the current map
function setMapType(newType) {
    console.log(newType);
    if(newType == 'neoBMNG') {
        myMap.setLayerGroup(neoBMNG);
    } else if (newType == 'neoFires1m') {
        myMap.setLayerGroup(neoFires1m);
    } else if (newType == 'neoAOD1m') {
        myMap.setLayerGroup(neoAOD1m);
    } else if (newType == 'neoSST') {
        myMap.setLayerGroup(neoSST);
    } else if (newType == 'nwsBaseReflectivity') {
        myMap.setLayerGroup(nwsBaseReflectivity);
    }
}
///////////////////////////////////////////////////////////////////////////////

// Set the initial map basemap
setMapType('neoBMNG')



