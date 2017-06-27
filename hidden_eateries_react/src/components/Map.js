import React from 'react';


function Map(props){
    // creates a starting map
    var map = new google.maps.Map(document.querySelector('.map'), {
            zoom: 10, // intial zoom
            center: {lat: 40.73061, lng: -73.935242} // these coordinates are for NYC
        });
    // geocoder translates address into GPS coordinates
    var geocoder = new google.maps.Geocoder();
    // function that grabs the geocoder and starting map
    var geocodeAddress = function(geocoder, resultsMap) {
        /*var address = '10 East 21st Street New York, NY 10010'; // {props.address}*/
         var address = props.address;
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                resultsMap.setZoom(15); // Zoom in when searching
                var marker = new google.maps.Marker({ // creates a marker and centers it
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    geocodeAddress(geocoder, map); // runs function to display location based on address given
    
    return(
        <div className="map"></div>
    )
}

export default Map;