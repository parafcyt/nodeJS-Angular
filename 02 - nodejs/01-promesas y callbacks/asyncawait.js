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

async function getEmpleado(id){
  var empleadobbdd=await empleados.find(empleado=>empleado.id===id)
  if (!empleadobbdd) {
    console.log(`No existe el empleado con el ID ${id}`);
  }
  else{
    console.log(empleadobbdd);
  }
}

getEmpleado(4)

async function getDato(id,bbdd,mensajeTipo){
  var datobbdd= await bbdd.find(dato =>dato.id===id)
  if (!datobbdd) {
    console.log(`No existe el ${mensajeTipo} con el ID ${id}`);
  }
  else{
    console.log(datobbdd);
  }
}

getDato(4,empleados,"empleado")
getDato(4,salarios,"salario")
