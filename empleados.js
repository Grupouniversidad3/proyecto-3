const prompt=require("prompt-sync")();
const archivos=require("./archivos");

let empleados=archivos.cargarDatos();

function registrarEmpleado(){
    let nombre= prompt("Ingrese el Nombre del Empleado: ");
    let cargo= prompt("Ingrese el Cargo del Empleado: ");
    let sueldo=Number(prompt("Ingrese el Sueldo quincenal: "));
    let aniosServicio=Number(prompt("Ingrese los años de Servicio: "));    

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
module.exports={
    registrarEmpleado
};
