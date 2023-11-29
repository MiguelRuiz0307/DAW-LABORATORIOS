//realiza las operaciones de suma, division, resta y multiplicacion
function realizarOperacion(){
    //almacena los tipos de operacion en los radios
    var tipoOperacion = document.getElementsByName("operacion")

    //leemos los numeros de las cajas de texto 
    var primerNumero = Number(document.getElementById("numero1").value);
    var segundoNumero = Number(document.getElementById("numero2").value);

    //obtenemos el radio seleccionado y llamamos la funcion correspondiente para realizar la operacion
    for (var i = 0; i < tipoOperacion.length; i++)
    {
        //checamos cual es el radio seleccinado 
        if(tipoOperacion[i].checked)
        {
            var operacionSeleccionada = tipoOperacion[i].value;

            //procedemos a llamar a la funcion segun el radio seleccionado
            if(operacionSeleccionada=="suma"){
                suma(primerNumero, segundoNumero);
            }

            //procedemos a llamar a la funcion segun el radio seleccionado
            if(operacionSeleccionada=="resta"){
                resta(primerNumero, segundoNumero);
            }

            //procedemos a llamar a la funcion segun el radio seleccionado
            if(operacionSeleccionada=="division"){
                division(primerNumero, segundoNumero);
            }

            //procedemos a llamar a la funcion segun el radio seleccionado
            if(operacionSeleccionada=="multiplicacion"){
                multiplicacion(primerNumero, segundoNumero);
            }

        }//fin if 1.0

    }//fin del for 1.0

}//fin de la funcion realizar operacion


function suma(primerNumero, segundoNumero){
    var resultado = primerNumero + segundoNumero;
    document.getElementById('resultado').innerHTML = "La suma de " + primerNumero + " + " + segundoNumero + " = " + resultado;
}

function resta(primerNumero, segundoNumero){
    var resultado = primerNumero - segundoNumero;
    document.getElementById('resultado').innerHTML = "La resta de " + primerNumero + " - " + segundoNumero + " = " + resultado;
}

function multiplicacion(primerNumero, segundoNumero){
    var resultado = primerNumero * segundoNumero;
    document.getElementById('resultado').innerHTML = "La multiplicacion de " + primerNumero + " * " + segundoNumero + " = " + resultado;
}

function division(primerNumero, segundoNumero){
    var resultado = primerNumero / segundoNumero;
    document.getElementById('resultado').innerHTML = "La division de " + primerNumero + " / " + segundoNumero + " = " + resultado;
}