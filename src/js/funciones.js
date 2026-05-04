import { obtenerUsuario, agregarUsuario } from "../db/clientesDB.js"; 

export function crearCampoForm(etiquetaTexto, tipo, idNombre){
    const contenedorCampo = document.createElement('div');
    contenedorCampo.style.marginBottom = '15px';

    const label = document.createElement('label');
    label.textContent = etiquetaTexto;
    label.htmlFor = idNombre;
    label.style.display = 'block';
    label.classList = "text-lg flex flex-col";

    const input = document.createElement('input');
    input.type = tipo;
    input.id = idNombre;
    input.required = true;
    input.placeholder = `Ingrese su ${etiquetaTexto.toLowerCase()}`;
    input.classList = "rounded-md bg-[#ffffff] w-50";

    const span = document.createElement('span');
    span.classList = "alerta"

    contenedorCampo.appendChild(label);
    contenedorCampo.appendChild(input);
    contenedorCampo.appendChild(span);

    return contenedorCampo;
}

export function crearBoton(nombre, tipo){

    const boton = document.createElement('button');
    boton.textContent = nombre;
    boton.type = tipo;
    boton.classList = "botonRegistro bg-[#64533e] border-none p-1 mb-3 mt-4 rounded-lg cursor-pointer text-[#ebcc90] w-25 flex self-center justify-around";
    boton.style = "box-shadow: 5px 5px 15px -4px #000000";

    return boton;
}

export function validarUsuario(inputUserName){
    const contenedor = inputUserName.parentElement;
    const spanError = contenedor.querySelector('span');
    const usuario = inputUserName.value.trim().toLowerCase();
    const usuarios = obtenerUsuario();

    const existe = usuarios.some(u => 
        u.nombreUsuario.toLocaleLowerCase() === usuario
    )

    if(existe){
        spanError.textContent = "Usuario ya existe";
        spanError.style.color = "red";
        inputUserName.style.borderColor = "red";

        return false;
    }

    spanError.textContent = "Usuario disponible";
    spanError.style.color = "green";
    inputUserName.style.borderColor = "green";

    console.log('valor: ', inputUserName.value);
    console.log('usuarios: ', obtenerUsuario());
    return true;
}