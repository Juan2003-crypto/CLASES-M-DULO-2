
/*
var texto="Preguntas";
var numValidador=3;
if( ((45-50)<10||"3"==numValidador)&&texto=="PREGUNTAS"){
    texto="Opcion 1";
    console.log(texto);
}
else if(((45-50)>10||"3"===numValidador)){
    texto="Opción 2";
    console.log(texto);
}
else if(((45-50)<10||"3"===numValidador)){
    texto="Opción 3";
    console.log(texto);
}
else{
    texto="Texto Opcional";
    console.log(texto);
}
*/

function letraA(){
    setTimeout(function(){
        console.log("Letra A");
    },0);
    letraB();
    letraD();
    console.log("Letra C");
}
function letraB(){
    setTimeout(function(){
        console.log("Letra B");
    }, 3*1000);
}
function letraD(){
    setTimeout(function(){
        console.log("Letra D");
    },0*1000);
}
letraA();