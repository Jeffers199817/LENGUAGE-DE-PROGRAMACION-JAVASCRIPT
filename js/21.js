//Métodos de propiedad

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo Canción con el id: ${id}`);
  },

  pausar: function () {
    console.log(`Pausando...... `);
  },

  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist: ${nombre}`);
  },
  reproducirMusica: function (nombre) {
    console.log(`Reproduciendo la música: ${nombre}`);
  }
};

reproductor.borrarCanción = function (id) {
    console.log(`Borrando la canción: ${id}`);
}




reproductor.reproducir(3840);

reproductor.pausar();

reproductor.borrarCanción(20); //Error

reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirMusica('Heavy Metal');
