const axios = require('axios'); //axios es para traer json

async function getClima(latitud,longitud){
    let respuesta = await axios.get(`http://openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=b6907d289e10d714a6e88b30761fae22`);

    return {
      temperatura: respuesta.data.main.temp,
      presion: respuesta.data.main.pressure,
      humedad: respuesta.data.main.humidity
    }
}

module.exports = {
  getClima
}
