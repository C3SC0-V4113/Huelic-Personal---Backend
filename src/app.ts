import express from "express";

/** Crear el servidor de express */
const app = express();
const port = 4000;

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
