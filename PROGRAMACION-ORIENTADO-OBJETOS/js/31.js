//PROMESAS


const usuarioAutenticado = new Promise((resolve, reject)=> {
    
const auth = true;
    
    if (auth) { 

        resolve("Usuario autenticado");  // si el promise se cumple
    
    } else {

        reject("Usuarion no autenticado");// si el promise no se complue
        


}
    


})


usuarioAutenticado
    .then(resolve=>console.log(resolve))
    .catch(error => console.log(error) )

//En los promises existen 3 valores
// Pending : no se ha cumplido pero tampoco se ha rechazado 
// Fulfilled: ya se cumplio
//Rejected : se ha rechazado o no se pudo cumpli 
