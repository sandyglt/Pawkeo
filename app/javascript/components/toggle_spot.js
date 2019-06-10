const parkLocation = (map) => {
  const toggle = document.querySelector('.onoffswitch-checkbox');
  //console.log(toggle);

  const form = document.querySelector('.hidden-form-around');
   // console.log(form);
  const spot_lat = document.querySelector('#spot_latitude');
  // console.log(spot_lat);
  const spot_lng = document.querySelector('#spot_longitude');
  const spot_search = document.querySelector('#divinvisible');

  toggle.addEventListener('click', (event) => {
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
        // form.submit();
        const formData = new FormData(form);
        console.log(formData);
        fetch(`/spot_searches/${spot_search.dataset.uid}/spots/destroy_cloud`,
          {
            method: 'post',
            credentials: 'same-origin',
            body: formData
          })
            .then(response => response.json())
            .then((data) => {
            // Do something with the response

            console.log(data);


            });


        }, function (e) {
          //Your error handling here
          alert("Sorry, browser does not support geolocation!");
        }, {
          enableHighAccuracy: true
        });
    };
  });
};

export { parkLocation };
