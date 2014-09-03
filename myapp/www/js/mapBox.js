{
    L.mapbox.accessToken = 'pk.eyJ1IjoiaHVudHppZSIsImEiOiJpNXg4azNvIn0.Kac0yf-wd4SuLaWaWY-H2w';
    var map = L.mapbox.map('map-one', 'examples.map-i86l3621', {
        scrollWheelZoom: false
    }).setView([38.8929, -77.0252], 14);

    var myLayer = L.mapbox.featureLayer().addTo(map);
    var geoJson = [];
    
    var setPoint = function(result)
    {
       var newPoint = 
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [result.longitude, result.latitude]
            },
            "properties": {
                "title": result.title,
                "description": result.description,
                "marker-color": result.colour,
                "icon": {
                    "iconUrl": "img/marker.png",
                    "iconSize": [50, 50], // size of the icon
                    "iconAnchor": [37.5, 75], // point of the icon which will correspond to marker's location
                    "popupAnchor": [0, -50], // point from which the popup should open relative to the iconAnchor
                    "className": "dot"
                }
            }
       };
       
       geoJson.push(newPoint);
        
            myLayer.setGeoJSON(geoJson);
        
    }
    
    myLayer.on('layeradd', function (e) {
        var marker = e.layer,
            feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));

    });


    //    var locations = L.mapbox.featureLayer({
    //
    //        type: 'Feature',
    //        geometry: {
    //            type: 'Point',
    //            coordinates: [-77.0252, 38.91337]
    //        },
    //        properties: {
    //            title: 'Crime',
    //            description: 'Crime is occuring',
    //            'marker-size': 'large',
    //            'marker-color': '#112299',
    //
    //            icon: {
    //                iconUrl: "/MapboxAssets/marker.png",
    //                iconSize: [999, 999], // size of the icon
    //                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    //                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
    //                className: "dot"
    //            }
    //
    //
    //        }
    //    });
    //    locations.addTo(map);
    //    locations.on('layeradd', function (e) {
    //        var marker = e.layer,
    //            feature = marker.feature;
    //        marker.setIcon(L.icon(feature.properties.icon));
    //    });


}