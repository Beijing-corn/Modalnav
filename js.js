
function hidenseek() {
    let oogabooga = document.getElementById("Menushow")
    console.log(oogabooga)
    if (oogabooga.className == "lists") {
        oogabooga.className += "Menushow"
    }
    else {
        oogabooga.className = "lists"
    }
}
let operator = document.getElementById("model")
let buttonopen = document.getElementById("hehe")
let closeicon = document.getElementById("icon")

buttonopen.onclick = function () {

    operator.style.display = "block"
}
closeicon.onclick = function () {
    operator.style.display = "none"
}
window.onclick = function (e) {
    if (e.target.id === "model") {
        operator.style.display = "none"
    }
    if (e.target.id === "modl") {
        operating.style.display = "none"
    }
    console.log(e.target.id)
}
let operating = document.getElementById("modl")
let openbutton = document.getElementById("haha")
let iconclose = document.getElementById("iconic")

openbutton.onclick = function () {

    operating.style.display = "block"
}
iconclose.onclick = function () {
    operating.style.display = "none"
}

let iconclospe = document.getElementById("iconice")


iconclospe.onclick = function () {
    operating.style.display = "none"
}

let iconclos3 = document.getElementById("iconis")

openbutton.onclick = function () {

    operating.style.display = "block"
}
iconclos3.onclick = function () {
    operating.style.display = "none"
}