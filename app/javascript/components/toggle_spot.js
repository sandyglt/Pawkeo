const parkLocation = (map) => {
  const toggle = document.querySelector('.onoffswitch-checkbox');
  
  const pin = {
    url: 'https://res.cloudinary.com/dposbbt0s/image/upload/v1559813309/mini-pin_gnqp3e.svg',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(32, 32)
  };
  
  toggle.addEventListener('click', (event) => {
    if (toggle.checked === true) {
      
      fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB_RT5j23hWFaxweruTai_jboHpdph0Yjc`,
      {
        method: 'post'
      }
      )
      .then(response => response.json())
      .then((data) => {
        const formDestroy = document.querySelector('.hidden-form-destroy');
        const spot_lat_destroy = document.querySelector('#spot_latitude_destroy');
        const spot_lng_destroy = document.querySelector('#spot_longitude_destroy');
        
        const lat = data.location.lat;
        const lng = data.location.lng;
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
          new google.maps.Marker({ position: new google.maps.LatLng(lat, lng), icon: pin, map: map });
          console.log('Car marker added!');
        });
      });

    } else {
      const formUpdate = document.querySelector('.hidden-form-update');
      formUpdate.submit();
      console.log('Spot freed!');
    }
  });
};

export { parkLocation };
