// import '../plugins/init_google';
import { autocomplete } from '../components/autocomplete';
import { sendLocation } from '../components/pawk_now';
import { loopItinerary } from '../components/around_me';
import { parkLocation } from '../components/toggle_spot';
import { changeSearchBar } from "../components/search_bar";
import MarkerCluster from '@pod-point/google-maps-marker-cluster';

navigator.geolocation.watchPosition(function () {}, function () {}, {});
navigator.geolocation.watchPosition(function (position) {

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
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "gamma": "1.13"
                },
                {
                    "weight": "0.01"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "-21"
                },
                {
                    "gamma": "6.18"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "saturation": "-48"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                {
                    "color": "#919191"
                },
                {
                    "gamma": "4.24"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [
                {
                    "gamma": "3.36"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "lightness": "0"
                },
                {
                    "saturation": "0"
                },
                {
                    "gamma": "1.00"
                },
                {
                    "color": "#090909"
                },
                {
                    "weight": "1.00"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "3"
                },
                {
                    "gamma": "1.00"
                },
                {
                    "color": "#3d3d3d"
                },
                {
                    "saturation": "0"
                },
                {
                    "lightness": "0"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                },
                {
                    "gamma": "1.00"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "gamma": "1.10"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 21
                },
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
                },
                {
                    "lightness": 17
                },
                {
                    "gamma": "0.60"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "weight": "0.01"
                },
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "gamma": "1.50"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                },
                {
                    "gamma": "0.60"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "weight": "0.01"
                },
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "3.00"
                },
                {
                    "gamma": "1.50"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                },
                {
                    "gamma": "0.60"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "weight": "0.01"
                },
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "3.00"
                },
                {
                    "gamma": "1.50"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
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
    let test = [];
    markers[0].forEach((marker) => {
        test.push(
            new google.maps.Marker({ position: new google.maps.LatLng(marker.lat, marker.lng), icon: pin, map: map })
        )
        
    });
    new MarkerCluster(map, test,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

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
    autocomplete();
    changeSearchBar();

    // const trafficLayer = new google.maps.TrafficLayer();
    // trafficLayer.setMap(map);
    
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
};

    }, function (e) {

    alert("Sorry, browser does not support geolocation!");
    }, {
    enableHighAccuracy: true
});