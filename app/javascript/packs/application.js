import "bootstrap";
import "../plugins/menu_open";
import "../components/signin";
import "../plugins/address";
// import { sendLocation } from "../components/pawk_now";
import { loopItinerary } from "../components/around_me";
import { searchFav } from "../components/search_fav";

// sendLocation();
loopItinerary();
searchFav();

//alertDeleteButton();
import { initSweetalert } from '../plugins/init_sweetalert';

initSweetalert('#sweet-alert-demo', {
  title: "Delete the address",
  text: "Are you sure ?",
  icon: "success"
}, (value) => {
  if (value) {
    const link = document.querySelector('#delete-link');
    link.click();
  }
});
