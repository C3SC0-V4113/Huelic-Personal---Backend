import { Router } from "express";
import { validarJWT } from "../middlewares/validar-jwt";
import {
  actualizarEmpleado,
  crearEmpleado,
  eliminarEmpleado,
  obtenerEmpleados,
} from "../controllers/employee";

const routerEmployee = Router();

/**
 * Rutas de Personas / Person
 * host + /api/person
 */

/** Todas las rutas deben ser validadas del JWT */
routerEmployee.use(validarJWT);

/** Crear Empleado */
routerEmployee.post("/", crearEmpleado);

/** Obtener Empleados */
routerEmployee.get("/", obtenerEmpleados);

/** Actualizar Empleado */
routerEmployee.put("/:id", actualizarEmpleado);

/** Eliminar Empleado */
routerEmployee.delete("/:id", eliminarEmpleado);

export { routerEmployee };
