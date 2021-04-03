//Operador Suma
var valor1=2;
var valor2=4;
var resultado=valor1+valor2;
console.log(resultado);

//Operador Resta
var valres1=10;
var valres2=5;
var resta=valres1-valres2;
console.log("El resultado de la resta es" + resta);

//Operador Multiplicación
var valor3=9;
var valor4=2;
var resultado2=valor3*valor4;
console.log("El resultado de la multiplicación es " + resultado2);

//Operadores División
var resultado3= resultado2/resultado;
console.log("El resultado de la división es: " + resultado3);

//Operador de Incremento ++
resultado3++;
console.log("El incremento del resultado de la División es " + resultado3);

//Operador de Asignación=
valor1=valor2;
console.log("El valor asignado al valor 2 es " + valor1);

//Operador de Asignación +=
valor3+=valor4; 
console.log("El resultado de +=  es " + valor3);

//Operadoes de Comparación ==
var nComparacion1= 5;
var nComparacion2=2;
var resultComparativo=(nComparacion1==nComparacion2);
console.log("El resultado de la comparación es " + resultComparativo);

//Operador de Comparación ===
var nComparacion3="5";
var resulComp2=(nComparacion1===nComparacion3);
console.log("El resultado de la segunda comparación es " + resulComp2);

//Operador de Comparación !=
var diff=(nComparacion1!=nComparacion2);
console.log("El resultado de la tercera comparación es " + diff);

//Operador de Comparación !==
var diff2=(nComparacion1!==nComparacion3);
console.log("El resultado de la cuarta diferencia es " + diff2);

//Operador de Comparación > Mayor que
var menorque= (nComparacion1>nComparacion2);
console.log("El valor 1 es mayor que el valor 2: " + menorque);

//Operador de Comparación < Menor que 
var mayorque= (nComparacion2<nComparacion1);
console.log("El valor 2 es mayor al valor 1 " + mayorque);

//Operador de Comparación >= Mayor o igual que
var mayigual= (nComparacion3>=nComparacion2);
console.log("El valor 3 es mayor o igual que el valor 2 " + mayigual);

//Operador de Comparación <= Menor o igual que 
var menigual=(nComparacion1<=nComparacion3);
console.log("El valor 1 es menor o igual que valor 3 " + menigual);

// Operadores Lógicos 
//Operador && ("AND")
var opeLog1 =5;
var opeLog2=50;
var opeLog3=25;
var resulOpeLog=(opeLog1<opeLog2)&&(opeLog2<opeLog3);
console.log("El resultado del Operador && es: " + resulOpeLog);

//Operador || ("OR" o "O")
var resulOpeLog2=(opeLog1<opeLog2) || (opeLog2<opeLog3);
console.log("El resultado del Operador || es " + resulOpeLog2);

//Resultado Operador &&
//true && true = true
//false && false= false
//false && true= false
//true && false= false 

//Resultado Operador ||
// true || true = true 
// false || false= false
// false || true = true 
// true || true= true 

//Operador Negación !
var resulOpeLogNeg=!resulOpeLog2;
console.log("El resultado del Operador ! es " + resulOpeLogNeg);