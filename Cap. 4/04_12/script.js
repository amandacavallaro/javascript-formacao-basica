function fazerCalculo() {
	var a = 5;
	var b = 4;
	
	function multiplicarTermos() {
		var resultadoMultiplicação = a * b;
		return resultadoMultiplicação;
	}

	return multiplicarTermos;
}

var resultado = fazerCalculo();

console.log("O resultado: ", resultado());


