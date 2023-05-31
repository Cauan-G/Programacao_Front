
//Pega os valores de todos os botões
const listaTeclas = document.querySelectorAll('input[type=button]');

function valorBotaoUm (){ // mostra o valor do primeiro botão
    alert(listaTeclas[0].value);
}

listaTeclas[0].onclick = valorBotaoUm; // chama a função quando clicado