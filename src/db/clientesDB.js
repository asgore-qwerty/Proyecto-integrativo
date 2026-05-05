const clientesDB = [
  {
    id: 1,
    nombre: "Laura Martínez",
    email: "laura.martinez@email.com",
    contraseña: "abc123",
    telefono: "555-0192",
    direccion: {
      calle: "Avenida Principal 123",
      ciudad: "Metrópolis",
      codigoPostal: "10001"
    },
    fechaRegistro: "2023-05-12",
    comprasTotales: 1250.50
  },
  {
    id: 2,
    nombre: "Carlos Rivera",
    email: "carlos.r@email.com",
    contraseña: "def456",
    telefono: "555-3847",
    direccion: {
      calle: "Calle del Sol 45",
      ciudad: "Villa Esperanza",
      codigoPostal: "20020"
    },
    fechaRegistro: "2022-11-03",
    comprasTotales: 340.00
  },
  {
    id: 3,
    nombre: "Sofía Gómez",
    email: "sgomez.tech@email.com",
    contraseña: "ghi789",
    telefono: "555-9921",
    direccion: {
      calle: "Bulevar Central 88",
      ciudad: "Nueva Ciudad",
      codigoPostal: "30045"
    },
    fechaRegistro: "2024-01-20",
    comprasTotales: 2100.75
  },
  {
    id: 4,
    nombre: "Javier López",
    email: "jlopez99@email.com",
    contraseña: "jkl012",
    telefono: "555-7744",
    direccion: {
      calle: "Pasaje Industrial 9",
      ciudad: "Metrópolis",
      codigoPostal: "10002"
    },
    fechaRegistro: "2024-04-10",
    comprasTotales: 0.00
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

export function obtenerUsuario(){
    return clientesDB;
}

export function agregarUsuario(usuario){
    clientesDB.push(usuario);
}