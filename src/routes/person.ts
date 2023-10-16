import { Router } from "express";

const routerPerson = Router();

/**
 * Rutas de Personas / Person
 * host + /api/person
 */

routerPerson.get("/", (req, res) => {
  console.log("Se requiere en /");
  res.json({
    ok: true,
  });
});

export { routerPerson };
