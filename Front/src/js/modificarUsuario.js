import { actualizarUsuario, obtenerUsuario } from "../db/usuariosDB.js";
import { crearCampoForm, crearBoton } from "./funciones.js";

export function modificarInfo(id) {

    const main = document.querySelector("main");

    const seccion = document.createElement("section");
    seccion.classList = "h-auto mt-8 sm:mt-15 md:mt-15 lg:mt-15 xl:mt-15 flex w-auto p-3 items-center flex-col bg-[#8b7355] rounded-xl text-[#cfb583] border-none pb-px flex-wrap";
    seccion.style = "box-shadow: 5px 5px 15px -4px #000000";

    seccion.innerHTML = "";

    const formularioModificar = document.createElement("form");
    formularioModificar.classList = "flex flex-col flex-wrap whitespace-normal justify-items-center w-auto";

    const divNombreTelNuevos = document.createElement("div");
    divNombreTelNuevos.classList = "fila sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 flex flex-col gap-2 lg:flex-row";

    const divNombreNuevo = document.createElement("div");

    const divTelefonoNuevo = document.createElement("div");

    const divContraseñaConfirmacionNuevas = document.createElement("div");
    divContraseñaConfirmacionNuevas.classList = "fila sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 flex flex-col gap-2 lg:flex-row";

    const divContrasena = document.createElement("div");

    const divConfirmarNuevaContrasena = document.createElement("div");

    const botonModificar = crearBoton("Guardar", "submit");

    divNombreNuevo.appendChild(crearCampoForm("Nombre", "text", "nombre"));
    divTelefonoNuevo.appendChild(crearCampoForm("Teléfono", "text", "teléfono"));
    divContrasena.appendChild(crearCampoForm("Contraseña", "password", "contraseña"));
    divConfirmarNuevaContrasena.appendChild(crearCampoForm("Confirmar Nueva Contraseña", "password", "confirmar-contraseña"));

    divNombreTelNuevos.appendChild(divNombreNuevo);
    divNombreTelNuevos.appendChild(divTelefonoNuevo);
    divContraseñaConfirmacionNuevas.appendChild(divContrasena);
    divContraseñaConfirmacionNuevas.appendChild(divConfirmarNuevaContrasena);
    formularioModificar.appendChild(divNombreTelNuevos);
    formularioModificar.appendChild(divContraseñaConfirmacionNuevas);
    formularioModificar.appendChild(botonModificar);

    main.appendChild(seccion);
    seccion.appendChild(formularioModificar);

    const inputNombreNuevo = divNombreNuevo.querySelector('input[type="text"]');
    const inputTelefonoNuevo = divTelefonoNuevo.querySelector('input[type="text"]');
    const inputContraseñaNuevo = divContrasena.querySelector('input[type="password"]');
    const inputConfirmarNuevaContraseña = divConfirmarNuevaContrasena.querySelector('input[type="password"]');

    const inputs = formularioModificar.querySelectorAll('input');

    inputNombreNuevo.required = false;
    inputTelefonoNuevo.required = false;
    inputContraseñaNuevo.required = false;
    inputConfirmarNuevaContraseña.required = false;


    formularioModificar.addEventListener("submit", (e) => {

        e.preventDefault();

        const datosActualizados = {};

        const nuevoNombre = inputNombreNuevo.value.trim();
        const nuevoTelefono = inputTelefonoNuevo.value.trim();
        const nuevaContraseña = inputContraseñaNuevo.value.trim();
        const confirmarNuevaContraseña = inputConfirmarNuevaContraseña.value.trim();

        const span = document.createElement('span');
        span.classList = "alerta"
        span.style.display = "block";
        span.style.fontSize = "18px";
        divConfirmarNuevaContrasena.appendChild(span);

        if (nuevoNombre) {
            datosActualizados.nombre = nuevoNombre;
        }
        if (nuevoTelefono) {
            datosActualizados.telefono = nuevoTelefono;
        }
        if (nuevaContraseña) {
            if (nuevaContraseña !== confirmarNuevaContraseña) {
                span.textContent = "Las contraseñas no coinciden";
                return;
            }
            datosActualizados.contraseña = nuevaContraseña;
        }

        actualizarUsuario(id, datosActualizados);

        formularioModificar.reset();

    });
}