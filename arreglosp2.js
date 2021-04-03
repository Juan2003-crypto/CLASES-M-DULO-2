//Tema Arreglos Parte 2
var arreglo1=["Hola","Buenas","Tardes"];
var arreglo2=["Adiós","Buenas","Noches"];
console.log(arreglo1.concat(arreglo2));

//Método Sort- Sirve para ordenar 
var frutas1=["Mandarina","Piña","Sandía","Durazno"];
var frutas2=["Mandarina","Piña","Pera","Durazno"];
var arreglonumeros=[5000,10,200,1000,400];
frutas1.sort();
console.log(frutas1);
frutas2.sort();
console.log(frutas2);
arreglonumeros.sort();
console.log(arreglonumeros);

//Ciclo-For
for(var i=10; i>=2; i-- ){
    console.log("Hola - Forma automática," + "i:" + i);
}

var num2=[0,10,200,300,500];
console.log(num2[4]);

for( var i=0;i<num2.length; i++ ){
    console.log("El valor del arreglo en la posicíon " + i +  " es " + num2[i]);
}