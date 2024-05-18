import { validaInputs, validaTextAreas } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
const botonDescargaCv = document.querySelector(".title__network__item--descargaCV");
const botonEnviar = document.querySelector(".formcontato__botao");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validaInputs(input.target);
  });
});

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", (textarea) => {
    validaTextAreas(textarea.target);
  });
});

botonEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector(".formcontato__input");
  const textarea = document.querySelector(".formcontato__textarea");

  if (input.value === "" || textarea.value === "") {
    alert("No se puede enviar el mensaje. Todos los campos son obligatorios.");
  } else {
    alert("El mensaje ha sido enviado.");
    input.value = "";
    textarea.value = "";
  }
});

botonDescargaCv.addEventListener("click", () => {
  window.open('./assets/cv/CV-ESPAÑOL - ELIZABETHCASILLAS.pdf');
});
