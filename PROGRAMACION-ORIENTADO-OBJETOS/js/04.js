//string o cadena de texto 3 formas de declarar una cadena de texto

//se recomienda usar la forma 1
//forma 1 por string o cadena de texto
const producto = "Monitor de 20 pulgadas";


//No se recomienda usar esta forma
//forma 2 por constructor
const producto2 = String('Monitor de 24 pulgadas');

//forma 3 por  new String

const producto3 = new String('Monitor de 27 pulgadas');

console.log( producto);  console.log(typeof producto); //para ver el tipo de dato
console.log(producto2);
console.log(producto3);