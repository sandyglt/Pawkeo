const sendLocation = (map) => {
  const pawk = document.querySelector('.pawk-now img');
  const form = document.querySelector('.hidden-form-pawk');
  const spot_lat = document.querySelector('#spot_lat');
  const spot_lng = document.querySelector('#spot_lng');
  const pin = {
    url: 'https://res.cloudinary.com/dposbbt0s/image/upload/v1559813309/mini-pin_gnqp3e.svg',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(32, 32)
  };

  pawk.addEventListener('click', (event) => {
    console.log('Now geocoding...');
    fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB_RT5j23hWFaxweruTai_jboHpdph0Yjc`,
      {
        method: 'post'
      }
    )
      .then(response => response.json())
      .then((data) => {
      
        const lat = data.location.lat;
        const lng = data.location.lng;
        console.log('Current position found!');
      
        spot_lat.value = lat;
        spot_lng.value = lng;


        form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      
        new google.maps.Marker({ position: new google.maps.LatLng(lat, lng), icon: pin, map: map });
        debugger
        console.log('Marker added!');
      });
  });
};

export { sendLocation };

