// function sumar(n1, n2) {
//     return (n1+n2);
// }

// const resultado = sumar(2, 3);

// console.log(resultado); //5


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(200);

console.log(total); //600

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuesto es: ${totalAPagar}`); //690