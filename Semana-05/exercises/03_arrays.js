// alert("Checking if this works");

// array exercises
// a.
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(months[4] + ' ' + months[10]);

// b.
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
months.sort();

console.log(months);

// c.
months.unshift('Months');
months.push('alphabetically arranged');

console.log(months);

// d.
months.shift();
months.pop();

console.log(months);

// e.
months.reverse();

console.log(months);

// f.
var monthsSeparated = months.join(' - ');

console.log(monthsSeparated);

// g.
var monthsSlice = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var usingSlice = monthsSlice.slice(4, 11);

console.log(usingSlice);