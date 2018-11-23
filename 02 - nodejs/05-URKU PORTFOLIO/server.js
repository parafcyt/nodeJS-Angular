
const express = require ('express');
const app = express();
const hbs = require('hbs');

// -> middleware (bloque de código que se ejecuta entre la petición hasta que llega al server)
//para especificar un callback, y pasarle la ruta  <-- //
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs'); // el get que haga cuando apunte a public renderise la pag hacia home

app.get ('/', (req, res) =>{
  res.render('index');
});

app.get ('/index', (req, res) =>{
  res.render('index');
});

app.get ('/portfolio', (req, res) =>{
  res.render('portfolio');
});

app.get ('/blog', (req, res) =>{
  res.render('blog');
});

app.get ('/about', (req, res) =>{
  res.render('about');
});

app.get ('/contact', (req, res) =>{
  res.render('contact');
});


app.listen(3000);
console.log('Escuchando en el puerto 3000');
