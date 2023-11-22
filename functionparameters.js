// Generar una función que reciba dos parámetros, los cuales determinen un inicio y un fin, y retorne los números primos gemelos que se encuentren dentro de éste rango. (Investigar que es un número primo gemelo)
    

// Importar el módulo readline para leer entrada desde la consola
const readline = require('readline');

// Crear una interfaz de lectura y escritura utilizando readline
const rl = readline.createInterface({
  input: process.stdin,  // Utiliza la entrada estándar (teclado)
  output: process.stdout  // Utiliza la salida estándar (consola)
});

// Función para verificar si un número es primo
function esPrimo(numero) {
  // Si el número es menor o igual a 1, no es primo
  if (numero <= 1) return false;

  // Iterar desde 2 hasta la raíz cuadrada de numero
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si el número es divisible por i, no es primo
    if (numero % i === 0) {
      return false;
    }
  }

  // Si no se encontraron divisores, el número es primo
  return true;
}

// Función para encontrar números primos gemelos en un rango
function primosGemelosEnRango(inicio, fin) {
  // Array para almacenar los pares de primos gemelos
  const primosGemelos = [];

  // Iterar sobre el rango para encontrar primos gemelos
  for (let i = inicio; i <= fin - 2; i++) {
    const actual = i;
    const siguiente = i + 2;

    // Si ambos números son primos, agregar el par al array
    if (esPrimo(actual) && esPrimo(siguiente)) {
      primosGemelos.push([actual, siguiente]);
    }
  }

  // Devolver el array con los pares de primos gemelos
  return primosGemelos;
}

// Pedir al usuario que introduzca el inicio del rango
rl.question('Introduce el inicio del rango: ', (inicio) => {
  // Pedir al usuario que introduzca el fin del rango
  rl.question('Introduce el fin del rango: ', (fin) => {
    // Convertir las entradas en números enteros
    inicio = parseInt(inicio);
    fin = parseInt(fin);

    // Verificar si las entradas son válidas
    if (isNaN(inicio) || isNaN(fin) || inicio >= fin) {
      console.log('Entradas inválidas. Asegúrate de que el inicio sea menor que el fin.');
      rl.close();
    } else {
      // Calcular y mostrar los primos gemelos en el rango
      const resultado = primosGemelosEnRango(inicio, fin);
      console.log(`Entrada: ${inicio},${fin}`);
      console.log('Salida:', resultado);
      rl.close();
    }
  });
});
