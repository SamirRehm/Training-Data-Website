function add_overlay (map_id, data_overlay, layer_id) {

  //window[map_id + 'googleOverlay' + layer_id] = [];
    createWindowObject(map_id, 'googleOverlay', layer_id);

    var latlonNorthEast = new google.maps.LatLng(data_overlay[0].north, data_overlay[0].east);
    var latlonSouthWest = new google.maps.LatLng(data_overlay[0].south, data_overlay[0].west);

    var bounds = {
        north: data_overlay[0].north,
        east: data_overlay[0].east,
        south: data_overlay[0].south,
        west: data_overlay[0].west
    };

    var overlayLayer = new google.maps.GroundOverlay(
        data_overlay[0].url,
        bounds
    );

    overlayLayer.setMap(window[map_id + 'map']);

    window[map_id + 'mapBounds'].extend(latlonNorthEast);
    window[map_id + 'mapBounds'].extend(latlonSouthWest);

    window[map_id + 'map'].fitBounds(window[map_id + 'mapBounds'])
    window[map_id + 'googleOverlay' + layer_id].push(overlayLayer);

}


function clear_overlay (map_id, layer_id) {
    
//    for (i = 0; i < window[map_id + 'googleOverlay' + layer_id].length; i++){
//        window[map_id + 'googleOverlay' + layer_id][i].setMap(null);
//    }
//    window[map_id + 'googleOverlay' + layer_id] = null;
    clear_object(map_id, 'googleOverlay', layer_id);
}
