$(document).ready(function () {
    mudaCorStatus("#16DA92");
  });

function carregaPagina(pagina = "index.html") {
    $("#loadPage").load(pagina);
}

function mudaCorStatus(cor) {
    $("#status").css("background-color", cor);
}

$("#menu").onClick(function () {
    $(".links").toggleClass("desaparece");
})