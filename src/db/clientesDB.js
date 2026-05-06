const clientesDB = [
  {
    id: 1,
    nombre: "Laura Martínez",
    fechaNacimiento: "2023-05-12",
    email: "laura.martinez@email.com",
    telefono: "5550192",
    contraseña: "abc123"
  },
  {
    id: 2,
    nombre: "Carlos Rivera",
    fechaNacimiento: "2022-11-03",
    email: "carlos.r@email.com",
    telefono: "5553847",
    contraseña: "def456"
  },
  {
    id: 3,
    nombre: "Sofía Gómez",
    fechaNacimiento: "2024-01-20",
    email: "sgomez.tech@email.com",
    telefono: "5559921",
    contraseña: "ghi789"
  },
  {
    id: 4,
    nombre: "Javier López",
    fechaNacimiento: "2024-04-10",
    email: "jlopez99@email.com",
    telefono: "5557744",
    contraseña: "jkl012"
  }
];

// --- Ejemplos de cómo usar este array ---

/* // 1. Encontrar un cliente por su ID
const clienteEncontrado = clientesDB.find(cliente => cliente.id === 3);
console.log("Cliente encontrado:", clienteEncontrado.nombre); // Sofía Gómez

// 2. Filtrar solo los clientes activos
const clientesActivos = clientesDB.filter(cliente => cliente.estado === "Activo");
console.log("Número de clientes activos:", clientesActivos.length); // 2

// 3. Calcular el total de ventas de todos los clientes
const ventasTotales = clientesDB.reduce((total, cliente) => total + cliente.comprasTotales, 0);
console.log("Ventas totales: $" + ventasTotales); // $3691.25 */

export function obtenerUsuario() {
  return clientesDB;
}

export function agregarUsuario(usuario){
    clientesDB.push(usuario);
}