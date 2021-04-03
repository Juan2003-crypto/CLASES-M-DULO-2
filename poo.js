const prompt =require('prompt-sync')();
//Programación Orientada a Objetos 

//Creación de un Objeto
var celular={
    color: "Azul",
    peso: "80g",
    numCamaras: 4,
    sistema: "Android",
    duracionBateria: 12,
    prender: function(){return "Prendiendo..."},
    reiniciar: function(){return "Reiniciando..." }
}
console.log(celular);
console.log(celular.prender());

//Obtener el valor de una característca 
console.log(celular.numCamaras);
console.log(celular["numCamaras"]);

class galleta{
    constructor(tamaño, forma,sabor){
        this.tamaño=tamaño;
        this.forma=forma;
        this.sabor=sabor;
        this.hornea=function(){return "horneando..."}
    }
} 
var tamaño=prompt("Dame el tamaño de la Galleta: ");
var forma=prompt("Dame la forma de la galleta: ");
var sabor=prompt("Dame el sabor de la galleta: ");

var galletaChocolate= new galleta(tamaño, forma, sabor);
//var galletaVainilla=new galleta("10x5cm","Rectangular","Vainilla");

//console.log(galletaChocolate);
//console.log(galletaChocolate.hornea());
//console.log(galletaVainilla);
//console.log(galletaVainilla.forma);

//.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
var fruta =  {nombre: "Manzana"}
var fruta2 = {nombre: "Manzana"}

var resultado=(fruta==fruta2 );
console.log(resultado);

var fruta3=fruta;
var resultado2=(fruta3==fruta);
console.log(resultado2);