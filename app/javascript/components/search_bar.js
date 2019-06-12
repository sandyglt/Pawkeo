const searchBarMenu = document.getElementById('spot_search_search_address');

const changeSearchBar = () => {
  searchBarMenu.addEventListener('input', () => {
    searchBarMenu.classList.add("change-search");
  });
};

export { changeSearchBar };
