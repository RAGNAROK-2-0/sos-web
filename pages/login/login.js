$(document).ready(function () {
    document
        .getElementById("submitLoginForm")
        .addEventListener("click", stopDefAction, false);
});

function stopDefAction(evt) {
    evt.preventDefault();
}

function authUser() {
    const url = "https://sos-help-desq.herokuapp.com/auth";
    const body = { email: $("#email").val(), senha: $("#password").val() };
    $("#loading").addClass("fa fa-circle-o-notch fa-spin")
    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (response.status !== 200) {

            throw new Error(response.status)
        }
        return response.json();
    }).then(userDataSquema => {

        var uma_semana = new Date();
        uma_semana.setDate(uma_semana.getDate() + 7);
        let data = uma_semana.toGMTString();

        
        setCookie('x-sos-auth-email', userDataSquema.email, data)
        setCookie('x-sos-auth-nome', userDataSquema.nome, data)
        setCookie('x-sos-auth-num_func', userDataSquema.num_func, data)
        setCookie('x-sos-auth-setor', userDataSquema.setor, data)
        setCookie('x-sos-auth-criado',new Intl.DateTimeFormat('pt-BR').format(new Date(userDataSquema.data_insercao)), data)

        !!getCookie('x-sos-auth-callbackPage') ? navigateToPage(getCookie('x-sos-auth-callbackPage')) : navigateToPage('')


    }).catch(err => {
        $("#loading").removeClass("fa fa-circle-o-notch fa-spin")
        $("#email").css("border", "1px solid red")
        $("#password").css("border", "1px solid red")
        $("#idLabelPassword").text("Usuário ou Senha inválidas!")
    });
}




