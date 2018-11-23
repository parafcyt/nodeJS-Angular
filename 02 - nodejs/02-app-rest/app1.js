const lugar = require ('./lugar/lugar');
const clima = require ('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

async function getInfo(direccion){
    try {
      let coors = await lugar.getLugarCoor(direccion);
      let datos = await clima.getClima(coors.latitud,coors.longitud);

      return `La temperatura en ${coors.direccion} es de ${datos.temperatura}°, con presión de ${datos.presion} hPa y humedad del ${datos.humedad}%.`;
    }
    catch (e) {
      return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
.then (function (mensaje) {
    console.log(mensaje);
})
.catch (e =>console.log(e));
