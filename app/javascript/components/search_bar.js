const searchBarMenu = document.getElementById('spot_search_search_address');
const form = document.getElementById('edit_spot_search');

const changeSearchBar = () => {
  if (searchBarMenu) {
    searchBarMenu.addEventListener('input', () => {
      searchBarMenu.classList.add("change-search");
      if (searchBarMenu.value === "") {
          searchBarMenu.classList.remove("change-search");
      };
    });

    searchBarMenu.addEventListener('submit', () => {
    const formData = new FormData(form);
    fetch(`/spots_searches/update`,
    {
    method: 'post',
    credentials: 'same-origin',
    body: formData
    })
    .then((response) => {
      console.log(response)
      response.json()
    })
    .then((data) => {
      console.log(data);
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
  }
};

export { changeSearchBar };
