function hello() {
    alert("Você clicou!");
}

let nome = document.getElementById("nome"); // conectada ao input

function exibeNome(){
    alert("Seu formulário foi enviado " + nome.value);
}