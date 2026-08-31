const botoes = document.querySelectorAll(button);

botoes forEach(function(botao){
let curtiu = false;
botao.addEventListener("click", botaoClicado);
function botaoClicado() {
    let texto = botao.querySelector("span");
    if (curtiu === false) {
        texto.text.Content++;
        curtiu = true;
    } else {
        texto.textContent--;
        curtiufalse
    }
}
})

function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}