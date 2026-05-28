# ART4

_Art4 es una página web donde puedes encontrar un catálogo con diferentes obras de arte exclusivas. Podrás crear una cuenta e iniciar sesión para tener acceso a obras de arte diferentes y más exclusivas, que más adelante podrá comprar y almacenar en un carrito de compras._

## Construido con 🛠️
* Html
* Tailwind
* Css
* Javascript

## Consumo de api

_Cada autor realizó el consumo de una api, agregando un botón que muestra un mensaje de carga mientras la información de la api llega. El proceso se realiza de esta manera:_
* Lo primero que se hace es que se realiza una función asíncrona (esto para que la página no se congele mientras hace la petición a la api, y pueda continuar su flujo normal).
  ```
  async function getData() {}
  ```
* Dentro de esta se crea la instrucción try - catch, en el try se realiza la petición, le estamos indicando que intente ejecutar ese bloque de código, pero si algo falla entra en el catch para atrapar el error sin perjudicar la ejecución del resto de funciones de la página.
* Se realiza la petición con la función fetch (esta es la que realiza la petición a la api) en conjunto con la operación await (para que al realizar la petición se espere la respuesta).
  ```
  const response = await fetch(url);
  ```
* Se valida que se reciba la respuesta desde la api, en caso de no recibirse habrá un error http.
  ```
  if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
  ```
* En caso de recibir una respuesta de la api, se declara una constante que me permita almacenar la información, esta información llega en formato Json, por lo que se usa .json() para transformar esa información en un objeto que sea fácil de interpretar para javascript.
 ```
  const datos = await response.json();
  ```
* Luego se implementa forEach (que recorre todos los datos de la api (ya transformados) o .map (que itera todos los elementos y devuelve un arreglo nuevo, pero transformado) y se le aplican sus respectivos estilos ya sea con tailwind o con css.
  
  - Ejemplo usando forEach().
  ```
  datos.forEach(item => {
                        const tarjeta = document.createElement("div");
                        tarjeta.className = `tarjeta min-w-[300px] bg-white rounded-2xl shadow-lg p-4 flex-shrink-0`;
                        tarjeta.innerHTML = `<img src="${item.imagen}" alt="${item.alt}" class=" w-full h-[200px] object-cover rounded-xl">
                        <h2 class="text-md  mt-4">${item.titulo}</h2>`;

                        slider.appendChild(tarjeta);
                    });
  ```

  - Ejemplo usando .map().
  ```
  render.map(obra => <article class="w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 box-shadow 5px 5px 15px -4px [#000000] p-2 sm:p-3 md:p-4 bg-[#8b7355]
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
                <td>${obra.fecha}</td>
            </tr>
        </table>
    </div>
  </article>).join("");
  ```
* Finalmente se llama a la función creada (la asíncrona) para que se ejecute.
  ```
  getData();
  ```

## Autores
* **Mauricio Castaño**
* **Jonatan Gil**
* **Juan Felipe Gaviria**
* **Carolina Ortiz**
