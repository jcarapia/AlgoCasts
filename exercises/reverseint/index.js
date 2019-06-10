// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
// 	const sign = Math.sign(n);
// 	return sign * Number(Math.abs(n).toString().split('').reverse().join(''));
// }

//using parseInt (using parseInt loses the negative sign)
function reverseInt(n) {
	const sign = Math.sign(n);
	return sign * parseInt(n.toString().split('').reverse().join(''));
}

module.exports = reverseInt;

console.log(reverseInt(-15))
