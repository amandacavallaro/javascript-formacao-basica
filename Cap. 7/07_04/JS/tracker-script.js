const AREA = document.body;
const CIRCLE = document.querySelector('.circle');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Captura o objeto de evento (movimento do mouse).
    // Obtém a coordenada X (distância da borda esquerda da janela de visualização) através da propriedade clientX.
    // Pega a largura total da janela, subtrai a coordenada atual e a largura do círculo.
    // Faz o mesmo para a coordenada Y (distância da borda superior da janela de visualização).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Define a posição horizontal e vertical.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

// Quando o mouse se move, executa a função mouseCoordinates.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// Quando o mouse toca o círculo, executa a função changeColorOnTouch.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// Quando o mouse sai do círculo, remove estilos embutidos com uma função anônima.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
