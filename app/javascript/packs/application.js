import "bootstrap";
import "../plugins/menu_open";
import "../components/signin";
import "../plugins/address";
import { searchFav } from "../components/search_fav";
import { initSweetalert } from '../plugins/init_sweetalert';

searchFav();
// HM not ideal but good enough for now
initSweetalert('.sweet-alert-demo', {
  title: "Delete the address",
  text: "Are you sure ?",
  icon: "success"
}, (value) => {
  if (value) {
    const link = document.querySelector('.delete-link');
    link.click();
  }
});
window.initSweetalert = initSweetalert
// Needed to trigger sweetalert in create.js.erb
// window.myLib = {};
// myLib.alert = initSweetalert;

