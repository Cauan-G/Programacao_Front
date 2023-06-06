
//Pega os valores de todos os botões
const listaTeclas = document.querySelectorAll('input[type=button]');
const display =  document.querySelector('input[type=tel]');

// function valorBotaoUmJanela (){ // mostra o valor do primeiro botão
//     valorBotaoUm(listaTeclas[0].value);
// }
// function valorBotaoUm(){

//     display.value = display.value + listaTeclas[0].value;
// }
// listaTeclas[0].onclick = valorBotaoUm; // chama a função quando clicado

function valorBotao(valor){
    display.value = display.value + listaTeclas[valor] .value
}

function limpaDisplay(){
    display.value = '' // coloca o valor do display como nulo
}

listaTeclas[0].onclick = function(){
    valorBotao(11);     
}