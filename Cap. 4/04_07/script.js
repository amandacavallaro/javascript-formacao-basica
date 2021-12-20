function findBiggestFraction(a,b) {
    console.log("Fração a: ", firstFraction);
    console.log("Fração b: ", secondFraction);

    var result;

	a>b ? result = ["a: ", a] : result = ["b: ", b];
    return result;
}

var firstFraction = 7/16;
var secondFraction = 13/25;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log("A maior fração é a: " + fractionResult[0] + " com o valor de " + fractionResult[1]);
console.log(result);