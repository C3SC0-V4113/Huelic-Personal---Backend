import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";
import {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} from "../controllers/auth";
import { validarJWT } from "../middlewares/validar-jwt";

const routerAuth = Router();

/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

routerAuth.post(
  "/new",
  [
    /** Middlewares */
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);

routerAuth.post(
  "/",
  [
    /** Middlewares */
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

routerAuth.get(
  "/renew",
  (req, res, next) => validarJWT(req, res, next),
  revalidarToken
);

export { routerAuth };
