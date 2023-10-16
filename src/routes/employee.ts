import { Router } from "express";

const routerEmployee = Router();

/**
 * Rutas de Personas / Person
 * host + /api/person
 */

routerEmployee.get("/", (req, res) => {
  console.log("Se requiere en /");
  res.json({
    ok: true,
  });
});

export { routerEmployee };
