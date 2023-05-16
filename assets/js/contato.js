/* Selecionando elementos a serem manipulados */
const formulario = document.querySelector("form");
const campoTelefone = document.querySelector("#telefone");
const campoCep = document.querySelector("#cep");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const botaoLocalizar = document.querySelector("#localizar-cep");
const mensagemStatus = document.querySelector("#status");

/* Ativação das máscaras usando jQuery Mask */
$(campoCep).mask("00000-000");
$(campoTelefone).mask("(00) 0000-0000")

botaoLocalizar.addEventListener("click", async function(event) {
    event.preventDefault();

    // Pegar o cep digitado no campo
    let cep = campoCep.value;

    // Preparar uma url dinâmica (com variável e o resto da url)
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    /* Acessando a API ViaCEP e obtendo dados do cep informado */

    // Etapa 1: acessar o ViaCEP passando a url
    const resposta = await fetch(url);

    // Etapa 2: pegar/extrair os dados da resposta como objeto JSON
    const dados = await resposta.json();

    // Etapa 3: mostrar/lidar os dados
    if("erro" in dados) {
        mensagemStatus.innerHTML = "CEP não encontrado!";
        mensagemStatus.style.color ="#F00";
    } else {
        mensagemStatus.innerHTML = "CEP foi encontrado!";
        mensagemStatus.style.color ="#00F";
        // Colocando cada parte dos dados nos campos
        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;
    }

    // Teste
})