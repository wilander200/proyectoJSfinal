/* haciendo la pagina del clima para la pagina web, se pueden colocar mas datos*/

let ubicacion = navigator.geolocation.getCurrentPosition(coordenadas);

function coordenadas (puntos){
    let latitud = puntos.coords.latitude;
    let longitud = puntos.coords.longitude;

let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=059bdab610d8a32da6f6c31018fe26ad&units=metric&lang=es`;

$.get(url , function (datos){
    $("#cintaClima").append(`<p id="parrafoClima">Antes de salir a pedaler mira el clima para evitar accidentes,   ${datos.name} <img src="http://openweathermap.org/img/w/${datos.weather[0].icon}.png"/>  ${datos.main.temp}°C</p>`)
})
}
