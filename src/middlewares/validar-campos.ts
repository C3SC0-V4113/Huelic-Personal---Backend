import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validarCampos = (req: Request, res: Response, next: NextFunction) => {
  /** Manejo de Errores */
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
};

export { validarCampos };
