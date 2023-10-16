import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import generarJWT from "../helpers/jwt";
import { IGetUserRequest } from "../interfaces/userInterfaces";
import Usuario from "../models/Usuario";

const crearUsuario = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario ya existe con ese correo",
      });
    }

    usuario = new Usuario(req.body);

    /** Encriptar contraseña */
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    /** Generar JWT */
    const token = await generarJWT(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Porfavor hable con el administrador",
    });
  }
};

const loginUsuario = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "No existe usuario con ese correo",
      });
    }

    /** Confirmar el password */
    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Contraseña no válida",
      });
    }

    /** Generar JWT */
    const token = await generarJWT(usuario.id, usuario.name);

    /** Respuesta satisfactoria */
    res.status(200).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Porfavor hable con el administrador",
    });
  }
};

const revalidarToken = async (req: Request, res: Response) => {
  const { uid, name } = req as IGetUserRequest;

  /** Generar nuevo JWT y retornarlo en esta peticion */
  const token = await generarJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};

export { crearUsuario, loginUsuario, revalidarToken };
