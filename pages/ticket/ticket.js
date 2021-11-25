var emails;

function verificaCampos() {
    let assunto = $("#assunto").val();
    let prioridade = $("#prioridade").val();
    let problema = $("#problema").val();

    if(assunto == "") {
        popUp("Erro!", "Por favor, preencha o assunto.", "erro");
    }
    else if(prioridade == 0) {
        popUp("Erro!", "Por favor, selecione a prioridade.", "erro");
    }
    else if(problema == "") {
        popUp("Erro!", "Por favor, escreva o problema.", "erro");
    }
    else {
        pegaEmail();
    }
}

function popUp(titulo, escrita, tipo) {
    
    $("#conteudo").after(`
    <div id="divPopUp" class="desaparece">
        <div id="popUp">
            <div>
                <h3 id="titulo">${titulo}</h3>
            </div>
            <div>
                <p id="escrita">${escrita}</p>
            </div>
        </div>
    </div>
    `);

    if (tipo == "erro") {
        $("#divPopUp").addClass("erro");
        $("#titulo").css("color", "#D02F4A");
        $("#divPopUp").fadeIn(1000,
            function() {
                $(this).removeClass("desaparece");
            }
        );

        setTimeout(function() {
            $("#divPopUp").remove();
        }, 2500);
    }
    else if (tipo == "sucesso") {
        $("#divPopUp").addClass("sucesso");
        $("#titulo").css("color", "#0fad73");
        $("#divPopUp").fadeIn("slow",
            function() {
                $("#divPopUp").removeClass("desaparece");
            }
        );

        setTimeout(function() {
            $("#divPopUp").remove();
        }, 2500);
    }
}

function pegaEmail(){
    let mail = $("#email").val();
    emails = mail.split(',');
    
    enviaTicket();
}

function enviaTicket() {
    let assunto = $("#assunto").val();
    let problema = $("#problema").val();
    let prioridade = $("#prioridade").val();
    let num_func = "1";

      const url = "https://sos-help-desq.herokuapp.com/ticket/create";
      const body = {    num_func: num_func,
                        prioridade: prioridade,
                        assunto: assunto,
                        mensagem: problema, 
                        emailCopia: emails};
    
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
    .then((retorno) => retorno.json())
    .then((retorno) => popUp("Enviado!", "Seu ticket foi enviado ao suporte.", "sucesso"))
    .then(function () { 
        setTimeout( function() {
        location.reload()
        }, 4000);})
    .catch((retorno) => popUp("Erro!", "Ocorreu um erro ao enviar o seu Ticket, tente mais tarde", "erro"));
}