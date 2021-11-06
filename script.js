



const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;

}
setInterval(carrossel, 1800);



let modeloCarro = document.getElementById("modelCar");
let potenciaCarro = document.getElementById("potenCar");
let resultado = document.getElementById("resultado");

function calcar() {
    let modelType = modeloCarro.value;
    let modelPotenc = potenciaCarro.value;

    if (modelPotenc != false && modelPotenc >= 1.6) {
        resultado.innerHTML = `<b>Olá, seu carro é ${modelType}, tem o motor de ${modelPotenc},<br> recomendamos fazer a cada 10.000 KM<b>`
    } else if (modelPotenc != false && modelPotenc < 1.6) {
        resultado.innerHTML = `<b>Olá, seu carro é ${modelType}, tem o motor de ${modelPotenc},<br> recomendamos fazer a cada 5.000 KM<b>`
    }
}
calcar();

//Inicio da Function para calculo de motos.
let modeloMoto = document.getElementById("modelBiker");
let potenciaMoto = document.getElementById("potenBiker")
let resultado2 = document.getElementById("resultado2")


function calcbiker() {
    let typeModel = modeloMoto.value;
    let potencModel = potenciaMoto.value;

    if(potencModel != false && potencModel >= 250 && potencModel < 499){
        resultado2.innerHTML = `<b>Olá, sua moto é ${typeModel}, tem o motor de ${potencModel}cc,<br> recomendamos fazer a cada 1.500 KM<b>`
    }else if(potencModel != false && potencModel <= 249){
        resultado2.innerHTML = `<b>Olá, sua moto é ${typeModel}, tem o motor de ${potencModel}cc,<br> recomendamos fazer a cada 1.000 KM<b>`
    }else if(potencModel != false && potencModel >= 500){
        resultado2.innerHTML = `<b>Olá, sua moto é ${typeModel}, tem o motor de ${potencModel}cc,<br> recomendamos fazer a cada 4.000 KM<b>`
    }
}
calcbiker();

console.log("Olá, esse é meu segundo projeto, obrigado por acessar! :) ");


// window.onload = function(){

// alert("Deixe seu feedback, é importante :D");

// }