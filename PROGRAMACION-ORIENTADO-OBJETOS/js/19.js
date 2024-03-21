//Funciones con parámetros y argumentos
//  Los argumentos son los valores reales que se pasan a la función
//  Los parámetros son las variables que se declaran en la función
function sumar(numero1=0,numero2=0, ) {
    console.log(numero1 + numero2);
    
}
sumar(3,5);//Argumentos o valores reales

const sumar2 = function(n1, n2) {
    console.log(n1+n2);
}

sumar2(2, 5);

//Parámetros por default en las funciones

sumar(5); //NaN