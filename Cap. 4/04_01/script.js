// Uma função normal, chamada de forma explícita pelo nome:
function multiplicaTermos(a, b) {
    var resultado = a * b;
    console.log(a + " multiplicado por " + b + " é: ", resultado);
    return resultado;
}
 multiplicaTermos(3, 4);

// Função anônima armazenada na variável.
// Invocada ao fazer a chamada da variável como uma função:
var divideTermos = function() {
    var resultado = 3 / 4;
    console.log("3 dividido por 4 é: ", resultado);
}
divideTermos();

// Expressões de Funções Imediatamente Invocadas.
// É executado assim que o navegador a encontra:
(function() {
    var resultado = 12 / 0.75;
    console.log("12 dividido por 0.75 é: ", resultado);
}())
