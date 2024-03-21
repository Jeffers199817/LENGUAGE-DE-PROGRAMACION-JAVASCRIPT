//OBjetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;


//Un objeto agrupa todo en una sola variable
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(producto.precio);
console.log(producto.disponible);

const nombreProducto2= {

    nombreProducto: "Jabon Ecónomico",
    precio: 10,
    disponible: true
}

console.log(`Hola Biemvenido al producto :${producto.nombreProducto} con el precios : ${producto.precio}$ `);
// como llamar a un objeto
console.log(producto);
//como llamar datos de un objeto primera forma
console.log(producto.precio);
//como llamar datos de un objeto segunda forma
console.log(producto['precio']);