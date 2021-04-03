//EJEMPLO:
// Dado un número, separarlo en centenas, decenas y unidades,
//Intercambiar la posición entre las centenas y las unidades
// e imprimir el número final 

var numcompleto= 875;
if(numcompleto < 1000 && numcompleto>99 ){
    
    //Calcular centenas
    var centenas= parseInt (numcompleto/100);
    console.log("El valor de las centenas es " + centenas);
    
    //Calcular decenas
    var decenas=parseInt ((numcompleto%100)/10);
    console.log("El valor de las decenas es " + decenas);

    //Calcular Unidades
    var unidades=parseInt(numcompleto%10);
    console.log("El valor de las unidades es " + unidades);

    console.log("El valor final es " + unidades + decenas + centenas);
}
else{
    console.log("Número equivocado, ingrese un valor de 3 cifras");
}

//Condicional Switch
var conswitch="Juan";
var edad=18;
switch (conswitch){
    case 1:
    console.log("Bienvenido al Caso 1");
    break;

    case 2:
    console.log("Bienvenido al Caso 2");
    break;

    default:
    console.log("Hola Juan");
    if(edad==18){
        console.log("Ya eres mayor de edad");
    }
    break;
}