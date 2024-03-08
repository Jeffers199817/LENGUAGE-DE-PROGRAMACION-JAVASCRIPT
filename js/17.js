//Declaración de Función 
const a = 1;
const b = 2;

function sumar(a, b) {
;
    console.log(a+b);
}


sumar(a, b);


//Expresión de Función

const sumar2 = function () {
    console.log(3+3);
}

sumar2();


//IIFE sirve para que una función se ejecute inmediatamente sin tener que llamarla
//Se usa para proteger el scope global y no se mezclen las variables de diferentes archivos



(function (){

    console.log("Esto es una función IIFE");
    
})();

console.log(cliente);