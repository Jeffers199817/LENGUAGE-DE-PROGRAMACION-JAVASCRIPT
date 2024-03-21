// //Estructura de control

// const puntaje = 1000;

// if(puntaje == 1000){
//     console.log('Si es igual');
// } else {
//     console.log('No es igual');
// }


// const efetivo = 1000;
// const carrito = 800;

// if(efetivo > carrito){
//     console.log('El usuario puede pagar');
// }else {
//     console.log('Fondos insuficientes');
// }

// const rol = 'ADMINISTRADOR';

// if(rol === 'ADMINISTRADOR'){
//     console.log('Acceso a todo el sistema');
// }else if(rol === 'EDITOR'){
//     console.log('Eres editor, puedes entrar pero no puedes hacer mucho');
// }
// else {
//     console.log('No tienes acceso');
// }   
// //Comparar con el switch


const metodoPago = 'tarjeta';

switch (metodoPago) {

    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no has pagado o metodo no soportado');
        break;


}