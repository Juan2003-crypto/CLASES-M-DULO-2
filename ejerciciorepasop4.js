//Declarar una matriz 
let matrizPeces=[
        ["Salmón","Atún"],["Cangrejo","Pez Globo"]              
];
console.log(matrizPeces[0][1]);

//Descomposición de Objeto
let producto={
    nombreProducto:"Chocolate",
    precio:25,
    peso: "1.5 Kg",
    cantidad: 5
}

let{nombreProducto,peso}=producto;
console.log(nombreProducto);
console.log(peso);