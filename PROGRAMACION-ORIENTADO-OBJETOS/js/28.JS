//Clases


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;

    }

    formaterProducto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`
    }



}


class Cliente { 
    constructor(Id, nombre){
        this.Id = Id;
        this.nombre = nombre;
    }
    unificarClienteProducto() {

        return `El nombre del cliente es: ${this.nombre} su id es : ${this.Id}  su producto es ${ this.producto2}`
    }


}
const producto2 = new Producto('Monitor Curvo de 49', 880);
const producto3 = new Producto('Laptop', 300);

const cliente1 = new Cliente(1, "Jefferson Alquinga");
const cliente2 = new Cliente(2, "Matias Pastillo");

console.log(producto2);
console.log(producto3);

//Cliente

console.log(cliente1);
console.log(cliente2);


