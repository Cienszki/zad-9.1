var a = prompt('a'),
	h = prompt('h'),
	triangleArea1 = getTriangleArea(2,2),
	triangleArea2 = getTriangleArea(4,6),
	triangleArea3 = getTriangleArea(9,1);

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		return 'Nieprawidlowe dane';
	}
	else {
		return a*h/2;
	}
}
console.log(getTriangleArea(a,h));

