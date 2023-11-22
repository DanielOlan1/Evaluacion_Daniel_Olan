//Generar una función que reciba como parámetro un array de datos y retorne un array que contenga los valores pares únicos

// Importar el módulo readline para leer entrada desde la consola
const readline = require('readline');

// Crear una interfaz de lectura y escritura utilizando readline
const rl = readline.createInterface({
  input: process.stdin,  // Utiliza la entrada estándar (teclado)
  output: process.stdout  // Utiliza la salida estándar (consola)
});

// Definir la función obtenerParesUnicos que toma un array de datos como parámetro
function obtenerParesUnicos(arrayDatos) {
  // Filtrar los elementos pares del array original
  const pares = arrayDatos.filter(elemento => elemento % 2 === 0);

  // Eliminar duplicados usando un Set y luego convertir de nuevo a array
  const paresUnicos = [...new Set(pares)];

  // Devolver el array con los valores pares únicos
  return paresUnicos;
}

// Pedir al usuario que introduzca una lista de números separados por comas
rl.question('Introduce una lista de números separados por comas: ', (input) => {
  // Convertir la entrada en un array de números
  const numeros = input.split(',').map(num => parseInt(num.trim(), 10));

  // Llamar a la función obtenerParesUnicos con la lista de números como argumento
  const resultado = obtenerParesUnicos(numeros);

  // Imprimir la lista de números ingresados y la lista de pares únicos
  console.log('Números ingresados:', numeros);
  console.log('Números pares únicos:', resultado);

  // Cerrar la interfaz readline para terminar la entrada del usuario
  rl.close();
});
