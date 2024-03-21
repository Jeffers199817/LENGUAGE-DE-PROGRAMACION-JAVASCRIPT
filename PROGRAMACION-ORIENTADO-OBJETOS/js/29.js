//HERENCIA

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de :$ ${this.precio}`;
  }

  obtenerPrecio() {
    console.log(this.precio);
  }
}

const producto2 = new Producto('Monitor Curvo de 40"', 800);
const producto3 = new Producto("Laptop", 400);

//HERENCIA Heredar tanto metodos como los atributos de una clase.

class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }

  formatearProducto() {
    return `${super.formatearProducto()}y su ISBN es: ${this.isbn}`;
  }

  obtenerPrecio() {
    super.obtenerPrecio();
    console.log("Si hay en existencia");
  }
}

const libro1 = new Libro("Capitan America", 384, "435982983475924");

console.log(libro1.formatearProducto());
console.log(libro1.obtenerPrecio());

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto2.obtenerPrecio());
console.log(producto3);
