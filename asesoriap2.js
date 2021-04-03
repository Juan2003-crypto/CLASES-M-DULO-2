//Crea un programa en donde tengas que adivinar
//las letras de una palabra de 4 letras, tendrás solo 
//4 intentos para adivinarla, en un inicio la palabra
//estará oclta, pero cada vez que aciertes, se mostrará
//la letra, si adivinas la palabra antes de que se te acaben
//los intentos ganas, sino pierdes.

const prompt=require('prompt-sync')();
var palabraoculta=[];
var palabramostrada=["_","_","_","_"];

var contadorAciertos=0;
var contadorFallas=4;

palabraoculta[0]=prompt("Dame la letra número 1: ");
palabraoculta[1]=prompt("Dame la letra número 2: ");
palabraoculta[2]=prompt("Dame la letra número 3: ");
palabraoculta[3]=prompt("Dame la letra número 4: ");
//console.log( palabraoculta);

for(var i=0; i< (palabraoculta.length * 2); i++ ){
    var intento=prompt("Ingresa una letra: ");
    switch(intento){
        case palabraoculta[0]:
            palabramostrada[0]=palabraoculta[0];
            console.log(palabramostrada);
            contadorAciertos++;
            break;
        
        case palabraoculta[1]:
            palabramostrada[1]=palabraoculta[1];
            console.log(palabramostrada);
            contadorAciertos++;
            break;

        case palabraoculta[2]:
            palabramostrada[2]=palabraoculta[2];
            console.log(palabramostrada);
            contadorAciertos++;
            break;
        
        case palabraoculta[3]:
            palabramostrada[3]=palabraoculta[3];
            console.log(palabramostrada);
            contadorAciertos++;
            break;
        
        default:
            console.log("Te equivocaste :(");
            console.log("Te quedan " + contadorFallas + "intentos");
            console.log(palabramostrada);
            contadorFallas--;
        break;
    }
    if(contadorAciertos==4){
        break;
    }
    else if(contadorFallas==0){
        break;
    }
}
if((contadorFallas==0 && contadorAciertos<4)|| (contadorFallas>4)){
    console.log("Perdiste, vuelve a intentarlo");
}
else if(contadorAciertos==4){
    console.log("Ganaste Felicidades");
}