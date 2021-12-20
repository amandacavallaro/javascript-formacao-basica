
var i = 1;
var reps = 0;

//while
while (i < 567) {
    // a variável incrementa de 1 e um novo valor é retornado
    ++reps;
    console.log("While: " + reps + " repetições");
    i *= 2.1;
}

// do while
do {
    ++reps;
    console.log("Do while: " + reps + " repetições");
    i *= 2.1;
} while (i < 567);

