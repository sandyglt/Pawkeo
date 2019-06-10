const parkLocation = () => {
  const toggle = document.querySelector('.onoffswitch-checkbox');

toggle.addEventListener('click', () => {
  if (toggle.checked == false) {
    navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
    navigator.geolocation.getCurrentPosition(function (position) {

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      spot_lat.value = lat;
      spot_lng.value = lng;



    }, function (e) {
      //Your error handling here
      alert("Sorry, browser does not support geolocation!");
    }, {
      enableHighAccuracy: true
    });
  };
  });

};

parkLocation();
