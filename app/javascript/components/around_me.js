const loopItinerary = () => {
  const aroundMe = document.querySelector('.around-me img');
  // console.log(aroundMe);
  const form = document.querySelector('.hidden-form-around');
  const spot_lat = document.querySelector('#spot_latitude');
  // console.log(spot_lat);
  const spot_lng = document.querySelector('#spot_longitude');

  aroundMe.addEventListener('click', (event) => {
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
      console.log('Current position finded!');
      form.submit();
      }, function (e) {
        //Your error handling here
        alert("Sorry, browser does not support geolocation!");
      }, {
        enableHighAccuracy: true
    });
  });
};

export { loopItinerary };