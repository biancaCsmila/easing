$(function () {
  var operacao = "A"; //"A"=Adição; "E"=Edição

  var indice_selecionado = -1;

  var tbClientes = localStorage.getItem("tbClientes"); // Recupera os dados armazenados

  tbClientes = JSON.parse(tbClientes); // Converte string para objeto

  if (tbClientes == null)
    // Caso não haja conteúdo, iniciamos um vetor vazio
    tbClientes = [];

  function Adicionar() {
    var cli = GetCliente("Cpf", $("#cpf").val());

    if (cli != null) {
      alert("Cpf já cadastrado.");
      return;
    }

    var cliente = JSON.stringify({
      Cpf: $("#cpf").val(),
      Nome: $("#nome").val(),
      Telefone: $("#telefone").val(),
      Email: $("#email").val(),
      Senha: $("#senha").val(),
    });

    tbClientes.push(cliente);

    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));

    alert("Registro adicionado.");
    return true;
  }

  function GetCliente(propriedade, valor) {
    var cli = null;
    for (var item in tbClientes) {
      var i = JSON.parse(tbClientes[item]);
      if (i[propriedade] == valor) cli = i;
    }
    return cli;
  }

  $("#frmCadastro").on("submit", function () {
    return Adicionar();
  });
});
