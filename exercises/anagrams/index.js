// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//solution using array.sort()
function anagrams(stringA, stringB){
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string){
	return string.replace(/[^A-Z0-9]/ig, "").split('').sort().join('').toLowerCase();
}

//solution using character maps
// function anagrams(stringA, stringB) {
// 	const strA = stringA.replace(/[^A-Z0-9]/ig, "").toLowerCase();
// 	const strB = stringB.replace(/[^A-Z0-9]/ig, "").toLowerCase();

// 	if(strA.length !== strB.length) return false;

// 	let charMap = {};

// 	for(char of strA){
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}

// 	for(char of strB){
// 		if(!charMap[char]){
// 			return false;
// 		}
// 		charMap[char]--
// 	}

// 	return true;

// }

module.exports = anagrams;

