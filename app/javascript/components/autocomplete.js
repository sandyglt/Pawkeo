function autocomplete() {
  document.addEventListener("DOMContentLoaded", function() {
    const flatAddresses = document.querySelectorAll('.autocomplete');
    if (flatAddresses.length > 0) {
      flatAddresses.forEach((flatAddress) => {
        new google.maps.places.Autocomplete(flatAddress, { types: [ 'geocode' ] });
        // google.maps.event.addDomListener(flatAddress, 'keydown', function(e) {
        //   if (e.key === "Enter") {
        //     e.preventDefault(); // Do not submit the form on Enter.
        //   }
        // });
      });
    }
  });
}

export { autocomplete };
