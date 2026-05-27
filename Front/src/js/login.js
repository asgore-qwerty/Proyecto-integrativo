import { crearCampoForm, crearBoton, validarUsuario, validarCampos } from "./funciones.js";
import { obtenerUsuario, agregarUsuario } from "../db/usuariosDB.js";
import { register } from "./register.js";
import { modificarInfo } from "./modificarUsuario.js";

export function login() {

    const main = document.querySelector("main");
    const aLogin = document.getElementById("aLogin");
    main.classList = " flex-1 overflow-x-hidden flex flex-col min-w-0 text-[#cfb583] items-center";



    aLogin.addEventListener("click", (e) => {
        e.preventDefault();
        main.innerHTML = "";

        const seccionLogin = document.createElement("section");
        seccionLogin.classList = "g:w-74 ml-2 mt-10 h-full flex w-auto p-4 items-center flex-col bg-[#8b7355] rounded-xl text-[#cfb583] border-none pb-px flex-wrap";

        seccionLogin.style = "box-shadow: 5px 5px 15px -4px #000000";

        const h1 = document.createElement("h1");
        h1.classList = "text-4xl mb-4";

        const divNombre = document.createElement("div");
        divNombre.classList = " flex flex-center gap-2 lg:flex-row";

        const divContraseñaConfirmacion = document.createElement("div");
        divContraseñaConfirmacion.classList = " flex flex-center gap-2 lg:flex-row";

        const divRegistro = document.createElement("div");
        divNombre.classList = " flex flex-center gap-2 lg:flex-row";

        const formularioLogin = document.createElement("form");
        formularioLogin.classList = "formLogin flex flex-col flex-wrap whitespace-normal justify-items-center gap-1";


        main.appendChild(seccionLogin);

        seccionLogin.appendChild(formularioLogin);

        h1.textContent = "Inicio de Sesión";
        seccionLogin.prepend(h1);


        formularioLogin.appendChild(crearCampoForm("Correo", "email", "email"));

        formularioLogin.appendChild(crearCampoForm("Contraseña", "password", "contraseña"));


        const anchorRegister = document.createElement("a");
        anchorRegister.href = "";
        anchorRegister.textContent = "olvidé mi contraseña";

        formularioLogin.appendChild(anchorRegister);

        anchorRegister.addEventListener("click", (e) => {
            e.preventDefault();
            main.innerHTML = "";

            register();
            document.getElementById("aRegister").click();


        });


        const botonIngresar = crearBoton("Ingresar", "submit"); formularioLogin.appendChild(botonIngresar);

        formularioLogin.addEventListener("submit", (e) => {
            e.preventDefault();


            const emailInput = formularioLogin.querySelector('input[type="email"]');
            const passwordInput = formularioLogin.querySelector('input[type="password"]');

            const email = emailInput.value;
            const password = passwordInput.value;

            const listaUsuarios = obtenerUsuario();

            const usuarioEncontrado = listaUsuarios.find(user =>
                user.email === email && user.contraseña === password);


            if (usuarioEncontrado) {
                console.log("Acceso correcto:", usuarioEncontrado.nombre);

                main.innerHTML = "";
                const saludo = document.createElement("h2");
                saludo.classList = "text-3xl mt-10";
                saludo.textContent = `¡Bienvenido de nuevo, ${usuarioEncontrado.nombre}!`;
                main.appendChild(saludo);

                main.appendChild(crearBoton("Cerrar Sesión", "button", "btnCerrarSesion"));
                const botonCerrarSesion = main.querySelector("#btnCerrarSesion");
                botonCerrarSesion.addEventListener("click", () => {
                    console.log("Sesión cerrada");
                    main.innerHTML = "";
                    login();
                    document.getElementById("aLogin").click();
                });

                main.appendChild(crearBoton("Ver información", "button", "btnVerInfo"));
                const botonVerInfo = main.querySelector("#btnVerInfo");
                botonVerInfo.addEventListener("click", () => {
                    const info = document.createElement("p")
                    info.innerHTML = `
                    <strong>Nombre:</strong> ${usuarioEncontrado.nombre}<br>
                    <strong>Correo:</strong> ${usuarioEncontrado.email}<br>
                    <strong>Teléfono:</strong> ${usuarioEncontrado.telefono}<br>
                    <strong>Fecha de Nacimiento:</strong> ${usuarioEncontrado.fechaNacimiento}`;
                    main.appendChild(info);
                });

                main.appendChild(crearBoton("Editar información", "button", "btnEditarInfo"));
                const botonEditarInfo = main.querySelector("#btnEditarInfo");
                botonEditarInfo.addEventListener("click", () => {
                    main.innerHTML = "";


                    modificarInfo(usuarioEncontrado.id);
                });

                






            } else {

                alert("El correo o la contraseña no coinciden con nuestros registros.");
            }




        });



    });
}
