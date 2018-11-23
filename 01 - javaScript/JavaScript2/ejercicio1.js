function Auto (marca,modelo,precio){
  this.marca=marca;
  this.modelo=modelo;
  this.precio=precio;
}

var auto1= new Auto ('RENAULT','LAGUNA',1800);
var auto2= new Auto ('FORD','MONDEO',2300);
var auto3= new Auto ('MERCEDES','600',8500);
var auto4= new Auto ('SEAT', 'CORDOBA',3000);

function iva (objeto) {
  return objeto.precio*0.21;
}

function imprimir (objeto) {
  document.write('El auto '+objeto.marca+' '+objeto.modelo+' cuesta: '+
                  objeto.precio+' dólares IVA: '+iva(objeto)+'.<br/>');
}


imprimir(auto1);
imprimir(auto2);
imprimir(auto3);
imprimir(auto4);
