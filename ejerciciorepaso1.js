//Para calcular el promedio de prácticas de un curso se tomará la
//calificación de las 4 prácticas que se hicieron, de estas 4 se 
//va a eliminar la práctica con menor calificación y se obtendrá 
//el promedio de las 3 prácticas restantas 
const practicaN1 = 8;
const practicaN2 = 9;
const practicaN3 = 10;
const practicaN4 = 7;
var resultado = 0;
califMenor=practicaN1;

if( practicaN2 < califMenor ){
    califMenor = practicaN2;
}
if( practicaN3 < califMenor ){
    califMenor = practicaN3;
}
if( practicaN4 < califMenor ){
    califMenor = practicaN4;
}

resultado = ( practicaN1 + practicaN2 + practicaN3 + practicaN4 - califMenor ) / 3;
console.log("La calificación menor es " + califMenor);
console.log( "El promedio es: " + resultado );