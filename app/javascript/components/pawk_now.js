import Rails from 'rails-ujs'

const sendLocation = (map) => {
  const pawk = document.querySelector('.pawk-now img');
  // console.log(pawk);
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
  // console.log(spot_lat);

  pawk.addEventListener('click', (event) => {
    console.log('Now geocoding...');
    //Dummy one, which will result in a working next statement.
    navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
    //The working next statement.
    navigator.geolocation.getCurrentPosition(function (position) {
      //Your code here
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      // console.log(lat);
      // console.log(lng);
      spot_lat.value = lat;
      spot_lng.value = lng;
      // console.log(form);
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      // Rails.fire(form, 'submit');
      new google.maps.Marker({ position: new google.maps.LatLng(lat, lng), icon: pin, map: map });
      console.log('Geocoding done!');
    }, function (e) {
      //Your error handling here
      alert("Sorry, browser does not support geolocation!");
    }, {
      enableHighAccuracy: true
    });
  });
};

export { sendLocation };

