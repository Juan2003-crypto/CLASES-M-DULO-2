//While-Ciclo
var contador1=5;
var contador2=30;
while(contador1<=10 && contador2>20){
    console.log("Contador #1:" + contador1 + " Contador#2  " + contador2);
    contador1++;
    contador2--;
}
var contador3=0;
var condicion="Hola";
//Ciclos Do-While
do{
    console.log("Entraste al ciclo Do While" );
    contador3++;
    if(contador3==2){
        condicion="Adiós";
    }
    
}while (condicion=="Hola");

var condicion2=5;
do{
    console.log("Valor: " + condicion2);
    condicion2-=5;
}while( condicion2>=5 );

//Ejercicio Do-While
//Crear un programa que lea tantos números 
//como se quiera hasta que se reciba un cero,
//y se mostrará un resultado, que será la suma
//de todos los números ingresados.
const prompt=require('prompt-sync')();
var recibenumero;
var suma = 0;

do{
    recibenumero=prompt("Dame un número: ");
    suma= suma + parseInt(recibenumero);

}while(recibenumero != 0)
    console.log("La suma total es: " + suma);

//Ejercicio-While
recibenumero=prompt("Dame un Número: ");
while( recibenumero!=0){
    suma=suma+parseInt(recibenumero);
    recibenumero=prompt("Dame un número: ");
}
console.log("La suma total con while es: " + suma);