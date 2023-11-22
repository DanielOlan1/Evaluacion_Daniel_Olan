// Generar una función que reciba como parámetros, un arreglo de datos enteros y un número entero y diga si la composición de la conjugación (la suma de uno o más valores únicos) de los datos del arreglo logran conformar el segundo parámetro.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarComposicion(arr, objetivo) {
  // Función auxiliar para generar todas las combinaciones posibles
  function generarCombinaciones(idx, sumaActual, combinacionActual) {
    // Verificar si la suma actual es igual al objetivo
    if (sumaActual === objetivo) {
      return true; // Se ha encontrado una combinación válida
    }

    // Iterar sobre el resto del arreglo
    for (let i = idx; i < arr.length; i++) {
      const nuevoSuma = sumaActual + arr[i];
      const nuevaCombinacion = [...combinacionActual, arr[i]];

      // Llamada recursiva para explorar otras combinaciones
      if (generarCombinaciones(i + 1, nuevoSuma, nuevaCombinacion)) {
        return true; // Se encontró una combinación válida
      }
    }

    return false; // No se encontró ninguna combinación válida
  }

  // Llamada inicial a la función auxiliar
  return generarCombinaciones(0, 0, []);
}

// Pedir al usuario que introduzca los valores para el arreglo y el número objetivo
rl.question('Introduce los valores del arreglo separados por comas: ', (entradaArreglo) => {
  rl.question('Introduce el número objetivo: ', (objetivo) => {
    // Convertir la entrada del arreglo en un array de números
    const arreglo = entradaArreglo.split(',').map(num => parseInt(num.trim(), 10));

    // Verificar si la entrada es válida
    if (arreglo.some(isNaN) || isNaN(objetivo)) {
      console.log('Entrada inválida. Asegúrate de ingresar números.');
    } else {
      // Calcular y mostrar el resultado de la verificación
      const resultado = verificarComposicion(arreglo, parseInt(objetivo));
      console.log('Resultado:', resultado);
    }

    rl.close();
  });
});
