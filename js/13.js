//Como unir 2 objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medidas };
console.log(producto);
console.log(medidas);
console.log(nuevoProducto); //se unen los objetos en uno solo