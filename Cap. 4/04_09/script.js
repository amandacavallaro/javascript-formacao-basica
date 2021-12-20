var curso = new Object();

var curso = {
    título: "Javascript: Formação BSásica",
    instrutora: "Amanda Cavallaro",
    nível: "1",
    dataDePublicação: false,
    numeroDeVisualizações: 0,
    atualizaNumeroDeVisualizações: function() { 
        return ++curso.numeroDeVisualizações;
    }
}

console.log(curso);