function calculadora(valorInput){
    let input = document.getElementById('pantalla');
    input.value = input.value + valorInput;
}

//resultado
function resultado() {
    let pantalla = document.getElementById("pantalla").value;
    console.log("resultado " + pantalla)

    console.log("resultado " + eval(pantalla))
    document.getElementById("pantalla").value = eval(pantalla);
}

//limpiar pantalla
function limpiarPantalla() {
    document.getElementById("pantalla").value = "";
}

//decimal
function decimal() {
    let pantalla = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = pantalla + ".";
}


