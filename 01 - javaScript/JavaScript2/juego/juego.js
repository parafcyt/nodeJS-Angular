function Jugador(nombre) {
  this.nombre=nombre;
  this.pvida=200;
  this.spower=100;

  this.estado=function(){
    console.log(this.nombre,'PV =',this.pvida,'SP =',this.spower);
  };

  this.esperarTurno=function(){
    this.spower+=20;
    if (this.spower>100) {
      this.spower=100;
    }
  };

  this.murio=function(){
    if (this.pvida<=0) {
      this.pvida=0;
      return true;
    }
    else {
      return false;
    }
  };

  this.resetear=function(){
    this.pvida=200;
    this.spower=100;
    this.estado();
  }

  this.tirarFlecha=function(jugadorObjeto){ //tirar flecha gasta 40spower y saca daño random, pero ua esperar turno
    console.log(this.nombre+' le dispara a '+jugadorObjeto.nombre);
    if (this.spower>=40) { //si le alcanza
        jugadorObjeto.esperarTurno();
        var danio=Math.round(Math.random()*100); //calcula danio random
        jugadorObjeto.pvida-=danio;
        console.log(danio,'de daño a '+jugadorObjeto.nombre);
        this.spower-=40;
        jugadorObjeto.esperarTurno();
        if (jugadorObjeto.murio()) { //alcanza y murió
          alert(jugadorObjeto.nombre+' murió'+'\nPV: '+jugadorObjeto.pvida+'  SP: '+jugadorObjeto.spower+'\nFIN DEL JUEGO');
          console.log("");
          //console.log("NUEVA PARTIDA");
          this.resetear();
          jugadorObjeto.resetear();
          return false;
        }
        else { //alcanza y no murió
          console.error(jugadorObjeto.nombre,'PV =',jugadorObjeto.pvida,'SP =',jugadorObjeto.spower);
          console.log('_______________________________________________________________________________________');
          console.log(' ');
          return true;
        }
    }
    else {//si no le alcanza
        console.error('SP INSUFICIENTE');
        console.log('+',10,'de SP a '+this.nombre);
        this.spower+=10;
        console.log('_______________________________________________________________________________________');
        console.log(' ');
        return true;
    }

  };
};

function tiempo(){
  numero=(new Date()).getTime()+1000*Math.abs(5);//10 segundos
  while ((new Date()).getTime()<numero); //mientras haya tiempo que cicle
}

function jugarRandom(j1,j2){
  console.log("NUEVA PARTIDA");
  var jugar=true;
  var turno=true;
  while (jugar) {
      turno=Boolean(Math.round(Math.random()));
      if (turno) {
        jugar=j1.tirarFlecha(j2);
      }
      else {
        jugar=j2.tirarFlecha(j1);
      }
      tiempo();
  }
}


var alexis = new Jugador("Alexis");
var mona = new Jugador("Mona");


console.log(alexis);
console.log(mona);
