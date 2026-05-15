import { register } from "./register.js";
import { login } from "./login.js";

register();
login();

import { renderizarObras } from "./tarjetas.js";

import obrasDB from "../db/ObrasDB.js";

renderizarObras(obrasDB);