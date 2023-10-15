import express from "express";
import "dotenv/config";

/** Crear el servidor de express */
const app = express();
const port = process.env.PORT;

/** Directorio Publico */
app.use(express.static("public"));

/** Lectura y parseo del Body */
app.use(express.json());

/** Rutas */
app.get("/", (req, res) => {
  console.log("Se requiere en /");
  res.json({
    ok: true,
  });
});

/** Escuchar peticiones */
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
