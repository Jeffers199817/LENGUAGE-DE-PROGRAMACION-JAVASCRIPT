const boton = document.querySelector("#boton");
boton.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) =>
    console.log(`El resultado es ${resultado}`)
  );
});

//SI EL USUARIO ACEPTO LOS PERMISOS PUEDO PONERLOS A CONTINUACIÓN
if (Notification.permission == "granted") {
  new Notification("Esta es una notificación", {
    icon: "img/image.png",
    body: "Código con Jefferson, los mejores tutoriales"
  });
}
