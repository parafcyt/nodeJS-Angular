const axios = require('axios'); //axios es para traer json

async function getLugarCoor(direccion){
  let encodeUrl = encodeURI(direccion);
  let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}+CA&key=AIzaSyAJ2aEs0UpGAW-G4mleFU6nasD6U1RkfT0`);

  if (respuesta.data.status === 'ZERO_RESULTS') {
    console.log(`No hay resultados para la ciudad: ${direccion}`);
  }

  let location = respuesta.data.results[0];
  let coors = location.geometry.location;

  return {
    direccion: location.formatted_address,
    latitud: coors.lat,
    longitud: coors.lng
  }

}

module.exports = {
  getLugarCoor
}
