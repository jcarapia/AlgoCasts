// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// -- Traditional for loop -- 
// function reverse(str) {
// 	let reverse = '';

// 	for(let i = str.length-1; i >= 0; i--){
// 		reverse += str[i];
// 	}

// 	return reverse;
// }

// -- es6 for loop 
// function reverse(str) {
// 	let reverse = '';

// 	for(let char of str){
// 		reverse = char + reverse;
// 	}

// 	return reverse;
// }

// -- using reduce
function reverse(str) {
	return str.split('').reduce((accum, char) =>{
		return char + accum;
	}, '')
}

//not included -- str.split('').reverse().join('');

module.exports = reverse;

