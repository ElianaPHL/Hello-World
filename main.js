let nomeUsuario = "";
let elemento = document.querySelector("#nome-usúario");

while(nomeUsuario == ""){
    nomeUsuario = prompt("Qual o seu nome?");
}

if(nomeUsuario == null){
    elemento.textContent = "seja muito bem-vindo.";
}else{
    elemento.textContent = nomeUsuario;
}


