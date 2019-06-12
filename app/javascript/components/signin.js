const form = document.querySelector('.form-login');
const start = document.querySelector('#btn-start');
const leave = document.getElementById('cross-leave');
const leaveup = document.getElementById('cross-leave-signup');
const logged = document.querySelector('#btn-start-logged');
const forms = document.querySelector('.form-start');
const formp = document.querySelector('.form-position');
const spotsea_lat = document.querySelector('#spotsea_latitude');
const spotsea_lng = document.querySelector('#spotsea_longitude');
const user_lat = document.querySelector('#user_latitude');
const user_lng = document.querySelector('#user_longitude');
const login = document.getElementById('btn-login');

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
      
        spotsea_lat.value = lat;
        spotsea_lng.value = lng;


        forms.submit();
      });
  });
}

