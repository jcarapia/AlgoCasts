// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//destroying original array with splice
// function chunk(array, size) {
// 	let result = [];
// 	while(array.length){
// 		result.push(array.splice(0,size));
// 	}

// 	return result;
// }

//using slice to make copies
function chunk(array, size) {
	let result = [];
	let startIndex = 0;
	while(startIndex < array.length){
		result.push(array.slice(startIndex,startIndex + size));
		startIndex+=size;
	}

	return result;
}

module.exports = chunk;
