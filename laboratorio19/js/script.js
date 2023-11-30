//valida si el NIP es correcto
function validarNIP() {
    //obtengo la contraseña
    let nip = document.getElementById("nip").value;

    //si la contraseña es correcta abro la otra ventana
    if (nip == "1234") {
        //document.getElementById('welcome').innerHTML = "¡Bienvenido!";
        window.location.href = 'welcome.html';


        setTimeout(function () {
            // Esta parte del código se ejecutará después del retraso
            window.location.href = 'welcome.html';
        }, 2000); // 2000 milisegundos (2 segundos) de retraso

    } else {
        document.getElementById('errorMensaje').innerHTML = "NIP incorrecto";
    }
}


// Define la variable de saldo
let saldo = 1000; // Saldo inicial, puedes cambiarlo según tus necesidades

// Función para realizar la operación seleccionada
function realizarOperacion() {
    let operacion = document.getElementById("operacion").value;
    let cantidad = parseFloat(document.getElementById("transaccion").value);

    switch (operacion) {
        case "ver_saldo":
            verSaldo();
            break;
        case "depositar":
            if (!isNaN(cantidad) && cantidad > 0) {
                depositar(cantidad);
            } else {
                document.getElementById('mensajeTransaccion').textContent = 'Por favor, ingrese una cantidad válida.';
            }
            break;
        case "retirar":
            if (!isNaN(cantidad) && cantidad > 0 && cantidad <= saldo) {
                retirar(cantidad);
            } else {
                document.getElementById('mensajeTransaccion').textContent = 'Cantidad inválida o insuficiente saldo';
            }
            break;
        case "salir":
            // Agrega aquí la lógica para salir
            break;
        default:
            document.getElementById('mensajeTransaccion').textContent = 'Selecciona una operación válida.';
    }
}

// Función para depositar cantidad
function depositar(cantidad) {
    saldo += cantidad;
    document.getElementById('mensajeTransaccion').textContent = `Has depositado ${cantidad}. Tu nuevo saldo es ${saldo}.`;
}

// Función para retirar cantidad
function retirar(cantidad) {
    saldo -= cantidad;
    document.getElementById('mensajeTransaccion').textContent = `Has retirado ${cantidad}. Tu nuevo saldo es ${saldo}.`;
}

// Función para ver saldo
function verSaldo() {
    document.getElementById('mensajeTransaccion').textContent = `Tu saldo actual es ${saldo}.`;
}

