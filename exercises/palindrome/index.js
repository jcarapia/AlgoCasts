// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//tacocat

// function palindrome(str) {
// 	let start = 0;
// 	let end = str.length - 1;

// 	while(start < end){
// 		if(str[start] !== str[end]) return false;
// 		start++;
// 		end--;
// 	}

// 	return true;
// }

function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - 1 - i];
	})
}

//Solution using .every


//Solution using native methods
// function palindrome(str) {
// 	const rev = str.split('').reverse().join('');

// 	return rev === str;
// }



module.exports = palindrome;
