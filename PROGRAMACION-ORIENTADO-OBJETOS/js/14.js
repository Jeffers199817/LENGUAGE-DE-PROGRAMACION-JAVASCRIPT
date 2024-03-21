

// Arreglos o Arrays ESTRUCTURA DE DATOS
const numeros = [10, 20, 30, 40, 50];
//IMPREME TODO EL ARRAY
console.log(numeros);
console.log(numeros[0]);
console.table(numeros);
console.log(numeros.length);
console.log(numeros[4]);


//Arreglo de strings o cadenas de texto
const meses = new Array("Enero", "Febrero", "Marzo", "Abril");
console.log(meses);
console.table(meses);
//Acceder a los valores de un arreglo
console.log(meses[1]);

//Arreglo de mezclado con diferentes tipos de datos  y utilizq template String
console.log(`Hoy es el mes de: ${meses[3]}`);


//Arreglo de mezclado con diferentes tipos de datos
const arreglo = ["Hola", 10, true, "si", null, { nombre: "Juan", trabajo: "Programador" },  [1, 2, 3]];

const arreglo2= ["Hola", { nombre1: "Jefferson" , Trabajo: "Programador"}, [1, 2, 3], true, 10, "si", null];
//IMPREME TODO EL ARRAY 
console.table(arreglo);
console.table(arreglo2);


//Conocer la extensión de un arreglo

console.log(arreglo.length);

meses.forEach(function(mes){
    console.table(mes);
});