let input = document.getElementById("input")
let value = document.getElementsByClassName("value")
let mtoft = document.getElementsByClassName("mtoft")
let fttom = document.getElementsByClassName("fttom")
let ltogal = document.getElementsByClassName("ltogal")
let galtol = document.getElementsByClassName("galtol")
let kiltolb = document.getElementsByClassName("kiltolb")
let lbtokil = document.getElementsByClassName("lbtokil")

function sync() {
    for(var i=0; i<value.length; i++){
        value[i].textContent = input.value
    }
    mtoft[0].textContent = (input.value*3.281).toFixed(3)
    fttom[0].textContent = (input.value/3.281).toFixed(3)
    ltogal[0].textContent = (input.value/3.785).toFixed(3)
    galtol[0].textContent = (input.value*3.785).toFixed(3)
    kiltolb[0].textContent = (input.value*2.205).toFixed(3)
    lbtokil[0].textContent = (input.value/2.205).toFixed(3)
}