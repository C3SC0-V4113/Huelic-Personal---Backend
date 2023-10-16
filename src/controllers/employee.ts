import { Request, Response } from "express";
import Empleado from "../models/Empleado";

const crearEmpleado = async (req: Request, res: Response) => {
  const empleado = new Empleado(req.body);

  try {
    const empleadoGuardado = await empleado.save();
    res.status(201).json({
      ok: true,
      empleado: empleadoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const obtenerEmpleados = async (req: Request, res: Response) => {
  try {
    const empleados = await Empleado.find();
    res.status(201).json({
      ok: true,
      empleados,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarEmpleado = async (req: Request, res: Response) => {
  const empleadoID = req.params.id;

  try {
    const empleado = await Empleado.findById(empleadoID);
    if (!empleado) {
      return res.status(404).json({
        ok: false,
        msg: "Empleado no existe",
      });
    }

    const nuevoEmpleado = {
      ...req.body,
    };

    const empleadoActualizado = await Empleado.findByIdAndUpdate(
      empleadoID,
      nuevoEmpleado,
      { new: true }
    );

    res.status(201).json({
      ok: true,
      empleado: empleadoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const eliminarEmpleado = async (req: Request, res: Response) => {
  const empleadoID = req.params.id;
  try {
    const empleado = await Empleado.findById(empleadoID);
    if (!empleado) {
      return res.status(404).json({
        ok: false,
        msg: "Empleado no existe",
      });
    }

    await Empleado.findByIdAndDelete(empleadoID);

    res.status(201).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

export {
  crearEmpleado,
  obtenerEmpleados,
  actualizarEmpleado,
  eliminarEmpleado,
};
