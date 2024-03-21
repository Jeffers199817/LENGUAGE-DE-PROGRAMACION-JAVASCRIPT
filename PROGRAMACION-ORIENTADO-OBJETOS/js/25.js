//for each

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Television", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 }
];

//forEach puede ser usado para iterar sobre un arreglo de objetos solamente ahi.

carrito.forEach(function (producto) {
   // console.log(producto);
}
);
//forEach con arrow function

// carrito.forEach(producto => console.log(producto));


// //map

// carrito.map(producto => console.log(producto));

// si quieres presentar en consola utilza el forEach, si quieres crear un nuevo arreglo utiliza el map

const arreglo1 = carrito.forEach(producto => producto.nombre);


//si quieres crear un nuevo arreglo utiliza el map

const arreglo2 = carrito.map(producto => producto.nombre);

console.log(arreglo1);
console.log(arreglo2);