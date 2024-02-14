/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let fruta = window.document.getElementById("fruta");
let preparo = document.querySelector("#preparo");
let nomeOk = false;
let emailOk = false;
let frutaOk = false;
let preparoOk = false;
let mapa = document.querySelector("#mapa");

/*
nome.style.width = "100%";
*/

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validaFruta() {
  let txtFruta = document.querySelector("#txtFruta");
  if (fruta.value.length < 3) {
    txtFruta.innerHTML = "Fruta inválida";
    txtFruta.style.color = "red";
  } else {
    txtFruta.innerHTML = "Fruta válida";
    txtFruta.style.color = "green";
    frutaOk = true;
  }
}

function validaPreparo() {
  let txtPreparo = document.querySelector("#txtPreparo");

  if (preparo.value.length >= 100) {
    txtPreparo.innerHTML =
      "Texto é muito grande, digite no máximo 100 caracteres.";
    txtPreparo.style.color = "red";
    txtPreparo.style.display = "block";
  } else {
    txtPreparo.style.display = "none";
    preparoOk = true;
  }
}

function enviar() {
  if (
    nomeOk == true &&
    emailOk == true &&
    frutaOk == true &&
    preparoOk == true
  ) {
    alert("Enviado com sucesso!");
  } else {
    alert("Preencha o formuláriio corretamente antes de enviar.");
  }
}

function mapaZoom() {
  mapa.style.width = "600px";
}

function mapaNormal() {
  mapa.style.width = "100%";
}
