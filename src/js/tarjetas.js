import obrasDB from "../db/ObrasDB.js";

const main = document.querySelector("main");

function renderizarObras(arrayObras) {
    const articles = document.getElementById("seccionCatalogoObras");

const obrasHtml = arrayObras.map(obra => `<article class="w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 box-shadow 5px 5px 15px -4px [#000000] p-2 sm:p-3 md:p-4 bg-[#8b7355]
                    transition delay-150 duration-300 ease-in-out rounded-xl text-[#cfb583] border-none hover:scale-105 transition-transform 
                    duration-300 hover:bg-[#9c8463] flex flex-col items-center">
    <a href="#" class="w-full h-full flex items-center justify-center overflow-hidden"><img
        class="w-full h-full object-cover rounded-lg"
        src="${obra.imagen}"
        alt="${obra.titulo}"></a>
    <div class="w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 absolute inset-0 flex flex-col justify-center p-3 sm:p-4 md:p-5
                        text-center opacity-0 hover:opacity-90 bg-black bg-opacity-75
                        transition-opacity duration-300 rounded-xl">
        <h3 class="text-sm md:text-base lg:text-lg">${obra.titulo}</h3>
        <table
            class="w-full text-xs md:text-sm flex-col justify-center text-left mx-auto mt-1 md:mt-2">
            <tr>
                <th>Autor</th>
                <td>${obra.autor}</td>
            </tr>
            <tr>
                <th>Año</th>
                <td>${obra.año}</td>
            </tr>
            <tr>
                <th>Estilo</th>
                <td>${obra.estilo}</td>
            </tr>
        </table>
    </div>
</article>`).join("");

    articles.innerHTML = obrasHtml;

}

const campoSelect = document.getElementById("campoFiltro");
const valorFiltro = document.getElementById("valorFiltro");
const botonLimpiar = document.getElementById("limpiarFiltro");

botonLimpiar.addEventListener("click", function() {
    valorFiltro.value = "";
    renderizarObras(obrasDB);
});

campoSelect.addEventListener("change", function() {
    valorFiltro.value = "";
    valorFiltro.placeholder = `Ingrese el ${campoSelect.value.toLowerCase()}...`;
});

valorFiltro.addEventListener("input", function() {
    const campo = campoSelect.value.toLowerCase();
    const valor = valorFiltro.value.trim().toLowerCase();

    const obrasFiltradas = obrasDB.filter(obra => {
        return obra[campo]?.toString().toLowerCase().includes(valor);
    });

    renderizarObras(obrasFiltradas);
});

const inicializar = window.addEventListener('DOMContentLoaded', function() {
    console.log('DOM listo, cargando pagina...');
    renderizarObras(obrasDB);
});




export { inicializar };

export { renderizarObras };
