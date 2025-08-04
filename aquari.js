var aquario = window.document.getElementById("aquarium")
var filtro = window.document.getElementById("filtrum")
var decoracao = window.document.getElementById("decoracaum")
var planta = window.document.getElementById("plantaum")

var div = window.document.getElementById("divindade")
filtro.addEventListener("mouseenter", aumentarfiltro)
filtro.addEventListener("mouseout", diminuirfiltro)
aquario.addEventListener("mouseenter", aumentaraquario)
aquario.addEventListener("mouseout", diminuiraquario)
decoracao.addEventListener("mouseenter", aumentardecoracao)
decoracao.addEventListener("mouseout", diminuirdecoracao)
planta.addEventListener("mouseenter", aumentarplanta)
planta.addEventListener("mouseout", diminuirplanta)

var paragrafofiltro = window.document.getElementById("paragrafofiltro")

var paragrafodecoracao = window.document.getElementById("paragrafodecoracao")

var paragrafoaquario = window.document.getElementById("paragrafoaquario")

var paragrafoplanta = window.document.getElementById("paragrafoplanta")

paragrafofiltro.style.backgroundColor = "white"
paragrafofiltro.style.borderRadius = "10px"
paragrafofiltro.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.363)"
paragrafofiltro.style.width = "100px"
paragrafofiltro.style.textAlign = "center"

paragrafodecoracao.style.backgroundColor = "white"
paragrafodecoracao.style.borderRadius = "10px"
paragrafodecoracao.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.363)"
paragrafodecoracao.style.width = "165px"
paragrafodecoracao.style.textAlign = "center"

paragrafoaquario.style.backgroundColor = "white"
paragrafoaquario.style.borderRadius = "10px"
paragrafoaquario.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.363)"
paragrafoaquario.style.width = "165px"
paragrafoaquario.style.textAlign = "center"

paragrafoplanta.style.backgroundColor = "white"
paragrafoplanta.style.borderRadius = "10px"
paragrafoplanta.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.363)"
paragrafoplanta.style.width = "165px"
paragrafoplanta.style.textAlign = "center"

function aumentarfiltro() {
    filtro.style.height = "170px"
    filtro.style.width = "170px"
    paragrafofiltro.style.visibility = "visible"
    filtro.style.borderRadius = "10px"
}

function diminuirfiltro() {
    filtro.style.height = "150px"
    filtro.style.width = "150px"
    paragrafofiltro.style.visibility = "hidden"
    filtro.style.borderRadius = "100px"
}

function aumentaraquario() {
aquario.style.height = "170px"
aquario.style.width = "170px"
paragrafoaquario.style.visibility = "visible"
aquario.style.borderRadius = "10px"

}

function diminuiraquario() {
aquario.style.height = "150px"
aquario.style.width = "150px"
paragrafoaquario.style.visibility = "hidden"
aquario.style.borderRadius = "100px"
}

function aumentardecoracao() {
decoracao.style.height = "170px"
decoracao.style.width = "170px"
paragrafodecoracao.style.visibility = "visible"
decoracao.style.borderRadius = "10px"
}

function diminuirdecoracao() {
    decoracao.style.height = "150px"
    decoracao.style.width = "150px"
    paragrafodecoracao.style.visibility = "hidden"
    decoracao.style.borderRadius = "100px"
}

function aumentarplanta() {
    planta.style.height = "170px"
    planta.style.width = "170px"
    paragrafoplanta.style.visibility = 
    paragrafoplanta.style.borderRadius = "10px"
}

function diminuirplanta() {

}

function entrarfiltro() {
    window.location.href = "aquarifiltro.html";
}