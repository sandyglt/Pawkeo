const parkLocation = (map, my_car, position) => {
  const toggle = document.querySelector('.onoffswitch-checkbox');
  let my_marker = my_car;
  const car = {
    url: 'https://res.cloudinary.com/dposbbt0s/image/upload/c_scale,q_100,w_256/v1560462753/mycar_upguub.png',
    size: new google.maps.Size(85, 32),
    // origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(85, 32)
  };
  const pin = {
    url: 'https://res.cloudinary.com/dposbbt0s/image/upload/c_scale,h_30,q_100,w_24/v1559813309/mini-pin_gnqp3e.png',
    size: new google.maps.Size(24, 30),
    origin: new google.maps.Point(0, 0),
    // anchor: new google.maps.Point(-11, 10),
    // scaledSize: new google.maps.Size(38, 48)
  };
  toggle.addEventListener('click', (event) => {
    if (toggle.checked === true) {

      const formDestroy = document.querySelector('.hidden-form-destroy');
      const spot_lat_destroy = document.querySelector('#spot_latitude_destroy');
      const spot_lng_destroy = document.querySelector('#spot_longitude_destroy');

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log('Current position found!');

      spot_lat_destroy.value = lat;
      spot_lng_destroy.value = lng;

      // form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

      const formData = new FormData(formDestroy);
      fetch(`/spots/destroy_cloud`,
      {
        method: 'post',
        body: formData
      })
      .then(response => response.json())
      .then((data) => {
        const updateSpotForm = document.getElementById('update-spot-form');
        updateSpotForm.innerHTML = data.html;
        my_marker = new google.maps.Marker({ position: new google.maps.LatLng(lat, lng), icon: car, map: map });
        console.log('Car marker added!');
      });

    } else {
      const formUpdate = document.querySelector('.hidden-form-update');
      if (formUpdate) {
        formUpdate.submit();
        my_marker.setIcon(pin);
        console.log('Spot freed!');
      };
      
    }
  });
};

export { parkLocation };
