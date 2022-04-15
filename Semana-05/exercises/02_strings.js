console.log('\n--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('-Exercise 2.a:');

var stringWithUpperCase = 'MyNameIsAlejo';

console.log(stringWithUpperCase.toUpperCase());

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('\n-Exercise 2.b:');

var stringWithoutSubstring = 'MyNameIsAlejo';
var stringWithSubstring = stringWithoutSubstring.substring(0,5);

console.log(stringWithSubstring);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('\n-Exercise 2.c:');

var stringLastCharacters = 'MyNameIsAlejo';
var stringLastThreeCharacters = stringLastCharacters.substring(10,13);

console.log(stringLastThreeCharacters);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('\n-Exercise 2.d:');

var stringExerciseD = 'MyNameIsAlejo';
var stringExerciseDPhase2 = stringExerciseD.substring(0,1).toUpperCase();
var stringExerciseDPhase3 = stringExerciseD.substring(1,13).toLowerCase();

console.log(stringExerciseDPhase2 + stringExerciseDPhase3);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('\n-Exercise 2.e:');

var stringExerciseE = 'My name is Alejo';
var whiteSpace = stringExerciseE.indexOf(' ');

console.log(whiteSpace);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('\n-Exercise 2.f:');

var twoLongWords = 'AUTÓGRAFOS ARGENTINOS';
var twoLongWordsPhase1 = twoLongWords.substring(0,1).toUpperCase();
var twoLongWordsPhase2 = twoLongWords.substring(1,10).toLowerCase();
var twoLongWordsPhase3 = twoLongWords.substring(11,12).toUpperCase();
var twoLongWordsPhase4 = twoLongWords.substring(12,21).toLowerCase();
var twoLongWordsFinal = twoLongWordsPhase1 + twoLongWordsPhase2 + ' ' + twoLongWordsPhase3 + twoLongWordsPhase4;

console.log(twoLongWordsFinal);