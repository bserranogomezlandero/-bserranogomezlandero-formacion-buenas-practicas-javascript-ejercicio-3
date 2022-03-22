// Este ejercicio consta de dos partes.
//Primero, hay que añadir en los console.log vacíos los resultados que se mostrarán por consola al pulsar el botón de manera que cada resultado aparezca por duplicado (vosotros añadiréis el segundo resultado de cada par).
// En el segundo apartado debéis modificar el código para mejorarlo aplicando las buenas prácticas que acabamos de ver.

function showResults() {
  // Primera parte. Rellena los console.log vacíos
  try {
    console.log(result1);
    console.log(); // Añade aquí lo que mostrará por consola el console.log anterior

    console.log(result2);
    console.log(); // Añade aquí lo que mostrará por consola el console.log anterior
  } catch (e) {
    console.log('Error por indefinición de variable');
  }

  var result1 = 'Primer resultado';
  let result2 = 'Segundo resultado';

  console.log(result1);
  console.log(); // Añade aquí lo que mostrará por consola el console.log anterior

  {
    var result3 = 'Tercer resultado';
    const RESULT_4 = 'Cuarto resultado';

    {
      try {
        console.log(result3);
        console.log(); // Añade aquí lo que mostrará por consola el console.log anterior

        console.log(RESULT_4);
        console.log(); // Añade aquí lo que mostrará por consola el console.log anterior
      } catch (e) {
        console.log('Error por indefinición de variable');
      }
    }
  }

  try {
    console.log(result3);
    console.log(); // Añade aquí lo que mostrará por consola el console.log anterior

    console.log(RESULT_4);
    console.log(); // Añade aquí lo que mostrará por consola el console.log anterior
  } catch (e) {
    console.log('Error por indefinición de variable');
  }
}

// Segunda parte. Mejora el código aplicando buenas prácticas
var result5 = 'El resultado de la suma es ',
  result6 = new Array(1, 2, 3);

function getSumArrayValues() {
  result6.forEach((arrElem) => {
    var valueToAdd = 2;
    var operationResult = arrElem + valueToAdd;
    if (operationResult == 4) {
      console.log(result5 + operationResult);
    }
  });
}




// A partir de aquí no entra en el ejercicio, es solo para mostrar los resultados
function showSuggestion() {
  console.log(
    decodeURIComponent(
      atob(`JTBBJTIwJTIwY29uc3QlMjBSRVNVTFRfVEVYVCUyMCUzRCUyMCdFbCUyMHJlc3VsdGFkbyUyMGRlJTIwbGElMjBzdW1hJTIwZXMlMjAnJTNCJTBBJTIwJTIwY29uc3QlMjBOVU1CRVJfU1VNX0xJU1QlMjAlM0QlMjAlNUIxJTJDMiUyQzMlNUQlM0IlMEElMjAlMjAlMEElMjAlMjBmdW5jdGlvbiUyMGdldFN1bUFycmF5VmFsdWVzKCklN0IlMEElMjAlMjAlMjAlMjBjb25zdCUyMFZBTFVFX1RPX0FERCUyMCUzRCUyMDIlM0IlMEElMjAlMjAlMjAlMjBOVU1CRVJfU1VNX0xJU1QuZm9yRWFjaChudW1iZXJUb1N1bSUzRCUzRSU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMGNvbnN0JTIwT1BFUkFUSU9OX1JFU1VMVCUyMCUzRCUyMG51bWJlclRvU3VtJTIwJTJCJTIwVkFMVUVfVE9fQUREJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwaWYoT1BFUkFUSU9OX1JFU1VMVCUyMCUzRCUzRCUzRCUyMDQpJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwY29uc29sZS5sb2coUkVTVUxUX1RFWFQlMjAlMkIlMjBPUEVSQVRJT05fUkVTVUxUKSUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMCU3RCklM0IlMEElMjAlMjA
  `)
    )
  );
}
document.getElementById('resultBtn').addEventListener('click', showResults);
document
  .getElementById('suggestionBtn')
  .addEventListener('click', showSuggestion);