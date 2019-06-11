const loopItinerary = (map) => {
  const aroundMe = document.querySelector('.around-me');
  // console.log(aroundMe);
  const form = document.querySelector('.hidden-form-around');
  const spot_lat = document.querySelector('#spot_latitude');
  // console.log(spot_lat);
  const spot_lng = document.querySelector('#spot_longitude');
  const spot_search = document.querySelector('#divinvisible');

  aroundMe.addEventListener('click', (event) => {
    console.log('Now geocoding...');
    //Dummy one, which will result in a working next statement.
    navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
    //The working next statement.
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      // console.log(lat);
      // console.log(lng);
      spot_lat.value = lat;
      spot_lng.value = lng;
      console.log('Current position found!');
      // form.submit();
      const formData = new FormData(form);
      fetch(`/spot_searches/${spot_search.dataset.uid}/spots/around`,
        {
          method: 'post',
          credentials: 'same-origin',
          body: formData
        })
          .then(response => response.json())
          .then((data) => {
          // Do something with the response
            const waypointOne = data[0];
            const waypointTwo = data[1];
            const waypointThree = data[2]


            const directionsService = new google.maps.DirectionsService();
            const directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true, polylineOptions: { strokeColor: '#4becd9', strokeWeight: 8 } });
            directionsDisplay.setMap(map);
            // map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            // marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
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



      }, function (e) {
        //Your error handling here
        alert("Sorry, browser does not support geolocation!");
      }, {
        enableHighAccuracy: true
      });
    });
  });
};

export { loopItinerary };
