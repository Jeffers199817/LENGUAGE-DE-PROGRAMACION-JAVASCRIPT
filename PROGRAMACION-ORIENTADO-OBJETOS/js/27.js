//Poo

// Object Literal

const producto = { 
    nombre: 'Tablet ',
    precio: 500
}


// Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

}
// crear funciones que solo se utiliza en un objeto en especifico 
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`; 
} 


const producto2 = new Producto("Monitor Curvo de 49", 800);
const producto3 = new Producto("Laptop", 400);


function formatearProducto(producto) {
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`
}
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());




