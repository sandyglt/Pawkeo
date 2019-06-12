const loopItinerary = (map) => {
  const aroundMe = document.querySelector('.around-me img');
  const form = document.querySelector('.hidden-form-around');
  const spot_lat = document.querySelector('#spot_latitude');
  const spot_lng = document.querySelector('#spot_longitude');
  
  aroundMe.addEventListener('click', (event) => {
    fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB_RT5j23hWFaxweruTai_jboHpdph0Yjc`,
      {
        method: 'post'
      })
        .then(response => response.json())
        .then((data) => {
          console.log('Now geocoding...');
          
          const lat = data.location.lat;
          const lng = data.location.lng;
          spot_lat.value = lat;
          spot_lng.value = lng;
          console.log('Current position found!');
          const formData = new FormData(form);
          fetch(`/spots/around`,
        {
          method: 'post',
          credentials: 'same-origin',
          body: formData
        })
          .then(response => response.json())
          .then((data) => {
            const waypointOne = data[0];
            const waypointTwo = data[1];
            const waypointThree = data[2];

            const directionsService = new google.maps.DirectionsService();
            const directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true, polylineOptions: { strokeColor: '#4becd9', strokeWeight: 8 } });
            directionsDisplay.setMap(map);
            
            const latitude = lat;
            const longitude = lng;
            const start = new google.maps.LatLng(latitude, longitude);
            const end = new google.maps.LatLng(latitude, longitude);
            const request = {
                origin: start,
                destination: end,
                travelMode: 'DRIVING',
                waypoints: [
                    {
                        location: new google.maps.LatLng(waypointOne['lat'], waypointOne['lng']),
                        stopover: false
                    },
                    {
                        location: new google.maps.LatLng(waypointTwo['lat'], waypointTwo['lng']),
                        stopover: false
                    },
                    {
                        location: new google.maps.LatLng(waypointThree['lat'], waypointThree['lng']),
                        stopover: false
                    }
                ],
                optimizeWaypoints: true,
            };
            directionsService.route(request, function(result, status) {
                if (status == 'OK') {
                    directionsDisplay.setDirections(result);
                  }
                });
            console.log("Itinerary done!")
          });
        });
  }); 
}

export { loopItinerary };
