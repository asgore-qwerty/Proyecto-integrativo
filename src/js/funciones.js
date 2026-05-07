import { obtenerUsuario, agregarUsuario } from "../db/usuariosDB.js"; 

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
    span.classList = "alerta whitespace-pre-line text[#556D8B]"
    span.style.display = "block";
    span.style.fontSize = "18px";

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


export function validarUsuario(inputCorreo){
    const contenedor = inputCorreo.closest('div');
    const spanError = contenedor.querySelector('.alerta');
    const email = inputCorreo.value.trim().toLowerCase();
    const rejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usuarios = obtenerUsuario() || [];

    const existe = usuarios.some(u => 
        u && u.email && u.email.toLowerCase() === email
    )

    if (!rejex.test(email)) {
        spanError.textContent = "Formato correcto: ejemplo@dominio.com";
        inputCorreo.style.borderColor = "#556D8B";
        return false;
    }

    if (!email) {
    spanError.textContent = "El correo es obligatorio";
    spanError.style.color = "#556D8B";
    inputCorreo.style.borderColor = "#556D8B";
    return false;
    }

    if(existe){
        spanError.textContent = "Este correo ya está registrado";
        spanError.style.color = "#556D8B";
        inputCorreo.style.borderColor = "#556D8B";

        return false;
    }

    spanError.textContent = "Este correo está disponible";
    spanError.style.color = "#6D8B55";
    inputCorreo.style.borderColor = "#6D8B55";

    console.log('valor: ', inputCorreo.value);
    console.log('usuarios: ', obtenerUsuario());
    return true;
}

export function validarCampos(input) {
    const contenedor = input.closest('div');
    const spanError = contenedor.querySelector('.alerta');

    if (!input.value.trim()) {
        spanError.textContent = "Este campo es obligatorio";
        spanError.style.color = "#556D8B";
        input.style.borderColor = "#556D8B";
        return false;
    }   

    spanError.textContent = "";
    input.style.borderColor = "";
    return true;
}
