function autocomplete() {
  document.addEventListener("DOMContentLoaded", function() {
    const flatAddress = document.getElementById('ap-input');

    if (flatAddress) {
      const autocomplete = new google.maps.places.Autocomplete(flatAddress, { types: [ 'geocode' ] });
      google.maps.event.addDomListener(flatAddress, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }
  });
}

export { autocomplete };
