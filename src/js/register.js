import { crearCampoForm, crearBoton, validarUsuario} from "./funciones.js";
import { obtenerUsuario, agregarUsuario } from "../db/clientesDB.js";

export function register(){

    const main = document.querySelector("main");
    const aRegister = document.getElementById("aRegister");
    
    main.classList = "flex-1 overflow-x-hidden flex flex-col min-w-0 text-[#cfb583] items-center";

    aRegister.addEventListener("click", (e) => {
        e.preventDefault();

        main.innerHTML = "";
       
        const seccionRegistro = document.createElement("section");
        seccionRegistro.classList = "h-auto mt-8 sm:mt-15 md:mt-15 lg:mt-15 xl:mt-15 flex w-auto p-3 items-center flex-col bg-[#8b7355] rounded-xl text-[#cfb583] border-none pb-px flex-wrap";
        seccionRegistro.style = "box-shadow: 5px 5px 15px -4px #000000";

        const h1 = document.createElement("h1");
        h1.classList = "text-4xl mb-4";
        h1.textContent = "Registro";
        seccionRegistro.prepend(h1);
        

        const formularioRegistro = document.createElement("form");
        formularioRegistro.classList = "flex flex-col flex-wrap whitespace-normal justify-items-center w-auto";

        const divNombreFecha = document.createElement("div");
        divNombreFecha.classList = "fila sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 flex flex-col gap-2 lg:flex-row";

        const divCorreoTelefono = document.createElement("div");
        divCorreoTelefono.classList = "fila sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 flex flex-col gap-2 lg:flex-row";

        const divContraseñaConfirmacion = document.createElement("div");
        divContraseñaConfirmacion.classList = "fila sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 flex flex-col gap-2 lg:flex-row";

        
        divNombreFecha.appendChild(crearCampoForm("Nombre", "text", "nombre"));
        divNombreFecha.appendChild(crearCampoForm("Fecha de nacimiento", "date", "fechanacimiento"));

        formularioRegistro.appendChild(divNombreFecha);

        divCorreoTelefono.appendChild(crearCampoForm("Correo", "email", "email"));
        divCorreoTelefono.appendChild(crearCampoForm("Teléfono", "number", "telefono"));

        formularioRegistro.appendChild(divCorreoTelefono);

        divContraseñaConfirmacion.appendChild(crearCampoForm("Contraseña", "password", "contraseña"));
        divContraseñaConfirmacion.appendChild(crearCampoForm("Confirmar contraseña", "password", "confirmarcontraseña"));

        formularioRegistro.appendChild(divContraseñaConfirmacion);

        const botonRegistrar = crearBoton("Registrarse", "submit");
        formularioRegistro.appendChild(botonRegistrar);

        seccionRegistro.appendChild(formularioRegistro);
        
        main.appendChild(seccionRegistro);

        
        const inputCorreo = divCorreoTelefono.querySelector('input[type="email"]');
        inputCorreo.addEventListener("blur", (e) => {
            validarUsuario(e.target);
        });

    });

}