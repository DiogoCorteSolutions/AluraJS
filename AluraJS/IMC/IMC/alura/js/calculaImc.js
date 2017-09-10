var titulos = document.querySelector(".titulo");
titulos.textContent = "Diogo";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {


    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdAImc = paciente.querySelector(".info-imc");
    var imc = tdAImc.textContent;



    var pesoEhValido = validarPeso(peso);
    var alturaEhValida = validarAltura(altura);

    if (!pesoEhValido) {
        //console.log("Peso invalido.");
        pesoEhValido = false;
        tdAImc.textContent = "Peso invalido.";
        paciente.style.backgroundColor = "red";
        paciente.classList.add("cor-peso");
    }


    if (!alturaEhValida) {
        //console.log("altura invalido.");
        alturaEhValida = false;
        tdAImc.textContent = "Altura invalida";
        paciente.style.backgroundColor = "write";
        paciente.classList.add("cor-altura");
    }

    if (alturaEhValida && pesoEhValido) {
        var somaImc = calculaImc(peso, altura);
        tdAImc.textContent = somaImc;
    }

}

function calculaImc(peso, altura) {

    var imc = 0;

    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validarPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    else {
        return false;
    }
}


function validarAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    }
    else {
        return false;
    }
}









