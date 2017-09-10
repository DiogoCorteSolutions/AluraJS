
var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {
    event.preventDefault();

    var form1 = document.querySelector("#adicionarbutton");
    var paciente = obtemInformacoesdoForm(form1);

    //var pacienteTr = montarTR(paciente);
    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0) {
        exibeMensagemDeErros(erros);
        return;
    }

    adicionaPacienteTabela(paciente);


    //var tabela = document.querySelector("#tabela-pacientes");

    //tabela.appendChild(pacienteTr);

    form1.reset();
    var msgErro = document.querySelector("#mensagens-erro")
    msgErro.innerHTML = "";
});

function obtemInformacoesdoForm(form1) {

    var objeto = {
        nome: form1.nome.value,
        peso: form1.peso.value,
        altura: form1.altura.value,
        gordura: form1.gordura.value,
        imc: calculaImc(form1.peso.value, form1.altura.value)
    }


    return objeto;
}

function montarTR(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));


    return pacienteTr;
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) erros.push("O nome não poide ser nullo");
    if (!validarPeso(paciente.peso)) erros.push("O peso é invalido!");
    if (!validarAltura(paciente.altura)) erros.push("A altura é invalida!");
    if (paciente.gordura.length == 0) erros.push("Preencha o campo gordura");
    if (paciente.peso.length == 0) erros.push("Preencha o campo Peso");
    if (paciente.altura.length == 0) erros.push("Preencha o campo altura");

    return erros;
}

function exibeMensagemDeErros(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function adicionaPacienteTabela(paciente) {

    var pacienteTr = montarTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}