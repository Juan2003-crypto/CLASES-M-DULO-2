//Ejercicio #1
//Escribir un programa que obtenga el
//precio de un producto, y calcule el 
//precio total, ya que también se va a cobrar 
//el costo de envío unicamente si el precio
//del producto es mayor o igual $399

var nombreProducto="Celular";
var precioProducto=10;

function precioTotal( precioProducto, nombreProducto){
    var resultado=0;
    if(precioProducto>=399){
        console.log("F A C T U R A");
        console.log("---Costo del " + nombreProducto + "es " + precioProducto)
        console.log("---Costo envío: 100");
        resultado=precioProducto+100;
        console.log("---El precio a pagar es: " + resultado);
    }
    else if(precioProducto<=399){
        resultado=precioProducto;
        console.log("F A C T U R A")
        console.log("---El total a pagar es: " + resultado);
    }
} 
//precioTotal(precioProducto, nombreProducto);
//precioTotal(400, "Laptop ");

//Ejemplo de Variable Local
function ambitoVar(){
    const i=1;
    if(i==1){
        var variableVar="Ámbito de Variable";
    }
        console.log(variableVar);
}
//ambitoVar();
//console.log(variableVar); -->Error

//let nombre="Luis ";
//nombre= "Pablo";
//console.log( nombre);

function ambitoLet(){
    const i=1;
    if(i==1){
        let  variableLet="Ámbito de variable-Let";
        console.log(variableLet);
    }
}
ambitoLet();

var mensaje="texto";

function mensajeFuncion(){
    var mensaje="Texto 2 ";
    console.log(mensaje);
}
console.log(mensaje);
mensajeFuncion();
console.log(mensaje);

//Hacer el llamado a la Función Líneas arriba 

multiplicar(12);
function multiplicar(primerOperando){
    var resultado=3*primerOperando;
    console.log("El resultado es: " + resultado);
}

//Declaración como expresión
var resultado=function multiplicar(segundoOperando){
    return 3 * segundoOperando;
}
console.log(resultado(12));