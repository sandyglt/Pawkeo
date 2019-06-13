const searchBarMenu = document.getElementById('spot_search_search_address');


const changeSearchBar = () => {
  if (searchBarMenu) {
    searchBarMenu.addEventListener('input', () => {
      searchBarMenu.classList.add("change-search");
      if (searchBarMenu.value === "") {
         searchBarMenu.classList.remove("change-search");
      };
    });
  }
};

export { changeSearchBar };
