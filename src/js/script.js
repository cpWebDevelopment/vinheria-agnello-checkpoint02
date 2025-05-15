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

// Mostrar ficha técnica do vinho cadastrado
function mostrarDados(nome, tipo, safra, quantidade, estoque, sazonamento, indice){
    alert("A seguir, veja a ficha técnica do vinho no console.");
    console.log("===========================================");
    console.log("==== Ficha Técnica do Vinho Cadastrado ====");
    console.log(`Nome do vinho ${indice}: ${nome}`);
    console.log(`Tipo do vinho ${indice}: ${tipo}`);
    console.log(`Ano da safra do vinho ${indice}: ${safra}`);
    console.log(`Quantidade em estoque do vinho ${indice}: ${quantidade}`);
    console.log(`Status do estoque do vinho ${indice}: ${estoque}`);
    console.log(`Estágio de maturação do vinho ${indice}: ${sazonamento}`);
}