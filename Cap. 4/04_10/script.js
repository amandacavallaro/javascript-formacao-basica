function Curso(título, instrutora, nível, dataDePublicação, numeroDeVisualizações, atualizaNumeroDeVisualizações) {
    this.título = título,
    this.instrutora = instrutora,
    this.nível = nível,
    this.dataDePublicação = dataDePublicação,
    this.numeroDeVisualizações = numeroDeVisualizações,
    this.atualizaNumeroDeVisualizações = function() {
        return ++curso.numeroDeVisualizações;
    };
}

var cursos = [
    new Curso("JavaScript: Formação Básica", "Amanda Cavallaro",
    1, false, 0),
    new Curso("JavaScript: Formação Básica", "Amanda Cavallaro",
    1, true, 432432432)
]
