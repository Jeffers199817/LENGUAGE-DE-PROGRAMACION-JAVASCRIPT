//For loop

console.log(1);
console.log(2);
console.log(3);
console.log(4);

for (let i = 0; i < 10; i++) {

    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    }else {
        console.log(`El número ${i} es impar`);
    }

}

//Ejemplo de for loop

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Television", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 }
];

 for (let i = 0; i < carrito.length; i++) {
     console.table(carrito[i]);

}


//while loop

let contador = 0;

while (contador < carrito.length) {
    console.log(carrito[contador]);
    contador++;
}

//Do while loop

let contador2 = 2;

do {
    console.log(`Número: ${contador2}`);
    contador2++;
} while (contador2 < 10);
