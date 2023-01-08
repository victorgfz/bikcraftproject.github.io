
// ativar menu header

const links = document.querySelectorAll(".header-menu a")
function ativoLink(link) {
    if (location.href.includes(link.href)) {
        link.classList.add("ativo")
    }

}
links.forEach(ativoLink)



// ativar items do orçamento

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if (elemento) {
        elemento.checked = true
    }
}

parametros.forEach(ativarProduto)

// ativar as perguntas

const perguntas = document.querySelectorAll(".seg-faq-item-question")


function ativarPergunta(event) {

    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute("aria-controls")
    const resposta = document.getElementById(controls)
    resposta.classList.toggle("ativoPerguntas")
}

function eventosPergunta(pergunta) {
    pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPergunta)


// galeria de fotos

const bicicletas = document.querySelectorAll(".mod-main-imgs img")
const bicicletasContainer = document.querySelector(".mod-main-imgs")


function mudarOrdem(event) {
    const img = event.currentTarget
    if (matchMedia("(min-width: 600px)").matches) {
        bicicletasContainer.prepend(img)
    }
}

function ativarBicicletas(img) {

    img.addEventListener("click", mudarOrdem)
}

bicicletas.forEach(ativarBicicletas)

// plugin animar

if (window.SimpleAnime) {
    new SimpleAnime();
}

