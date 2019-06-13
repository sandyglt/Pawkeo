// import '../plugins/init_google';
import { autocomplete } from '../components/autocomplete';
import { sendLocation } from '../components/pawk_now';
import { loopItinerary } from '../components/around_me';
import { parkLocation } from '../components/toggle_spot';
import { changeSearchBar } from "../components/search_bar";
import MarkerCluster from '@pod-point/google-maps-marker-cluster';

navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
navigator.geolocation.getCurrentPosition(function (position) {

    const mapElement = document.getElementById('map');
    if (mapElement) {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 48.864848, lng: 2.379853},
            zoom: 16,
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 13
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#144b53"
                        },
                        {
                            "lightness": 14
                        },
                        {
                            "weight": 1.4
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#5d6062"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#939393"
                        },
                        {
                            "lightness": 5
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4d4d4d"
                        },
                        {
                            "lightness": 25
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#525252"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": "0"
                        },
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#146474"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#021019"
                        }
                    ]
                }
            ]
        });
        const pin = {
            url: 'https://res.cloudinary.com/dposbbt0s/image/upload/c_scale,h_30,q_100,w_24/v1559813309/mini-pin_gnqp3e.png',
            size: new google.maps.Size(24, 30),
            origin: new google.maps.Point(0, 0),
            // anchor: new google.maps.Point(-11, 10),
            // scaledSize: new google.maps.Size(38, 48)
        };
        const dotdest = {
            url: 'https://res.cloudinary.com/dposbbt0s/image/upload/v1560069760/blue-dot_mzdar3.svg',
            // size: new google.maps.Size(64, 64),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0),
            scaledSize: new google.maps.Size(16, 16)
        };
        const car = {
            url: 'https://res.cloudinary.com/dposbbt0s/image/upload/v1559853953/Car_qrwqcb.png',
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(32, 32)
        };
        const markers = JSON.parse(mapElement.dataset.markers);
        // let test = [];
        markers[0].forEach((marker) => {
            // test.push(
            new google.maps.Marker({ position: new google.maps.LatLng(marker.lat, marker.lng), icon: pin, map: map })
            // )
        });
        // new MarkerCluster(map, test,
        //     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        markers[1].forEach((destination) => {
            new google.maps.Marker({ position: new google.maps.LatLng(destination.lat, destination.lng), icon: dotdest, map: map });
        });
        let my_car = null;
        if (markers[2]) {
            const toggle = document.querySelector('.onoffswitch-checkbox');
            toggle.checked = true;
            const my_marker = markers[2][0];
            my_car = new google.maps.Marker({ position: new google.maps.LatLng(my_marker.lat, my_marker.lng), icon: car, map: map });
        }

        const dot = {
            url: 'https://res.cloudinary.com/dposbbt0s/image/upload/c_scale,q_100,w_32/v1560069760/white-dot_lw69js.png',
            size: new google.maps.Size(16, 16),
            scaledSize: new google.maps.Size(16, 16)
        };

        const marker = new google.maps.Marker({ position: new google.maps.LatLng(48.864848, 2.379853), icon: dot, map: map });

        sendLocation(map, position);
        loopItinerary(map, position);
        parkLocation(map, my_car, position);
        changeSearchBar();

        // const trafficLayer = new google.maps.TrafficLayer();
        // trafficLayer.setMap(map);
        navigator.geolocation.watchPosition(function () {}, function () {}, {});
        navigator.geolocation.watchPosition(function (position) {
        map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        }, function (e) {

        alert("Sorry, browser does not support geolocation!");
        }, {
        enableHighAccuracy: true
        });
    };
});

autocomplete();