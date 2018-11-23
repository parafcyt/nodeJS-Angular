
const express = require ('express');
const app = express();
const hbs = require('hbs');

// -> middleware (bloque de código que se ejecuta entre la petición hasta que llega al server)
//para especificar un callback, y pasarle la ruta  <-- //
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs'); // el get que haga cuando apunte a public renderise la pag hacia home

// constante para heroku


app.get ('/', (req, res) =>{
  //res.send('Hola express');
  res.render('home');
  //res.send();
});

app.get ('/about', (req, res) =>{
  //res.send('Hola express');
  res.render('about');
  //res.send();
});

app.get ('/home', (req, res) =>{
  //res.send('Hola express');
  res.render('home');
  //res.send();
});

app.listen(3000);
console.log('Escuchando en el puerto 3000');
