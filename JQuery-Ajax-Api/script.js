$(document).ready(function(){
    $("#form-submit").submit(function(event){
        performSearch(event);
    });
});

function performSearch(event) {
    var request;
    event.preventDefault();
    console.log("Probando") // No olvidar hacer console log 

    // Llamada asincrona JS AJAX

    request = $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
            q: $("#city").val(),
            appid: '9b165950728dc6817356affc87d83559',
            units: 'metric', 
            lang: 'sp' }  // Que sucede!

    });

    request.done(function(response){
        formatSearch(response);
    });
}

function formatSearch(jsonObject) {
    var city_name = jsonObject.name;
    var city_weather = titelize(jsonObject.weather[0].description); 
    var city_temp = jsonObject.main.temp;

    $("#city-name").text(city_name);
    $("#city-weather").text(city_weather);
    $("#city-temp").text(city_temp+ " Celsius");

}

// Para cambiar la primera letra por mayusucula de una oración

function titelize(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }