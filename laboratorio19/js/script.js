//valida si el NIP es correcto
function validarNIP(){
  //obtengo la contraseña
  let nip = document.getElementById("nip").value;

  //si la contraseña es correcta abro la otra ventana
  if(nip == "1234"){
      //document.getElementById('welcome').innerHTML = "¡Bienvenido!";
      window.location.href = 'welcome.html';


      setTimeout(function() {
          // Esta parte del código se ejecutará después del retraso
          window.location.href = 'welcome.html';
      }, 2000); // 2000 milisegundos (2 segundos) de retraso

  }else{
      document.getElementById('errorMensaje').innerHTML = "NIP incorrecto";
  }
}


//depositar cantidad
function depositar() {
    let cantidad = parseFloat(prompt('¿Cuanto deseas depositar?'));
    if(!isNaN(cantidad) && cantidad >0){
        saldo += cantidad;
        document.getElementById('mensajeTransaccion').textContent = 'Has depositado ${cantidad}. Tu nuevo saldo es ${saldo}.';
    } else {
        document.getElementById('mensajeTransaccion').textContent = 'Por favor, ingrese una cantidad válida.';
    }//fin del else
}//fin de la funcion


//retirar cantidad
function retirar() {
    let cantidad = parseFloat(prompt('¿Cuanto deseas retirar?'))
    if(!isNaN(cantidad) && cantidad >0 && cantidad <= saldo){
        saldo -= cantidad;
        document.getElementById('mensajeTransaccion').textContent = 'Has retirado ${cantidad}. Tu nuevo saldo es ${saldo}.';
    } else {
        document.getElementById('mensajeTransaccion').textContent = 'Cantidad invalida o insuficiente saldo';
    }//fin del else
}//fin de la funcion


//ver saldo
function verSaldo() {
    document.getElementById('mensajeTransaccion').textContent = 'Tu saldo actual es ${saldo}.';
}//fin de la funcion 