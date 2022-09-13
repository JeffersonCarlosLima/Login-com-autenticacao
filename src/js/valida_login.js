function acesso() {
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    let userName = 'Jefferson';
    let chave = '12345678';
    let inicio = "inicio.html";

    if (usuario.value == userName && senha.value == chave) {
        console.log("senha correta");
        window.location = inicio;
    } else {
        alert("Usuário e senha incorretos");
    }

}