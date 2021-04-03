//Ejemplo Condicionales Parte 3
//Cada vez que una persona ingresa una hora del día
//se mostrará un mensaje que diga el deporte que se
//está realizando en la cancha 

const prompt =require('prompt-sync')();
var horaDia=prompt("Dame la hora: ");
console.log(horaDia);


if((horaDia<=13)&&(horaDia>=11)){
    console.log("Está el equipo de futbol entrenando");
}
else if((horaDia>13)&&(horaDia<=15)){
    console.log("Está el equipo de Fútbol Americano entrenando ");
}
else if((horaDia>15)&&(horaDia<=17)){
    console.log("Está entrenando el equipo de Atletismo ");
}

/*
switch(horaDia<=13){
    case true:
    console.log("Esta el equipo de fútbol entrenando ");
    break;
    
    case false:
    console.log("Está otro equipo entrenando");
    break;
}


//Ejercicio#2
//Al ingresar el nombre de un deporte se imprimirá
//la hora de entrenamiento que corresponde.

var deporte=prompt("Por favor dime el nombre del deporte ");
switch(deporte){
    case "Futbol":
    console.log("Horario de: 11 a 13");
    break;
    
    case "Americano":
    console.log("Horario de 13 a 15");
    break;

    case "Atletismo":
    console.log("Horario de 15 a 17");
}


*/  

//Ingresar valores desde la terminal
//const prompt =require('prompt-sync')();
//var nombre=prompt("Ingresa tu nombre ");
//console.log("Hola " + nombre );