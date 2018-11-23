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

//función para tener empleado por id
// let getEmpleado = (id, colback) =>{
//   let empleadobbdd=empleados.find(empleado=>empleado.id===id) //recorre todos los id
//     if (!empleadobbdd) {
//         colback(`No existe empleado con el id:${id}`);
//     }
//     else {
//       colback(null,empleadobbdd);
//     }
// }




// getEmpleado (4,(noExiste,empleado)=>{
//   if (noExiste) {
//     console.log(noExiste);
//   }
//   else {
//     console.log(empleado);
//   }
// }
// );

//función para obtener salario x id
// let getSalario = (id,colback) =>{
//   let salariobbdd=salarios.find(salario=>salario.id==id)
//   if (!salariobbdd) {
//     colback(`No existe salario para el id:${id}`);
//   }
//   else {
//     colback(null,salariobbdd);
//   }
// }

function getSalario(id,colback){
  var salariobbdd=salarios.find(salario=>salario.id==id) //find devuelve el valor del 1er.elemento
                                                        //del array que cumple la condicion, sino encuentra devuelve undefined
  if (!salariobbdd) {
    colback(`No existe salario para el id:${id}`);
  }
  else {
    colback(null,salariobbdd);
  }
}

function paraColback(noExiste,salario){
  if (noExiste) {
    console.log(noExiste);
  }
  else {
    console.log(salario);
  }
}

getSalario (4,paraColback);

function getDato(id,bbdd,colback){
  var datobbdd=bbdd.find(dato=>dato.id==id)
  if (!datobbdd) {
    colback(`No existen datos para el id:${id}`);
  }
  else {
    colback(null,datobbdd);
  }

}

getDato(1,salarios,paraColback);
getDato(1,empleados,paraColback);

// getSalario (4,(noExiste,salario)=>{
//   if (noExiste) {
//     console.log(noExiste);
//   }
//   else {
//     console.log(salario);
//   }
// }
// );
