/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nonme: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/


function hello() {
    alert("Você clicou!");
}


let nome = document.getElementById("nome"); // conectada ao input

let email = document.querySelector('#email') // por ID
let email1 = document.querySelector('.email') // por Classe
let email2 = document.querySelector('input#email') //colocando o input

let assunto = document.querySelector('#assunto')

let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

/*
function exibeNome(){
    alert("Seu formulário foi enviado " + nome.value);
}
*/

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail(){
        let txtEmail = document.querySelector('#txtEmail')

        if(email.value.indexOf('@') == - 1 || email.value.indexOf('.') == - 1){
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red';
        } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green';
        emailOK = true

        }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block'
        assuntoOK = false
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar(){
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert('Formulário enviado com sucesso!')
  }  else {
    alert('Preencha o formulário corretamente antes de enviar!')
  }
}


function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}