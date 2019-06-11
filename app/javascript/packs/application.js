import "bootstrap";
import "../plugins/menu_open";
import "../components/signin";
import "../plugins/address";
import { searchFav } from "../components/search_fav";
import { initSweetalert } from '../plugins/init_sweetalert';

searchFav();
initSweetalert();

// Needed to trigger sweetalert in create.js.erb
// window.myLib = {};
// myLib.alert = initSweetalert;
