var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
    console.log("seu rabo!");


    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    var erroAjax = document.querySelector("#erro-span");

    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");

            var resposta = (xhr.responseText);
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteTabela(paciente);
            });

        }
        else {
            console.log(xhr.status);
            console.log(xhr.responseText);


            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();

});