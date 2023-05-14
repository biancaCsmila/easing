$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

const botao_cadastro = document.getElementById
("botao_cadastro");
function salvarDadosEmJson() {
  alert('asdasdasd')
  console.log(users);
  // Captura os dados do formulário HTML
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;
  let senha = document.getElementById("senha").value;
  let numero = document.getElementById("numero").value;
  // Cria um objeto JSON com os dados capturados
  let dados = {
    "nome": nome,
    "email": email,
    "cpf": cpf,
    "senha": senha,
    "numero": numero,
  };
  // mostra um alarme na tela
}

botao_cadastro.addEventListener("click", salvarDadosEmJson);