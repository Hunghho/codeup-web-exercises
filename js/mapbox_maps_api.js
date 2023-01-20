(function(){
"use strict";

mapboxgl.accessToken = keys.mapbox;
let map = new mapboxgl.Map({
    container: 'maps',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 8,
    center: [-97.9676158035189, 29.90762167547033]
});

let features = [
    {
        type: 'Feature',
        properties: {
            description: "Vietnamese Food"
        },
        geometry: {
            type: 'Point',
            coordinates: [-98.32332, 29.55791]
        }
    },
    {
        type: 'Feature',
        properties: {
            description: "Vietnamese Pho"
        },
        geometry: {
            type: 'Point',
            coordinates: [-97.79264171866625, 30.15577858359665]
        }
    },
    {
        type: "Feature",
        properties: {
            description: "Mexican Food"
        },
        geometry: {
            type: 'Point',
            coordinates: [-98.43096885816533, 29.485144339400485]
        }
    }
]

    features.forEach((feature) => {
        let popup = new mapboxgl.Popup()
            .setHTML(`<p>${feature.properties.description}</p>`);
        let marker = new mapboxgl.Marker()
            .setLngLat(feature.geometry.coordinates)
            .addTo(map)
            .setPopup(popup)
    })

    map.addControl(
        new MapboxDirections({
            accessToken: keys.mapbox
        }),
        'top-left'
    );

// let marker = new mapboxgl.Marker()
//     .setLngLat([-98.32332, 29.55791])
//     .addTo(map);
// let fourStar = new mapboxgl.Popup()
//     .setHTML("<p>Pho Four Stars!</p>")
//
// marker.setPopup(fourStar)
//
// let marker1 = new mapboxgl.Marker()
//     .setLngLat([-97.79264171866625, 30.15577858359665])
//     .addTo(map);
// let withUs = new mapboxgl.Popup()
//     .setHTML("<p>Pho With Us!</p>")
//
// marker1.setPopup(withUs)


})();