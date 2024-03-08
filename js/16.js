//metodoas arrays

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//forEach

meses.forEach(function (mes) {
  //  console.log(mes);
});

carrito.forEach(function (producto) {
  // console.table(producto.nombre);
});

meses.forEach(function (mess) {
  if (mess == "Marzo") {
    console.log("Marzo si existe");
  }
});

//Arrays methods Includes para arrays planos sin ser objetos para saber si un valor existe en un arreglo
resultado = meses.includes("Diciembre");

//console.log(resultado);

//Array methods some ideal para arreglos de objetos para saber si un valor existe en un arreglo de objetos

let resultado4 = carrito.some(function (producto) {
    return producto.nombre == "Celular";
})

//console.log(resultado4);

//Forma mas moderna de hacerlo con arrow functions

let resultado5 = carrito.some(producto => producto.nombre == "Celular"); //arrow function para simplificar
let resultado6 = carrito.some(producto => producto.precio == 480); //arrow function para simplificar
//console.log(resultado5);
//console.log(resultado6);


//Reduce PARA SUMAR VALORES DE UN ARREGLO

resultado23 = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);


console.log(resultado23);

resultado24 = carrito.reduce((total, producto)=>  total + producto.precio, 0);
console.log(resultado24);




//Filter para filtrar valores de un arreglo

resultado25 = carrito.filter(function(producto) {
    return producto.precio >= 400;
}

);
console.log(resultado25);

//forma mas moderna con arrow functions
resultado26 = carrito.filter(producto => producto.precio >= 400);

console.log(resultado26);

//Otro ejemplo con filter
resultado27 = carrito.filter(producto => producto.nombre !== "Celular");
console.log(resultado27);





