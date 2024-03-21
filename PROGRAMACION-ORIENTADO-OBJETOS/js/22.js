//Expresión de la funcion ocn arrow function

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);


const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript');


const cocinando = comida => console.log(`Cocinando ${comida}`);


cocinando('Pizza');

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 }
];

//forEach

meses.forEach(mes => {
    
  console.log(mes);
});

meses.forEach(mes => {
    if (mes == "Marzo") {
        console.log("Marzo si existe");
    }
});

const resultado = carrito.some(producto => producto.nombre == "Celular"); //arrow function para simplificar
console.log(resultado);

//filter
resultado2 = carrito.filter(producto => producto.precio > 400);
console.table(resultado2);	

resultado3 = carrito.filter(producto => producto.nombre != "Celular");
console.table(resultado3);