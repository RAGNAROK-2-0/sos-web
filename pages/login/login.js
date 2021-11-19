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

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}
