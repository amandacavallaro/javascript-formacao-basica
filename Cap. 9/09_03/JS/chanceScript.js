const MIN = 0;
const MAX = 36;
var testNumber = 15;
var i = 1;

while (MAX) {
    let randomValue = Math.floor(Math.random() * (MAX - MIN)) + MIN;

    if (randomValue == testNumber) {
        break;
    }

    console.log("Round número " + i + ": Achei o valor " + randomValue);
    i++;
}

console.log("O script rodou " + i + " vezes de achar o " + testNumber + ".");
