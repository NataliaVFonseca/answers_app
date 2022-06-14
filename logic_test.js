const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

const elementResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')

//Clicar em fazer pergunta

function fazerPergunta() {
    console.log("Teste: " + inputPergunta.value)
    if(inputPergunta.value == "") {
        alert("Digite uma Pergunta")
        return
    }
   
    buttonPerguntar.setAttribute("disabled", true)
    const pergunta = "<div>" + inputPergunta.value + "<div>"

    //Gerar numero aleatoiro 
    const totalResposta = respostas.length
    const numAleatorio = Math.floor(Math.random() * totalResposta)

     elementResposta.innerHTML = pergunta + respostas[numAleatorio]
     elementResposta.style.opacity = 1;

     // sumir a resposta depois de 3 segundos
     setTimeout(function() {
       elementResposta.style.opacity = 0;
       buttonPerguntar.removeAttribute("disabled")
     }, 3000)

}

