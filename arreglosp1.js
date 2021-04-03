/*
var arregloNum=[1,2,3,4,5];
console.log(arregloNum);
var arregloNombre=["Juan","Luis","Patricio","Eduardo"];
console.log(arregloNombre);
var arreglomixto=[1,"Juan",2,"Luis",true,false];
console.log(arreglomixto);
console.log(arregloNombre[0]);

//Cambiar el nombre de un item de un arreglo
arregloNombre[2]="Manuel";
console.log(arregloNombre[2]);

//Borrar un item de un arreglo
delete arregloNombre[2];
console.log(arregloNombre);

//Visualizar cuantos items tiene un arreglo
console.log("La cantidad de elementos en el arreglo Nombres es " + arregloNombre.length);

//Agregar un Item a un arreglo
arregloNombre.push("Cristina");
console.log(arregloNombre);

//Borrar un Item de un arreglo
arregloNombre.pop();
console.log(arregloNombre);

//Splice
arregloNombre.splice(0,0,"Cristina");
console.log(arregloNombre);
//Splice2
arregloNombre.splice(1,4);
console.log(arregloNombre);
*/

//Ejercicio
//Realizar un programa que lea por teclado 5 notas 
//y muestre el promedio de estas 
const prompt = require('prompt-sync')();
var calificaciones=[];
calificaciones[0]=prompt("Dame la primera calificación: ");
calificaciones[1]=prompt("Dame la segunda calificiación: ");
calificaciones[2]=prompt("Dame la tercera calificiación: ");
calificaciones[3]=prompt("Dame la cuarta calificiación: ");
calificaciones[4]=prompt("Dame la quinta calificiación: ");

var calif1=calificaciones[0];
var calif2=calificaciones[1];
var calif3=calificaciones[2];
var calif4=calificaciones[3];
var calif5=calificaciones[4];

var resultado=(parseInt(calif1) + parseInt(calif2)+parseInt(calif3) + parseInt(calif4)+ parseInt(calif5))/5;
console.log("El promedio final es " + resultado);

var arreglo1=["Hola","Juan","Adiós"];
var arreglo2=["Rojo","Amarillo","Azul"];
console.log(arreglo1.concat(arreglo2));