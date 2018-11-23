const express = require('express');
const app = express();

app.get('/', function (req, res) {
  //res.send('Hola Mona');

  let salida = {
    nombre: "Alexis",
    apellido: "Morison",
    ciudad: "Concepcion del Uruguay",
    url: "http//www.loquequierelachola.com.ar"
  }

  res.send(salida);

});

app.listen(3000);

console.log("server de la mona con Express");
