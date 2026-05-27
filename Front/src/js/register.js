import { crearCampoForm, crearBoton, validarUsuario, validarCampos } from "./funciones.js";
import { obtenerUsuario, agregarUsuario } from "../db/usuariosDB.js";

export function register() {

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

        const inputNombre = divNombreFecha.querySelector('input[type="text"]');
        const inputCorreo = divCorreoTelefono.querySelector('input[type="email"]');
        const inputFechaNacimiento = divNombreFecha.querySelector('input[type="date"]');
        const inputTelefono = divCorreoTelefono.querySelector('input[type="number"]');
        const inputContraseña = divContraseñaConfirmacion.querySelector('input[type="password"]');
        const inputConfirmarContraseña = divContraseñaConfirmacion.querySelectorAll('input[type="password"]')[1];

        const inputs = formularioRegistro.querySelectorAll('input');

        inputs.forEach(input => {
            input.addEventListener("blur", (e) => {
                validarCampos(input);
            });
        });

        inputCorreo.addEventListener("blur", (e) => {
            const inputCompletado = validarCampos(e.target);

            if (inputCompletado) {
                validarUsuario(e.target);
            }
        });

        const span = document.createElement('span');
        span.classList = "alerta"
        span.style.display = "block";
        span.style.fontSize = "18px";

        formularioRegistro.addEventListener("submit", (e) => {

            if (!formularioRegistro.checkValidity()) {

                spanError.textContent = "Este campo es obligatorio";
                spanError.style.color = "#ac4e32";
                inputCorreo.style.borderColor = "#ac4e32";

                return;
            }

            e.preventDefault();

            const correoValido = validarUsuario(inputCorreo);

            if (!correoValido) {
                return;
            }

            const usuarios = obtenerUsuario() || [];
            agregarUsuario({
                id: usuarios.length + 1,
                nombre: inputNombre.value,
                fechanacimiento: inputFechaNacimiento.value,
                email: inputCorreo.value,
                telefono: inputTelefono.value,
                contraseña: inputContraseña.value
            });

            formularioRegistro.reset();

            console.log("Clientes nuevos: ", obtenerUsuario());



        });

        const url = "https://6a15acb191ff9a63de089963.mockapi.io/api/art4/Obras"

        const contenedorTarjetas = document.createElement("div");
        contenedorTarjetas.className = ` w-[960px] overflow-hidden rounded-2xl mx-auto mt-10 `;

        const slider = document.createElement("div");
        slider.className = `flex gap-5 transition-transform duration-1000 ease-in-out`

        const botonApi = crearBoton("Cargar api", "button");
        botonApi.className = `btnApi bg-[#64533e] border-none p-2 mb-3 mt-4 rounded-lg cursor-pointer text-[#ebcc90] w-25 flex self-center justify-around`;

        main.appendChild(botonApi);

        contenedorTarjetas.appendChild(slider);
        main.appendChild(contenedorTarjetas);

        const mensajeCarga = document.createElement("p");
        main.appendChild(mensajeCarga);


        botonApi.addEventListener('click', (e) => {
            e.preventDefault();

            mensajeCarga.textContent = "Cargando api..."

            /* const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
            
            async function pausa() {
                await delay(3000);
                getData();
            }

            pausa(); */


            setTimeout(() => {
                botonApi.hidden = true;
                getData();
            }, 2000);

            async function getData() {


                try {
                    const response = await fetch(url);

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const datos = await response.json();

                    datos.forEach(item => {
                        const tarjeta = document.createElement("div");
                        tarjeta.className = `tarjeta min-w-[300px] bg-white rounded-2xl shadow-lg p-4 flex-shrink-0`;
                        tarjeta.innerHTML = `<img src="${item.imagen}" alt="${item.alt}" class=" w-full h-[200px] object-cover rounded-xl">
                <h2 class="text-md  mt-4">${item.titulo}</h2>` ;

                        slider.appendChild(tarjeta);
                    });

                    let posicion = 1;

                    const tarjetas = document.querySelectorAll(".tarjeta");

                    const moverSlider = () => {
                        
                        if (tarjetas.length === 0) return;

                        slider.style.transform = `translateX(-${posicion * 300}px)`;
                        slider.style.transition = `transform 3s linear`;

                        posicion++;

                        if (posicion > tarjetas.length - 3) {
                            posicion = 0;
                        }
                        
                        setTimeout(() => {
                            moverSlider();
                        }, 2990);
                    };
                    
                    moverSlider();
                    console.log(datos);

                    mensajeCarga.innerHTML = "";

                   
                } catch (error) {
                    console.log("Error al cargar la api: ", error);

                    main.innerHTML = `<h2>Error al cargar los datos</h2>`;
                }
            }

            

        })

    });

}
