import Rails from 'rails-ujs'

const sendLocation = () => {
  const pawk = document.querySelector('.pawk-now img');
  // console.log(pawk);
  const form = document.querySelector('.hidden-form-pawk');
  const spot_lat = document.querySelector('#spot_lat');
  const spot_lng = document.querySelector('#spot_lng');
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

