const form = document.getElementById("form-number");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
let formEValido = false;

function validaNum(nA, nB) {
    return nA < nB;
}

form.addEventListener("submit",function(e) {
    e.preventDefault();

    const successMessage = `Valor do campo A: <b>${parseFloat(campoA.value)} é INVÁLIDO</b> | Valor do campo B: <b>${parseFloat(campoB.value)} é VÁLIDO</b>`;

    formEValido = validaNum(parseFloat(campoA.value), parseFloat(campoB.value));
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = successMessage;
        containerMensagemSucesso.style.display = "block";

        campoA.value = "";
        campoB.value = "";

    } else {
        campoA.style.border = "1px solid red";
        document.querySelector(".error-message").style.display = "none";
    }
});

campoA.addEventListener("keyup", function(e) {
    formEValido = validaNum(parseFloat(campoA.value), parseFloat(campoB.value));

    if (!formEValido) {
        campoA.classList.add("error");
        campoB.classList.add("error");
        document.querySelector(".error-message").style.display = "block";
    } else {
        campoA.classList.remove("error");
        campoB.classList.remove("error");
        document.querySelector(".error-message").style.display = "none";
    }

});