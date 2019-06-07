import Rails from 'rails-ujs'

const sendLocation = () => {
  const pawk = document.querySelector('.pawk-now img');
  console.log(pawk);
  const form = document.querySelector('.hidden-form');
  const spot_lat = document.querySelector('#spot_lat');
  const spot_lng = document.querySelector('#spot_lng');
  console.log(spot_lat);

  pawk.addEventListener('click', (event) => {
    // event.preventDefault();
    console.log('now geocoding');
    if (true) {
      navigator.geolocation.getCurrentPosition(function (position) {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
        console.log(lat);
        console.log(lng);
        spot_lat.value = lat;
        spot_lng.value = lng;
        console.log(form);
        form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        // Rails.fire(form, 'submit');
      });
    };
  });
};

export { sendLocation };