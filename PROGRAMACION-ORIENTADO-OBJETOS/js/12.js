
// "use strict";//modo estricto corre el código de una manera más estricta
//OBjetos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};
//UTILIZAR OBJECT FREEZE PARA QUE NO SE PUEDA MODIFICAR,AGREGAR,ELIMINAR DATOS DEL OBJETO

//Si no deseas modificar un dato del objeto debes hacerlo de la siguiente manera
//con la función object.freeze() no se puede modificar el objeto

// Object.freeze(producto);
// producto.imagen = "imagen.jpg";


// console.log(Object.isFroze(producto));
// console.log(producto);


//UTILIZAR OBJECT ISFROZEN PARA QUE NO SE PUEDA MODIFICAR EL OBJETO


//Diferencia entre object.freeze y object.isfrozen es que el primero no se puede modificar el objeto y el segundo es para ver si el objeto esta congelado o no

//Utilizar Object seal para que no se pueda agregar ni eliminar datos del objeto pero si se puede modificar