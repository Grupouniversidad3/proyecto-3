const prompt=require("prompt-sync")();
const archivos=require("./archivos");
const SALARIO_MINIMO=130;

let empleados=archivos.cargarDatos();

function validarEmpleado(sueldo,aniosServicio) {
    if(sueldo<=SALARIO_MINIMO){
        console.log("ERROR: El Sueldo debe ser Mayor al Sueldo Minimo.");
        return false;
    }
    if(aniosServicio<0){
        console.log("ERROR: Los años de Servicios no pueden ser negativos.");
        return false;
    }
return true;   
}
function registrarEmpleado(){
    let nombre= prompt("Ingrese el Nombre del Empleado: ");
    let cargo= prompt("Ingrese el Cargo del Empleado: ");
    let sueldo=Number(prompt("Ingrese el Sueldo quincenal: "));
    let aniosServicio=Number(prompt("Ingrese los años de Servicio: "));  
    
    if(!validarEmpleado(sueldo,aniosServicio)){
        return;
    }
let nuevoEmpleado={
    nombre:nombre,
    cargo:cargo,
    sueldo:sueldo,
    aniosServicio:aniosServicio
};
empleados.push(nuevoEmpleado);
archivos.guardarDatos(empleados);
console.log("Empleado Registrado Correctamente");
}
function mostrarEmpleados() {
    if(empleados.length===0){
        console.log("No hay Empleados Registrados. ");
        return;
    }
    for(let i=0; i < empleados.length;i++){
   console.log("=======================");
   console.log("Empleado #",(i+1));
   console.log("Nombre:",empleados[i].nombre);
   console.log("Cargo:",empleados[i].cargo);
   console.log("Sueldo:",empleados[i].sueldo);
   console.log("Años de servicios:",empleados[i].aniosServicio);
   console.log("=======================");
    }
}
function editarEmpleados() {
    mostrarEmpleados();
    let consulta=Number(prompt("Ingrese El Numero Del Empleado: "));
    let indice= consulta-1;

    if(indice < 0 || indice>=empleados.length){
        console.log("Empleado no Encontrado");
          return;
    }
    let nombre= prompt("Ingrese el NUevo Nombre : ");
    let cargo= prompt("Ingrese el Nuevo Cargo del Empleado: ");
    let sueldo=Number(prompt("Ingrese el Nuevos Sueldo quincenal: "));
    let aniosServicio=Number(prompt("Ingrese los Nuevos años de Servicio: ")); 
   if(!validarEmpleado(sueldo,aniosServicio)){
        return;
    }
    empleados[indice].nombre=nombre;
    empleados[indice].cargo=cargo;
    empleados[indice].sueldo=sueldo;
    empleados[indice].aniosServicio=aniosServicio;
    
    archivos.guardarDatos(empleados);
    console.log("Empleado Editado Correctamente.");
}
function eliminarEmpleado() {
    mostrarEmpleados();
   let consulta=Number(prompt("Ingrese El Numero Del Empleado: "));
    let indice= consulta-1;

    if(indice < 0 || indice>=empleados.length){
        console.log("Empleado no Encontrado");
          return;
}
empleados.splice(indice,1);
archivos.guardarDatos(empleados);
console.log("Empleado Eliminado Correctamente.");
}
function reporteEstadistico(){

    if(empleados.length === 0){
        console.log("No hay empleados registrados.");
        return;
    }
    let sumaSueldos = 0;
    let empleadoMayor=empleados[0];

    for(let i = 0; i < empleados.length; i++){
        sumaSueldos += empleados[i].sueldo;
        if(empleados[i].aniosServicio>empleadoMayor.aniosServicio){
            empleadoMayor=empleados[i];
        }

    }
    let promedio = sumaSueldos / empleados.length;
    console.log("===== REPORTE ESTADÍSTICO =====");
    console.log("Total de empleados:", empleados.length);
    console.log("Promedio de sueldo:", promedio.toFixed(2));
    console.log("Gasto total de la empresa en la quincena:  ",sumaSueldos)
    console.log("------------------------------");
    console.log("Empleado con más años de servicio:");
    console.log("Nombre:", empleadoMayor.nombre);
    console.log("Cargo:", empleadoMayor.cargo);
    console.log("Años de servicio:", empleadoMayor.aniosServicio);
}
module.exports={
    registrarEmpleado,
    mostrarEmpleados,
    editarEmpleados,
    eliminarEmpleado,
    reporteEstadistico
};

