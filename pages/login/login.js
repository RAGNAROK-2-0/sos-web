$(document).ready(function () {
    document.getElementById('submitLoginForm').addEventListener(
        'click', stopDefAction, false
    );
});


function stopDefAction(evt) {
    evt.preventDefault();
}

function authUser() {
    $.ajax({
        type: "POST",
        url: "https://sos-help-desq.herokuapp.com/auth",
        data: {
            num_func: $("#email").val(),
            senha: $("#password").val(),
        },
        dataType: "json",
        success: function (json) {
            console.log(json);
        }, error: function (json) {
            console.log(json);

        }
    });

}


