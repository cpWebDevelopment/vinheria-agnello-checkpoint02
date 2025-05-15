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

// Verificar situação do estoque
function estoqueBaixo(quantidade){
    let statusEstoque;
    if (parseInt(quantidade) < 5) {
        statusEstoque = "baixo";
    } else {
        statusEstoque = "normal";
    }

    return statusEstoque;
}

// Classificar o vinho (antigo, amadurecido, jovem)
function classificarVinho(safra){
    let maturacao;
    if (parseInt(safra) < 2015) {
        maturacao = "Vinho antigo";
    } else if (parseInt(safra) <= 2019) {
        maturacao = "Vinho amadurecido";
    } else {
        maturacao = "Vinho jovem";
    }

    return maturacao;
}