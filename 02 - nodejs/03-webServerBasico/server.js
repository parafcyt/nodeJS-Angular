const http = require('http');

http.createServer((req, res) => {

  //res.write("Hola Mona soy tu brouser");

  res.writeHead(200, {'Content-Type':'application/json'}); // para poder manejar mejor el json

  let salida = {
    nombre: "Alexis",
    apellido: "Morison",
    ciudad: "Concepcion del Uruguay",
    url: "http//www.loquequierelachola.com.ar"
  }

  res.write(JSON.stringify(salida));

  res.end();

}).listen(8080);

console.log("Escuchando en el puerto 8080");
