//Declaración de una función
function multiplicar(primerOperando, segundoOperando){
    var resultado=primerOperando*segundoOperando;
    console.log("El resultado es: " + resultado);
}
multiplicar( 12,2);

function multiplicar3(){
    var resultado=2*2;
    console.log("El resultado es " + resultado);
}
multiplicar3();

//Función como Expresión
var resultado= function  multiplicar2(primerOperando){
    return 2*primerOperando;
}
console.log("El resultado es " + resultado(25));

//Función Flecha
//Función que saluda a una persona
const saludaPersona=(nombre)=> console.log("Hola " + nombre);
saludaPersona("Juan");

const suma=(numero)=> console.log (numero + 2 );
suma(12);

//Ejercicio #1
//Escribir un programa que tenga una función a la que
//se le pasa un parámetro un número y devuelve como
//resutlado un texto que indica si el número es par o impar

function determinaNumero( numero){
    if(numero%2==1){
        console.log("El número es impar ");
    }
    else if(numero%2==0){
        console.log("El número es par ");
    }
}
determinaNumero(0);

//Ejercicio #2
//Definir una función que muestre la información de un texto
//que se introduce como argumento y determinar si el texto
//contiene mayúsculas, minúsculas o ambas.

function determinaTexto(texto){
    if(texto==texto.toUpperCase()){
        console.log("El texto esta en mayúscula ");

    }
    else if(texto==texto.toLowerCase()){
        console.log("El texto está en minúscula")
    }
    
}
determinaTexto("hola");