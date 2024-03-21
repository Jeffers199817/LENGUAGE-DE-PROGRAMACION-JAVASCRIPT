//Arreglos o Arrays
const numeros = [10, 20, 30, 40, 50];


const meses = new Array("Enero", "Febrero", "Marzo", "Abril");
// console.table(meses);
//

// //acceder a los valores de un arreglo

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);


// //conocer la extensión de un arreglo
// console.log(meses.length);


// //bucle foreach llamar cada elemento del arreglo

// meses.forEach(function (mes) {
//     console.log(mes);
// })

//agregar elementos a un arreglo

// numeros[2] = 60;
// delete numeros[2];
// console.table(numeros);
// //agregar elementos al final de un arreglo

// numeros.push(59,34,62,3);//agrega al final
// console.table(numeros);

// //agregar elementos al inicio de un arreglo
// numeros.unshift(5.5, 6.6, 7.7);//agrega al inicio
 console.table(numeros);


//Eliminar un elemento al final de un arreglo
numeros.pop();//elimina el ultimo elemento
console.table(numeros);
numeros.shift();//elimina el primer elemento
console.table(numeros);

// //quitar un rango de elementos
numeros.splice(1, 2);
console.table(numeros);



// //rest operator o spread operator

const nuevoArreglo = [...meses, "Mayo"];//equivale a meses.push("Mayo");
console.table(nuevoArreglo);

// //rest operator o spread operator con uns shift

const nuevoArreglo2 = ["Mayo", ...meses];//equivale a meses.unshift("Mayo");
console.table(nuevoArreglo2);
