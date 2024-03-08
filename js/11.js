//Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true

}

//Forma anterior de acceder a los datos destructuring
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;
// console.log(nombreProducto);
// console.log(precioProducto);


//Destructuring forma nueva de acceder a los datos o sacar datos de un objeto

const { disponible,precio, nombreProducto } = producto;

console.log(nombreProducto);
console.log(precio);
console.log(disponible);