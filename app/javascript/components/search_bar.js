const searchBarMenu = document.getElementById('spot_search_search_address');
const form = document.querySelector('.edit_spot_search');

const changeSearchBar = (map, position) => {
  if (searchBarMenu) {
    searchBarMenu.addEventListener('input', () => {
      searchBarMenu.classList.add("change-search");
      if (searchBarMenu.value === "") {
        searchBarMenu.classList.remove("change-search");
      };
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const spotSearchId = document.getElementById('divinvisible').dataset.uid;
      const formData = new FormData(form);
      fetch(`/spot_searches/${spotSearchId}`,
        {
          method: 'put',
          credentials: 'same-origin',
          body: formData
        })
        .then(response => response.json())
        .then((data) => {
          const waypointOne = data[0][0];
          const waypointTwo = data[0][1];
          const waypointThree = data[0][2];
          
          const directionsService = new google.maps.DirectionsService();
          const directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true, polylineOptions: { strokeColor: '#4becd9', strokeWeight: 8 } });
          directionsDisplay.setMap(map);
          
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const start = new google.maps.LatLng(latitude, longitude);
          const end = new google.maps.LatLng(data[1][0]['dest_lat'], data[1][0]['dest_lng']);
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
        });
    });
  }
};

export { changeSearchBar };
