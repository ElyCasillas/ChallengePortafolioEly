//Haz tú validación en javascript acá
export function validaInputs(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
    
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
      input.style.background = "lightgreen";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
      input.style.background = "#FBCDCB";
    }
  }
  
  export function validaTextAreas(textarea) {
    const tipoDeInput = textarea.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](textarea);
    }
  
    if (textarea.validity.valid) {
      textarea.parentElement.classList.remove("input-container--invalid");
      textarea.parentElement.querySelector(".input-message-error").innerHTML = "";
      textarea.style.background = "lightgreen";
    } else {
      textarea.parentElement.classList.add("input-container--invalid");
      textarea.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, textarea);
      textarea.style.background = "#FBCDCB";
    }
  }
  
  const input = document.querySelector(".formcontato__input");
  const textarea = document.querySelector(".formcontato__textarea");
  const botonEnviar = document.querySelector(".formcontato__botao");
  
  input.addEventListener("input", () => validaInputs(input));
  textarea.addEventListener("input", () => validaTextAreas(textarea));
  
  botonEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value === "" || textarea.value === "") {
      alert("No se puede enviar el mensaje. Todos los campos son obligatorios.");
    } else {
      alert("El mensaje ha sido enviado.");
      input.value = "";  /// Corrección aquí
      textarea.value = "";  // Corrección aquí
    }
  });
  
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
  
  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío.",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío.",
      typeMismatch: "El correo no es válido",
    },
    asunto: {
      valueMissing: "El campo asunto no puede estar vacío.",
    },
    mensaje: {
      valueMissing: "El campo mensaje no puede estar vacío.",
    },
  };
  
  const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };
  
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
  
  // Ejemplo de validador personalizado
  function validarNacimiento(input) {
    // Lógica de validación personalizada
    const fechaNacimiento = new Date(input.value);
    const fechaActual = new Date();
    const diferencia = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mensaje = "";
    if (diferencia < 18) {
      mensaje = "Debes tener al menos 18 años.";
    }
    input.setCustomValidity(mensaje);
    return mensaje;
  }  