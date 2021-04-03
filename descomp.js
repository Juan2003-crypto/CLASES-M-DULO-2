let persona={nombre:" Omar ", apellido: " Guerrero ", edad: 20}
//Con Descomposición
//Caso #1
let {nombre, apellido}=persona;
console.log("El nombre es: " + nombre + " " + apellido );

//Sin descomposición
var nombre2=persona.nombre;
var apellido2=persona.apellido;

//Ejemplo #2
let celular={color: " Rojo ", numcamaras: 4 }
let{numcamaras}=celular;
console.log("El número de cámaras es: " + numcamaras);

//Ejemplo #3
var paquete={dirección: " Coop. 12 de Julio " , numeroenvío: 1545, peso:  "5Kg"}
var numeroenvío,peso;
({numeroenvío,peso}=paquete);
console.log(numeroenvío);

//Ejemplo de valor por defecto
let persona2={nombre2:" Omar ", edad: 20}
var { nombre2, apellido: apellido3= " López "}=persona2;
console.log("El nombres es: " + nombre2 + " " + apellido3);

//Descomposición en Funciones 
let envio={
    numEnvio: " 345 ",
    producto: " Videojuego ",
}
function datoEnvio ( {numEnvio,producto} ) {
    console.log(" Número de envío: " + numEnvio);
    console.log(" Producto a enviar: " + producto);
}
datoEnvio(envio);
