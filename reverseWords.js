// Importar el módulo readline para leer entrada desde la consola
const readline = require('readline');

// Crear una interfaz de lectura y escritura utilizando readline
const rl = readline.createInterface({
  input: process.stdin,  // Utiliza la entrada estándar (teclado)
  output: process.stdout  // Utiliza la salida estándar (consola)
});

// Definir la función reverseWords que toma una cadena de caracteres como entrada
function reverseWords(inputString) {
  // Dividir la cadena en palabras usando el espacio como separador
  const words = inputString.split(' ');

  // Utilizar la función reverseString para invertir cada palabra
  const reversedWords = words.map(word => reverseString(word));

  // Imprimir el resultado concatenando las palabras al revés
  console.log(`Palabras al revés: ${reversedWords.join(' ')}`);

  // Cerrar la interfaz readline para terminar la entrada del usuario
  rl.close();
}

// Definir la función reverseString que invierte una cadena de caracteres
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Pedir al usuario que introduzca una palabra o frase
rl.question('Introduce una palabra o frase: ', (input) => {
  // Llamar a la función reverseWords con la entrada del usuario como argumento
  reverseWords(input);
});
