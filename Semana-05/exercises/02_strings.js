// alert("Checking if this works");

// strings exercises
// a.
var stringWithUpperCase = 'MyNameIsAlejo';

console.log(stringWithUpperCase.toUpperCase());

// b.
var stringWithoutSubstring = 'MyNameIsAlejo';
var stringWithSubstring = stringWithoutSubstring.substring(0,5);

console.log(stringWithSubstring);

// c.
var stringLastCharacters = 'MyNameIsAlejo';
var stringLastThreeCharacters = stringLastCharacters.substring(10,13);

console.log(stringLastThreeCharacters);

// d.
var stringExerciseD = 'MyNameIsAlejo';
var stringExerciseDPhase2 = stringExerciseD.substring(0,1).toUpperCase();
var stringExerciseDPhase3 = stringExerciseD.substring(1,13).toLowerCase();

console.log(stringExerciseDPhase2 + stringExerciseDPhase3);

// e.
var stringExerciseE = 'My name is Alejo';
var whiteSpace = stringExerciseE.indexOf(' ');

console.log(whiteSpace);

// f.
var twoLongWords = 'AUTÓGRAFOS ARGENTINOS';
var twoLongWordsPhase1 = twoLongWords.substring(0,1).toUpperCase();
var twoLongWordsPhase2 = twoLongWords.substring(1,10).toLowerCase();
var twoLongWordsPhase3 = twoLongWords.substring(11,12).toUpperCase();
var twoLongWordsPhase4 = twoLongWords.substring(12,21).toLowerCase();
var twoLongWordsFinal = twoLongWordsPhase1 + twoLongWordsPhase2 + ' ' + twoLongWordsPhase3 + twoLongWordsPhase4;

console.log(twoLongWordsFinal);