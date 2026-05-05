import { crearCampoForm, crearBoton, validarUsuario } from "./funciones.js";
import { obtenerUsuario, agregarUsuario } from "../db/clientesDB.js";
import { register } from "./register.js";


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


        divNombre.appendChild(crearCampoForm("Correo", "email", "email"));

        divContraseñaConfirmacion.appendChild(crearCampoForm("Contraseña", "password", "contraseña")); 

        

        formularioLogin.appendChild(divRegistro)
        
        formularioLogin.appendChild(divNombre);
        formularioLogin.appendChild(divContraseñaConfirmacion);
        



        const anchorRegister = document.createElement("a");
        anchorRegister.href="";
        anchorRegister.textContent= "olvidé mi contraseña";

        formularioLogin.appendChild(anchorRegister);

        anchorRegister.addEventListener("click", (e) =>{
            e.preventDefault();
            main.innerHTML="";
            console.log("hola1");
            
            register();
            document.getElementById("aRegister").click();
            
            
        });


        const botonIngresar = crearBoton("Ingresar", "submit"); formularioLogin.appendChild(botonIngresar);



    });
}