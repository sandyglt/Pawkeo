const parkLocation = (map) => {
  const toggle = document.querySelector('.onoffswitch-checkbox');
  //console.log(toggle);

  const form = document.querySelector('.hidden-form-around');
   // console.log(form);
  const spot_lat = document.querySelector('#spot_latitude');
  // console.log(spot_lat);
  const spot_lng = document.querySelector('#spot_longitude');
  const spot_search = document.querySelector('#divinvisible');

  const pin = {
    url: 'https://res.cloudinary.com/dposbbt0s/image/upload/v1559813309/mini-pin_gnqp3e.svg',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(32, 32)
  };

  toggle.addEventListener('click', (event) => {
    console.log("form", form)
    if (toggle.checked == true) {
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
        console.log(spot_lat.value);
        console.log(spot_lng.value);
        // form.submit();
        const formData = new FormData(form);
        fetch(`/spot_searches/${spot_search.dataset.uid}/spots/destroy_cloud`,
          {
            method: 'post',
            body: formData
          })
            .then(response => response.json())
            .then((data) => {
            // afficher le marqueur sur la map
            console.log(data);
            new google.maps.Marker({ position: new google.maps.LatLng(lat, lng), icon: pin, map: map });
            });


        }, function (e) {
          //Your error handling here
          alert("Sorry, browser does not support geolocation!");
        }, {
          enableHighAccuracy: true
        });
    } else {
      console.log('Now leaving...');
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
        console.log('Current position found! leaving');
        console.log(spot_lat.value);
        console.log(spot_lng.value);
        // form.submit();
        const formDatab = new FormData(form);
        fetch(`/spot_searches/${spot_search.dataset.uid}/spots/update`,
          {
            method: 'post',
            body: formDatab
          })
            .then(response => response.json())
            .then((data) => {
            // afficher le marqueur sur la map
            console.log(data);
            new google.maps.Marker({ position: new google.maps.LatLng(lat, lng), icon: pin, map: map });
            });
        }, function (e) {
          //Your error handling here
          alert("Sorry, browser does not support geolocation!");
        }, {
          enableHighAccuracy: true
        });
    }
  });
};

export { parkLocation };
