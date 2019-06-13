const sendLocation = (map, position) => {
  const pawk = document.querySelector('.pawk-now img');
  const form = document.querySelector('.hidden-form-pawk');
  const spot_lat = document.querySelector('#spot_lat');
  const spot_lng = document.querySelector('#spot_lng');
  const pin = {
    url: 'https://res.cloudinary.com/dposbbt0s/image/upload/c_scale,h_30,q_100,w_24/v1559813309/mini-pin_gnqp3e.png',
    size: new google.maps.Size(24, 30),
    origin: new google.maps.Point(0, 0),
    // anchor: new google.maps.Point(17, 34),
    // scaledSize: new google.maps.Size(32, 32)
  };

  pawk.addEventListener('click', (event) => {
    console.log('Now geocoding...');
    
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log('Current position found!');
  
    spot_lat.value = lat;
    spot_lng.value = lng;


    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  
    new google.maps.Marker({ position: new google.maps.LatLng(lat, lng), icon: pin, map: map });
    console.log('Marker added!');

  });
};

export { sendLocation };

