const form = document.querySelector('.form-login');
const start = document.querySelector('#btn-start');
const leave = document.getElementById('cross-leave');
const leaveup = document.getElementById('cross-leave-signup');
const logged = document.querySelector('#btn-start-logged');
const forms = document.querySelector('.form-start');
const spotsea_lat = document.querySelector('#spotsea_latitude');
const spotsea_lng = document.querySelector('#spotsea_longitude');

if (start) {
  start.addEventListener('click', () => {
    form.classList.add('display');
  });
}

if (leave) {
  leave.addEventListener('click', () => {
    form.classList.remove('display');
  });
}

if (leaveup) {
  leaveup.addEventListener('click', () => {
    location.href = 'https://www.pawkeo.com';
  });
}

if (logged) {
  logged.addEventListener('click', (event) => {
    console.log('Now geocoding...');
    //Dummy one, which will result in a working next statement.
    navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
    //The working next statement.
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      // console.log(lat);
      // console.log(lng);
      spotsea_lat.value = lat;
      spotsea_lng.value = lng;
      console.log('Current position found!');
      // form.submit();
      forms.submit();
    });
  });
}
