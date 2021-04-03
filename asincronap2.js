/*
console.log( " Hola ");
setTimeout(function timeout(){
    console.log("Mundo");

}, 4 * 1000);
console.log("Hola a los participantes");
*/

function primero(callback){
    setTimeout(function(){
        return callback("Imprime la letra A")
    }, 2 * 1000)
}
function segundo (callback){
    return callback("Imprime la letra B");
}
primero(function (resultado1) {
    console.log(resultado1);
    console.log("Imprime la letra B");
    console.log("Imprime la letra C");
    })
