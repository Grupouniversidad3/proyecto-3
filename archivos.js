const fs =require("fs");
function cargarDatos() {
    try{
        let datos=fs.readFileSync("nomina.json","utf8");
        return JSON.parse(datos);
    } catch(error){
        return [];

    }
}

function guardarDatos(empleados) {
    fs.writeFileSync("nomina.json",JSON.stringify(empleados,null,2));
    
}
module.exports={
    cargarDatos,guardarDatos
};