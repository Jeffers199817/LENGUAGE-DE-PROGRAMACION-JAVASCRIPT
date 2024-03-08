//This

const reservacion = {
    nombre: 'Jefferson',
    apellido: 'Alquinga',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}$`);
    }
}

reservacion.informacion(); //El cliente Jefferson reservó y su cantidad a pagar es de 5000