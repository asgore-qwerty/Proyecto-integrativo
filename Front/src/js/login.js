import { crearCampoForm, crearBoton, validarUsuario, validarCampos } from "./funciones.js";
import { obtenerUsuario, agregarUsuario } from "../db/usuariosDB.js";
import { register } from "./register.js";
import { modificarInfo } from "./modificarUsuario.js";

const url = "https://6a1080f4d2a985707036e0c1.mockapi.io/api/recomendadas/obrasRecomendadas";
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


                const contenedorBotones = document.createElement("div");
                contenedorBotones.className = "flex gap-4 mt-6 flex-wrap justify-center";
                main.appendChild(contenedorBotones);

                contenedorBotones.appendChild(crearBoton("Ver Obras", "button", "btnObrasRecomendadas"));
                const botonObrasRecomendadas = main.querySelector("#btnObrasRecomendadas");

                botonObrasRecomendadas.addEventListener("click", (e) => {
                    e.preventDefault();
                    main.innerHTML = "";

                    const mensaje = document.createElement("h3");
                    mensaje.className = "text-4xl font-bold text-center col-span-4 mt-10";
                    main.appendChild(mensaje);
                    mensaje.textContent = "Cargando Obras...";

                    const contenedorTarjetas = document.createElement("div");
                    contenedorTarjetas.className = "w-full min-h-screen  p-8 grid grid-cols-4 gap-6 items-start";
                    main.appendChild(contenedorTarjetas);





                    setTimeout(() => {
                        
                    }, 2000);

                    async function getData() {


                        try {
                            const response = await fetch(url);

                            if (!response.ok) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }

                            const datos = await response.json();


                            datos.forEach(obra => {
                                const tarjeta = document.createElement("div");
                                tarjeta.className = "bg-[#8b7355] rounded-2xl shadow-lg p-4 transition-transform hover:scale-105 duration-300";
                                tarjeta.innerHTML = ` <img src="${obra.imagen}" alt="${obra.alt}" class="w-full h-[200px] object-cover rounded-xl">
                                                      <h2 class="text-md font-bold mt-4  text-gray-800">${obra.titulo}</h2> <p class="text-sm  mt-2 
                                                      text-gray-800">${obra.autor}</p>`;

                                contenedorTarjetas.appendChild(tarjeta);
                            });




                            console.log(datos);

                            mensaje.innerHTML = "";


                        } catch (error) {
                            console.log("Error al cargar la api: ", error);

                            main.innerHTML = `<h2>Error al cargar los datos</h2>`;
                        }
                    }

                    getData();



                });


                const contenedorInfo = document.createElement("div");
                contenedorInfo.id = "contenedorInfo";
                main.appendChild(contenedorInfo);

                contenedorBotones.appendChild(crearBoton("Ver info", "button", "btnVerInfo"));
                const botonVerInfo = main.querySelector("#btnVerInfo");


                botonVerInfo.addEventListener("click", () => {

                    contenedorInfo.innerHTML = "";

                    const info = document.createElement("p")
                    info.innerHTML = `
                    <strong>Nombre:</strong> ${usuarioEncontrado.nombre}<br>
                    <strong>Correo:</strong> ${usuarioEncontrado.email}<br>
                    <strong>Teléfono:</strong> ${usuarioEncontrado.telefono}<br>
                    <strong>Fecha de Nacimiento:</strong> ${usuarioEncontrado.fechaNacimiento}`;
                    contenedorInfo.appendChild(info);
                });

                contenedorBotones.appendChild(crearBoton("Editar info", "button", "btnEditarInfo"));
                const botonEditarInfo = main.querySelector("#btnEditarInfo");
                
                botonEditarInfo.addEventListener("click", () => {
                    contenedorInfo.innerHTML = "";
                    modificarInfo(usuarioEncontrado.id, contenedorInfo);
                    
                });

                contenedorBotones.appendChild(crearBoton("Cerrar Sesión", "button", "btnCerrarSesion"));
                const botonCerrarSesion = main.querySelector("#btnCerrarSesion");
                botonCerrarSesion.addEventListener("click", () => {
                    console.log("Sesión cerrada");
                    main.innerHTML = "";
                    login();
                    document.getElementById("aLogin").click();
                });










            } else {

                alert("El correo o la contraseña no coinciden con nuestros registros.");
            }




        });



    });
}
