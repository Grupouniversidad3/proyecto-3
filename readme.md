Directorio de Nomina (RRHH) - Equipo 3
Integrantes del Equipo
Roberto Viloria - C.I: 33465935
Guillermo Moron - C.I: 31808987
Josue Paredes - C.I: 30200017
Alberth Delgado - C.I: 34641097
Kenedi Juares - C.I: 31732622

# Sistema de Gestión de Nómina (CLI)

## Descripción

Este proyecto consiste en una aplicación de consola (CLI) desarrollada en Node.js para la gestión de empleados de una empresa. El sistema implementa las operaciones CRUD (Crear, Leer, Actualizar y Eliminar), permitiendo registrar, mostrar, editar y eliminar empleados, además de generar un reporte estadístico y mantener la persistencia de los datos mediante un archivo JSON.

## Objetivo

Desarrollar un sistema de gestión de nómina que permita administrar la información de los empleados de manera organizada, aplicando los conceptos de programación vistos durante el curso, como funciones, arreglos, objetos, modularización, archivos JSON y persistencia de datos.

## Funcionalidades

- Registrar empleados.
- Mostrar todos los empleados registrados.
- Editar la información de un empleado.
- Eliminar empleados.
- Generar un reporte estadístico.
- Guardar automáticamente los cambios en un archivo JSON.
- Cargar automáticamente la información almacenada al iniciar el programa.

## Datos registrados

Cada empleado contiene la siguiente información:

- Nombre completo.
- Cargo a desempeñar.
- Sueldo quincenal.
- Años de servicio.

## Validaciones implementadas

El sistema valida que:

- El sueldo quincenal sea estrictamente mayor al salario mínimo establecido en la lógica del sistema.
- Los años de servicio no sean negativos.

Si alguna de estas condiciones no se cumple, el registro o la edición del empleado es cancelado y se muestra el mensaje correspondiente.

## Reporte Estadístico

El sistema cuenta con una opción de