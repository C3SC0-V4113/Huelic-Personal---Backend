import express from "express";
import "dotenv/config";
import { routerAuth } from "./routes/auth";
import { routerPerson } from "./routes/person";
import { dbConnection } from "./database/config";

/** Crear el servidor de express */
const app = express();
const port = process.env.PORT;

/** Base de datos */
dbConnection();

/** Directorio Publico */
app.use(express.static("public"));

/** Lectura y parseo del Body */
app.use(express.json());

/** Rutas */
app.use("/api/auth", routerAuth);
app.use("/api/person", routerPerson);

/** Escuchar peticiones */
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
