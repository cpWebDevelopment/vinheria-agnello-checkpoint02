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


let nomeVinho;
let tipoVinho;
let safraVinho;
let quantEstoque;

let statusEstoque;
let totalEstoqueBaixo = 0;

let vinhoMaisAntigo = "";
let safraMaisAntiga = Infinity;

let maturacao;

let totalCadastros = 0;

let continuar;

do {
    // Contador do total de vinhos cadastrados
    totalCadastros += 1;

    // Cadastro do vinho usando a função de validação
    nomeVinho = validarEntrada(`Digite o nome do ${totalCadastros}° vinho a ser cadastrado:`);
    tipoVinho = validarEntrada(`Qual o tipo do ${totalCadastros}° vinho?`);
    safraVinho = validarEntrada(`Digite a safra do ${totalCadastros}° vinho:`);
    quantEstoque = validarEntrada(`Qual a quantidade do vinho ${nomeVinho} no estoque?`);

    // Verificação do estoque usando a função de estoque baixo
    statusEstoque = estoqueBaixo(quantEstoque);

    // Contador do total de vinhos com estoque baixo
    if (statusEstoque == "baixo"){
        totalEstoqueBaixo += 1;
    }

    // Verificação de qual vinho é o mais antigo
    if (parseInt(safraVinho) < safraMaisAntiga){
        safraMaisAntiga = safraVinho
        vinhoMaisAntigo = nomeVinho
    }

    // Verificação da maturação do vinho usando a função de classificar vinho
    maturacao = classificarVinho(safraVinho);

    // Apresentação dos dados do vinho cadastrado através da função mostrar dados
    mostrarDados(nomeVinho, tipoVinho, safraVinho, quantEstoque, statusEstoque, maturacao, totalCadastros);
    
    // Permitindo cadastro de vários vinhos
    continuar = prompt("Deseja cadastrar outro vinho? (s/n)");
} while (continuar == "s");
