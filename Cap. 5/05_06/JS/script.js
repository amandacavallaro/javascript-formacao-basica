// Declaramos as constantes
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

// Acha o atributo alt
var altText = THEIMAGE.getAttribute("alt");

// Cria o elemento de legenda de figuras
var captionElement = document.createElement("figcaption");

// Adiciona o valor de alt a legenda
captionElement.append(altText);

// Adiciona a legenda a imagem
FEATURED.append(captionElement);

// Atualiza o valor de alt da imagem THEIMAGE para vazio
THEIMAGE.setAttribute("alt","");

console.log(captionElement);