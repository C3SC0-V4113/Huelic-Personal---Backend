import express from "express";

/** Crear el servidor de express */
const app = express();

/** Escuchar peticiones */
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`);
});
