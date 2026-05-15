const usuariosDB = [
  {
    id: 1,
    nombre: "Carolina Ortiz",
    fechaNacimiento: "1990-05-12",
    email: "carolina.ortiz@email.com",
    telefono: "5551234",
    contrasena: "1234",
  },
  {
    id: 2,
    nombre: "Mauricio Castaño",
    fechaNacimiento: "1985-08-20",
    email: "mauricio.castaño@email.com",
    telefono: "5555678",
    contrasena: "1234",
  },
  {
    id: 3,
    nombre: "felipe Gaviria",
    fechaNacimiento: "1995-12-10",
    email: "felipe.gaviria@email.com",
    telefono: "5559012",
    contrasena: "1234",
  },
  {
    id: 4,
    nombre: "jonatan Gil",
    fechaNacimiento: "2000-07-25",
    email: "jonatan.gil@email.com",
    telefono: "5553456",
    contrasena: "1234",
  },
  {
    id: 5,
    nombre: "Laura Martínez",
    fechaNacimiento: "2023-05-12",
    email: "laura.martinez@email.com",
    telefono: "5550192",
    contraseña: "abc123"
  },
  {
    id: 6,
    nombre: "Carlos Rivera",
    fechaNacimiento: "2022-11-03",
    email: "carlos.r@email.com",
    telefono: "5553847",
    contraseña: "def456"
  },
  {
    id: 7,
    nombre: "Sofía Gómez",
    fechaNacimiento: "2024-01-20",
    email: "sgomez.tech@email.com",
    telefono: "5559921",
    contraseña: "ghi789"
  },
  {
    id: 8,
    nombre: "Javier López",
    fechaNacimiento: "2024-04-10",
    email: "jlopez99@email.com",
    telefono: "5557744",
    contraseña: "jkl012"
  }
];



export function obtenerUsuario(){
    return usuariosDB;
};

export function agregarUsuario(usuario){
    usuariosDB.push(usuario);
};