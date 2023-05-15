const btnLogar = document.getElementById("btnLogar");

function login() {
  var logar = false;
  var tbClientes = localStorage.getItem("tbClientes"); // Recupera os dados armazenados
  tbClientes = JSON.parse(tbClientes); // Converte string para objeto
  if (tbClientes == null) {
    tbClientes = [];
  }
  for (var item in tbClientes) {
    var email = $("#email").val();
    var senha = $("#senha").val();
    var usuario = JSON.parse(tbClientes[item]);
    // alert(usuario["Email"] + '  ' + email + '  '+ usuario["Senha"] + '  ' + senha);
    if (usuario["Email"] == email && usuario["Senha"] == senha) {
      logar = true;
    }
  }

  if (logar == true) {
    window.location.replace("../../index.html");
  } else {
    alert("Usuario nao encontrado verifique seu email ou senha.");
  }


  return false;
}

btnLogar.addEventListener("click", login);
