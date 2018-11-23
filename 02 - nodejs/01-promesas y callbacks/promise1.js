//bbdd empleados
let empleados =[
  {
    id:1,
    nombre:'ernesto'
  },
  {
    id:2,
    nombre:'marcelo'
  },
  {
    id:3,
    nombre:'pedro'
  }
];

//bbdd salarios
let salarios =[
  {
    id:1,
    salario:1000
  },
  {
    id:2,
    salario:2000
  }
];


function getEmpleado(id){
  return new Promise(function(resolve,reject){
    var empleadobbdd=empleados.find(empleado=>empleado.id===id)
    if (!empleadobbdd) {
      reject (`No existe el empleado con el ID ${id}`)
    }
    else {
      resolve(empleadobbdd)
    }
  }).then(function (resuelto){ //como la promesa es anónima la llamo antes de
                              //cerrar con .then, sino seria nombrepromesa.then y adentro las funciones
    console.log(resuelto);
  }, function (rechazado){
    console.log(rechazado);
  }

  )
}

getEmpleado(1);

function getDato(bbdd,id,tipo){
  var promesa=new Promise (function(resolve,reject){
    var datobbdd=bbdd.find(dato=>dato.id===id)
    if (!datobbdd) {
      reject (`No existe ${tipo} con el ID ${id}`)
    }
    else {
      resolve(datobbdd)
    }
  }

  )
  promesa.then (function(resuelto){
    console.log(resuelto);
  }, function (rechazado){
    console.log(rechazado);
  }
  )
}

getDato(salarios,4,"salario")
getDato(empleados,4,"empleado")
