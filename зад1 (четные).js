let incluso = [1, 2, 3, 4, 5];

let result = incluso.filter(function(elem) {
	if (elem % 2 == 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result)