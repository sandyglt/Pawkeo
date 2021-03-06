const searchFav = () => {
  const addressElement = document.querySelector('#card-address [data-address]');
  // console.log(addressElement)
  const searchBar = document.querySelector('.edit_spot_search');
  // console.log(searchBar)
  const input = document.querySelector('#spot_search_search_address');
  // console.log(input)
  // console.log(addressElement.dataset.address)
  if (addressElement) {
    addressElement.addEventListener('click', (event) => {
      input.value = addressElement.dataset.address;
      // console.log(input.value)
      searchBar.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
  }
};

export { searchFav };
