const botoes = document.querySelectorALL("button");

botoes.forEach(function (botao) {
let curtiu = false ;
botao.addEventListener("click", botaoClicado);
function botaoClicado () {
let texto = botao.querySelectorALL("span");
if (curtiu === false) {
    texto.textContent++;
    curtiu = true;
} else {
    texto.textContent--;
    curtiu = false;
}
}
})