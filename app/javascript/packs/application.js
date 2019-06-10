import "bootstrap";
import "../plugins/menu_open";
import "../components/signin";
import "../plugins/address";
import { sendLocation } from "../components/pawk_now";
import { loopItinerary } from "../components/around_me";
import { searchFav } from "../components/search_fav";

sendLocation();
loopItinerary();
searchFav();
