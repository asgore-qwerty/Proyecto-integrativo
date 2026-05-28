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
const botonCargar = document.getElementById("botonCargar");


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
    document.getElementById("telefono").value = "";    
    document.getElementById("asunto").value = "";
    document.getElementById("observaciones").value = "";

    let respuesta = `<h3>RESPUESTA ENVIADA EXITOSAMENTE</h3>
    <p>Nombre: ${nombre}</p>
    <p>Correo: ${correo}</p>              
    <p>Telefono: ${telefono}</p>
    <p>Asunto: ${asunto}</p>
    <p>Observación: ${observaciones}</p>`;

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

const cargarResenias = async () => {
    
    contenedor.innerHTML = `<p class="cargando">Cargando...</p>`;

    try {
        const datos = await fetch("https://6a15acb191ff9a63de089963.mockapi.io/api/art4/resenias");

        if (!datos.ok) {
            throw new Error(`Error del servidor: ${datos.status}`);
        }

        const data = await datos.json();
        console.log("Reseñas cargadas:", data);

        
        contenedor.innerHTML = "<h3>Reseñas de la comunidad</h3>";

        data.forEach((item) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta-resenia");

        

            tarjeta.innerHTML = `
                <p class="resenia-nombre">${item.nombre}</p>
                <p class="resenia-puntuacion"> ${item.puntuacion}</p>
                <p class="resenia-texto">${item.resenia}</p>`;

            contenedor.appendChild(tarjeta);
        });

    } catch (error) {
       
        contenedor.innerHTML = `
            <p class="error-mensaje">No se pudieron cargar los datos. Intenta más tarde.</p>`;
        console.error("Error al cargar reseñas:", error);
    }
};

botonEnviar.addEventListener("click", obtenerValores);
botonBuscar.addEventListener("click", buscarValores);
botonCargar.addEventListener("click", cargarResenias);

