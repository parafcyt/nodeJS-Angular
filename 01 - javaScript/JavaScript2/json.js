var objeto = {
  nombre: "alexis",
  apellido: "morison",
  edad: "23"
}

var jsonString = JSON.stringify(objeto);
console.log(jsonString);

var request = new XMLHttpRequest();

request.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3e2800984d4302f5fc652a5387cc08c0&format=json', true);

request.onload = function(){
  var data = JSON.parse(this.response);
  console.log(data);
  for (var i = 0; i < 10; i++) {
    console.log((i+1) + " Name: " + data.artists.artist[i].name + "  Playcount: " + data.artists.artist[i].playcount +
                "  listeners: " + data.artists.artist[i].listeners);
  }
}

request.send();
