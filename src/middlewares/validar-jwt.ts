import { Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { IGetUserRequest } from "../interfaces/userInterfaces";

const validarJWT = (
  req: IGetUserRequest,
  res: Response,
  next: NextFunction
) => {
  /** x-token in headers */
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la peticion",
    });
  }

  try {
    const SECRET_KEY: Secret = process.env.SECRET_JWT_SEED!;
    const payload = jwt.verify(token, SECRET_KEY);
    const { uid, name } = payload as IGetUserRequest;

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }

  next();
};

export { validarJWT };
