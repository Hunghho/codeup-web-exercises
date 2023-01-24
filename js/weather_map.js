(function(){
    "use strict";
    //Mapbox api
    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 8,
        center: [-98.4916, 29.4252]
    });
    // button function to get search value and update the forecast
    let marker = new mapboxgl.Marker();
    $('.button').on('click', function () {
        let searchResult = $('#search').val();
        // replace the current city
        let newCity = `<span class='d-flex align-items-end ms-auto text-white city'>Current City: ${searchResult}</span>`
        $('.city').replaceWith(newCity);
        // geocode location from search result
        geocode(searchResult, keys.mapbox).then(function(result) {

            map.flyTo(
                {center: result, essential: true}
            )
            marker.setLngLat(result)
                .addTo(map)
            // getting weather data from search result
            $.get('https://api.openweathermap.org/data/2.5/forecast', {
                lat: result[1],
                lon: result[0],
                appid: keys.weatherMap,
                units: 'imperial'
            }).done(function(data) {
                foreCast(data);
            });
        });
    })

    // Weather map api
    $.get('https://api.openweathermap.org/data/2.5/forecast', {
        lat: 29.4252,
        lon: -98.4916,
        appid: keys.justinKey,
        units: 'imperial'
    }).done(function(data) {
        foreCast(data);
    });

    // append to html
    function foreCast(data){
        let content = '';
        for (let i = 0 ; i < data.list.length ; i += 8){
            let newDate = new Date(data.list[i].dt * 1000);
            content += `<div class='card m-2' style="width: 18rem;">
                   <div class="card-header text-center">${newDate.toLocaleDateString("en-US")}</div>
                   <div class="card-body">
                   <ul class="p-0">
                   <li class="list-group-item text-center">${data.list[i].main.temp_min}${String.fromCharCode(176)}F / ${data.list[i].main.temp_max}${String.fromCharCode(176)}F</li>
                   <li class="list-group-item text-center"><img alt="icon" src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png'/></li>
                   <hr>
                   <li class="list-group-item">Description: ${data.list[i].weather[0].description}</li>
                   <li class="list-group-item">Humidity: ${data.list[i].main.humidity}</li>
                   <li class="list-group-item">Wind: ${data.list[i].wind.speed}</li>
                   <li class="list-group-item">Pressure: ${data.list[i].main.pressure}</li>
                   </ul>
                   </div>
                   </div>`
        }
        $('#weatherContent').html(content);
    }


})();