//String o cadenas de texto

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web completo"';
const producto2 = 'Monitor HD"'; //para usar comillas dentro de un string

console.log(tweet.length);
console.log(producto2);


//Indexof para encontrar una palabra en un string retorna la posicion de la palabra
console.log(tweet.indexOf('JavaScript')); //devuelve la posicion de la palabra
console.log(producto2.indexOf('Tanblet')); //devuelve -1 si no encuentra la palabra

//includes revisa si una palabra existe en un string

console.log(tweet.includes('JavaScript')); //devuelve true si encuentra la palabra
console.log(producto2.includes('Tanblet')); //devuelve false si no encuentra la palabra