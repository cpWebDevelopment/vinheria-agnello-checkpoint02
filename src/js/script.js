// Validar entrada de dados do vinho
function validarEntrada(mensagem) {
    let valor;
    do {
        valor = prompt(mensagem);
        if (valor == "" || valor == " ") {
            alert("Por favor, insira um valor válido!");
        }
    } while (valor == "" || valor == " ");
    
    return valor;
}