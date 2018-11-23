const axios = require('axios'); //axios es para traer json

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

//console.log(argv.direccion);

let encodeUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}+CA&key=AIzaSyAJ2aEs0UpGAW-G4mleFU6nasD6U1RkfT0`)
.then( resp => {
  let location = resp.data.results[0];
  let coors = location.geometry.location;

  console.log("dir", location.formatted_address);
  console.log("lat", coors.lat);
  console.log("long", coors.lng);
  //console.log(resp.status);

  //axios.get(`api.openweathermap.org/data/2.5/weather?lat=${coors.lat}&lon=${coors.lng}`)
  //axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coors.lat}&lon=${coors.lng}&appid=315a034a007cf4330953a6b4c24a0f54`)
  axios.get(`http://openweathermap.org/data/2.5/weather?lat=${coors.lat}&lon=${coors.lng}&appid=b6907d289e10d714a6e88b30761fae22`)
  .then( respuesta => {
    let aux=respuesta.data.main

    //console.log("mona");
    console.log("temperatura:",aux.temp);
    console.log("presión:",aux.pressure);
    console.log("humedad:",aux.humidity,"%");
    //console.log(respuesta.status);
  }
).catch(err => console.log("error", err));

}).catch(err => console.log("error", err));
