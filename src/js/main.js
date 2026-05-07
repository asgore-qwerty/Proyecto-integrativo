import { register } from "./register.js";

register();

import { renderizarObras } from "./tarjetas.js";

import obrasDB from "../db/ObrasDB.js";

renderizarObras(obrasDB);
