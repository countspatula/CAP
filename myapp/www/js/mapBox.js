{   L.mapbox.accessToken = 'pk.eyJ1IjoiaHVudHppZSIsImEiOiJpNXg4azNvIn0.Kac0yf-wd4SuLaWaWY-H2w';
        var map = L.mapbox.map('map-one', 'examples.map-i86l3621', {scrollWheelZoom: false}).setView([38.8929,-77.0252], 14);
            
        
        
      var setPoint = function(result){
          
        L.mapbox.featureLayer({
            
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [result.longitude, result.latitude]
        },
            
        properties: {
            title: result.title,
            description: 'Crime is occuring',
            
            'marker-size': 'large',
            'marker-color': '#CA4444',
            'icon':{
               'iconUrl': 'marker.png',
               'iconSize': [56, 56],
               'iconAnchor': [28, 28],
               'popupAnchor': [0, -34]
            }
            
            
        }}).addTo(map);
          
      }
 
}