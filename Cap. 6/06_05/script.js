const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var data = new Date();
console.log(data);

let hr = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();
console.log("Hora: " + hr + " Minuto: " + min + " Segundo: " + seg);

let posicaoHr = (hr*360/12)+(min*(360/60)/12);
let posicaoMin = (min*360/60)+(seg*(360/60)/60);
let posicaoSeg = seg*360/60;

PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)";
PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";








