Math.random();
//console.log(Math.round(Math.random()*10));

exports.numAleatorio = () =>{
    return resultado= Math.round(Math.random()*10);
}

//Métodos de Cadena de Texto
var cadenaTexto="Hola Lucia, Buenas Tardes";
console.log(cadenaTexto.length); // ----> Contar caracteres 
console.log(cadenaTexto.indexOf("Lucia")); //---> Ubicar una cadena de texto dentro de otra cadena

console.log(cadenaTexto.replace("Lucia" , "Angel"));//--->Cambia el nombre por otro

var nombre=cadenaTexto.slice(12,18) //---> Extrae los valores ubicados en las coordenadas
console.log(nombre);

//--->CADENAS DE EJEMPLO

var cadenaT="cOloR dEl cUaDeRnO/ LiBRetA";
var color= " Azul ";

//Método toUpperCase--toLowerCase
var textofinal=cadenaT.toUpperCase();
console.log(textofinal);
var textofinal=cadenaT.toLowerCase();
console.log(textofinal);

//Método Concat
console.log(textofinal.concat(color));