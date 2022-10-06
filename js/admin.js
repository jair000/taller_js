const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

// funcionalidad al botón "Ingresar"
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

// Toda la logica de lo que haga el boton de "Ingresar"
function checkInputs() {
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();

  if (emailvalue === "") {
    setErrorFor(email, "No puede dejar el email en blanco");
  } else if (!isEmail(emailvalue)) {
    setErrorFor(email, "No ingreso un email valido");
  } else {
    setSuccessFor(email);
  }
  if (passwordvalue === "") {
    setErrorFor(password, "No ingreso debe dejar el password en blanco");
  } else {
    setSuccessFor(password);
  }

  // Validacion al ingresar a la Intranet CERTUS
  if (email.value == "administrador@certus.edu.pe" && password.value == "123") {
    alert(
      " :::::    Bienvenido al Sistema de Certus Sr. Administrador    ::::::  "
    );
    window.location = "administrador.html";
    // window.open("intranet/administrador.html","Certus","width=600, height=800");
  } else if (
    email.value == "colaborador@certus.edu.pe" &&
    password.value == "456"
  ) {
    alert(
      " :::::    Bienvenido al Sistema de Certus   Estimado Colaborador  ::::::  "
    );
    window.location = "colaborador.html";
  } else {
    alert(
      "Estimado Usuario: Credenciales Incorrectas ...!! Favor de Comunicarse con el Area de Sistemas"
    );
  }
}

// Funciones reutilizables para proximos proyectos web.
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
