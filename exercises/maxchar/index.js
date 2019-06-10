// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let counts = {};
	let maxChar = '';
	let maxCharCount = 0;

	for (let char of str){
		if(!counts[char]){
			counts[char] = 1;
		} else {
			counts[char]++;
		}

		/*the above can be condensed to:
			counts[char] = counts[char] + 1 : 1;
		*/

		if(counts[char] > maxCharCount){
			maxCharCount = counts[char];
			maxChar = char;
		}
	}

	return maxChar;
}

module.exports = maxChar;

