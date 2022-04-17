console.log('\n--EXERCISE 3: ARRAYS');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('-Exercise 3.a:');

var monthsExerciseA = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(monthsExerciseA[4] + ' ' + monthsExerciseA[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('\n-Exercise 3.b:');

var monthsExerciseB = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
monthsExerciseB.sort();

console.log(monthsExerciseB);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('\n-Exercise 3.c:');

var monthsExerciseC = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
monthsExerciseC.unshift('Months');
monthsExerciseC.push('alphabetically arranged');

console.log(monthsExerciseC);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('\n-Exercise 3.d:');

var monthsExerciseD = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
monthsExerciseD.shift();
monthsExerciseD.pop();

console.log(monthsExerciseD);

// e. Invertir el orden del array (utilizar reverse).
console.log('\n-Exercise 3.e:');

var monthsExerciseE = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
monthsExerciseE.reverse();

console.log(monthsExerciseE);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('\n-Exercise 3.f:');

var monthsExerciseF = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthsSeparated = monthsExerciseF.join(' - ');

console.log(monthsSeparated);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('\n-Exercise 3.g:');

var monthsExerciseG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var usingSlice = monthsExerciseG.slice(4, 11);

console.log(usingSlice);