function GerarUmaPiada(){

    const piadaAPI = "http://api.icndb.com/jokes/random";

    let piadaAtual = "";

    $.ajax({
        url: piadaAPI,
        async: false,
        error: function(erro){
            console.log("Erro: ");
            console.log(erro);
        },
        success: function(dados){
            // console.log(dados.value.joke);
            piadaAtual = dados.value.joke;
        }
    });
    document.querySelector("#piada-texto").innerText = piadaAtual;
    
}

const botaoGerarPiada = document.querySelector("#btnCriarPiada");
botaoGerarPiada.onclick = function(){
    GerarUmaPiada();
}