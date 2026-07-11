const prompt=require("prompt-sync")();
const menu=require("./menu");
const empleados=require("./empleados");
let opcion=""
do{ menu.mostrarMenu();
    opcion=Number(prompt("Selecione una opcion: "));
switch(opcion){
    case 1: 
    empleados.registrarEmpleado();
     break; 
     case 2:
        empleados.mostrarEmpleados();
        break;
        case 3:
            empleados.editarEmpleados();
            break;
            case 4:
                empleados.eliminarEmpleado();
                break;
                case 5:
                    empleados.reporteEstadistico();
                    break;
                    case 6:
                        console.log("Hasta Luego");
                        break;
        default:
            console.log("Opcion no Valida");
}
}while (opcion != 6);
