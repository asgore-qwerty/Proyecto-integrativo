const bd = [{
    nombre: "Juan Felipe",
    correo: "juan@ejemplo.com",
    telefono: "123456789",
    asunto: "Consulta",
    observaciones: "Me gustaría obtener más información sobre sus servicios."
}];


const botonEnviar = document.getElementById("botonEnviar");
const botonBuscar = document.getElementById("botonBuscar");
const contenedor = document.getElementById("contacto");



const obtenerValores = () => {

    const datos = {};

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let asunto = document.getElementById("asunto").value;
    let observaciones = document.getElementById("observaciones").value;

    if (!nombre || !correo || !telefono || !asunto) {
        alert('Por favor completa todos los campos');
        return;
    };

    datos.nombre = nombre;
    datos.correo = correo;
    datos.telefono = telefono;
    datos.asunto = asunto;
    datos.observaciones = observaciones;

    bd.push(datos);

    console.log("Elementos guardados");

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";     //esto lo que hace de la linea 41 a 45 es reiniciar los input, que queden vacios
    document.getElementById("asunto").value = "";
    document.getElementById("observaciones").value = "";

    let respuesta = `<h3>RESPUESTA ENVIADA EXITOSAMENTE</h3>
    <p>Nombre: ${nombre}</p>
    <p>Correo: ${correo}</p>              
    <p>Telefono: ${telefono}</p>
    <p>Asunto: ${asunto}</p>
    <p>Observación: ${observaciones}</p>`;
//seutilizan las comillas al reves para poder utilzar las variables dentro del string
    contenedor.innerHTML = respuesta;

    setTimeout(() => { contenedor.innerHTML = ""; }, 10000);


};

console.log(bd);

const buscarValores = () => {

    let nombreBuscar = document.getElementById("nombre").value;
    let resultado = bd.filter((usuario) => usuario.nombre === nombreBuscar);
    let respuesta = ``;

    if (resultado.length > 0) {

        respuesta = `<h3>Usuario encontrado</h3>
        <p>Nombre: ${resultado[0].nombre}</p>
        <p>Correo: ${resultado[0].correo}</p>
        <p>Telefono: ${resultado[0].telefono}</p>
        <p>Asunto: ${resultado[0].asunto}</p>
        <p>Observación: ${resultado[0].observaciones}</p>`;

        document.getElementById("nombre").value = "";

        contenedor.innerHTML = respuesta;
    } else {
        respuesta = "<h3>Usuario no encontrado</h3>";
        contenedor.innerHTML = respuesta;
    }

};

botonEnviar.addEventListener("click", obtenerValores);
botonBuscar.addEventListener("click", buscarValores);