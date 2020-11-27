function validarEmail() {
var email = document.querySelector('#caixa-email')


if(!email.checkValidity()){
  alert("Email inválido")
  }
  else {
    window.location.reload(alert("O email foi enviado!\nBem vindo!"))
    }
}


/*window.location.reload(alert("O email " +email+ " foi enviado!\nBem vindo!"))*/
